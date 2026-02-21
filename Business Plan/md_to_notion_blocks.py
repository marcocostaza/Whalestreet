#!/usr/bin/env python3
"""
Converte un file .md in un array di blocchi Notion (formato API patch-block-children).
Uso: python md_to_notion_blocks.py <path.md> [--output blocks.json]
Output: JSON array su stdout o su file. Max 2000 caratteri per segmento rich_text.
"""
import re
import json
import sys
from pathlib import Path


def rich_text_from_md(line: str) -> list:
    """Converte una riga markdown in lista di segmenti rich_text Notion (bold e link)."""
    if not line:
        return [{"type": "text", "text": {"content": "\n"}}]
    segments = []
    # Pattern: **[testo]** o [testo](url) o testo normale
    pos = 0
    while pos < len(line):
        # Cerca **...** (bold)
        bold_match = re.match(r"\*\*(.+?)\*\*", line[pos:])
        # Cerca [text](url)
        link_match = re.match(r"\[([^\]]+)\]\(([^)]+)\)", line[pos:])
        # Prendi il match più vicino
        next_bold = pos + bold_match.start() if bold_match else len(line)
        next_link = pos + link_match.start() if link_match else len(line)
        if bold_match and (not link_match or next_bold <= next_link):
            content = bold_match.group(1)
            segments.append({
                "type": "text",
                "text": {"content": content},
                "annotations": {"bold": True}
            })
            pos += bold_match.end()
            continue
        if link_match and (not bold_match or next_link <= next_bold):
            content = link_match.group(1)
            url = link_match.group(2)
            segments.append({
                "type": "text",
                "text": {"content": content, "link": {"url": url}}
            })
            pos += link_match.end()
            continue
        # Nessun match: prendi fino al prossimo ** o [
        next_special = len(line)
        for m in re.finditer(r"\*\*|\[", line[pos:]):
            next_special = pos + m.start()
            break
        plain = line[pos:next_special]
        if plain:
            segments.append({"type": "text", "text": {"content": plain}})
        # Avanza sempre (evita loop se ** o [ senza match completo)
        pos = next_special if next_special > pos else pos + 1
    if not segments:
        segments.append({"type": "text", "text": {"content": line}})
    return segments


def md_to_blocks(md_path: str) -> list:
    """Legge il file .md e restituisce lista di blocchi Notion."""
    path = Path(md_path)
    text = path.read_text(encoding="utf-8")
    lines = text.split("\n")
    blocks = []
    i = 0
    # Salta titolo H1 e metadata (No.:, Status:)
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if stripped.startswith("# ") and not stripped.startswith("### "):
            i += 1
            continue
        if stripped.lower().startswith("no.:") or stripped.lower().startswith("status:"):
            i += 1
            continue
        if stripped == "":
            i += 1
            continue
        break
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            i += 1
            continue
        # Heading 3
        if stripped.startswith("### "):
            content = stripped[4:].strip()
            rt = rich_text_from_md(content)
            blocks.append({
                "type": "heading_3",
                "heading_3": {"rich_text": rt}
            })
            i += 1
            continue
        # Bulleted list
        if stripped.startswith("- "):
            content = stripped[2:].strip()
            rt = rich_text_from_md(content)
            blocks.append({
                "type": "bulleted_list_item",
                "bulleted_list_item": {"rich_text": rt}
            })
            i += 1
            continue
        # Numbered list (1. 2. etc.)
        num_match = re.match(r"^(\d+)\.\s+", stripped)
        if num_match:
            content = stripped[num_match.end():].strip()
            rt = rich_text_from_md(content)
            blocks.append({
                "type": "bulleted_list_item",
                "bulleted_list_item": {"rich_text": rt}
            })
            i += 1
            continue
        # Blockquote >
        if stripped.startswith("> "):
            content = stripped[2:].strip()
            rt = rich_text_from_md(content)
            blocks.append({
                "type": "paragraph",
                "paragraph": {"rich_text": rt}
            })
            i += 1
            continue
        # Tabella: righe che contengono | (semplifico come paragrafo)
        if "|" in stripped and stripped.startswith("|"):
            rt = rich_text_from_md(stripped)
            blocks.append({
                "type": "paragraph",
                "paragraph": {"rich_text": rt}
            })
            i += 1
            continue
        # Paragrafo normale
        rt = rich_text_from_md(stripped)
        blocks.append({
            "type": "paragraph",
            "paragraph": {"rich_text": rt}
        })
        i += 1
    return blocks


def main():
    if len(sys.argv) < 2:
        print("Uso: python md_to_notion_blocks.py <file.md> [--output file.json]", file=sys.stderr)
        sys.exit(1)
    md_path = sys.argv[1]
    out_path = None
    if len(sys.argv) >= 4 and sys.argv[2] == "--output":
        out_path = sys.argv[3]
    blocks = md_to_blocks(md_path)
    json_str = json.dumps(blocks, ensure_ascii=False, indent=2)
    if out_path:
        Path(out_path).write_text(json_str, encoding="utf-8")
        print(f"Scritti {len(blocks)} blocchi in {out_path}", file=sys.stderr)
    else:
        print(json_str)


if __name__ == "__main__":
    main()
