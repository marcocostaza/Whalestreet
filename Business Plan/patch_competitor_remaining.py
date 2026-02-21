#!/usr/bin/env python3
"""
Esegue le patch rimanenti per Analisi competitor (blocchi 25..700) usando curl.
Dopo la prima patch manuale (blocchi 0-24), last_id = id dell'ultimo blocco inserito.
Richiede NOTION_TOKEN in ambiente.
"""
import json
import os
import subprocess
import sys

PAGE_ID = "30e2f977-5b3f-81c8-b028-f9f2a1bc9002"
CHUNK_SIZE = 100  # limite Notion
# Dopo la prima patch MCP (25 blocchi), after è l'id dell'ultimo blocco
AFTER_FIRST_25 = "30e2f977-5b3f-8184-a18d-dc323c4a390b"


def main():
    token = os.environ.get("NOTION_TOKEN") or os.environ.get("NOTION_API_KEY")
    if not token:
        print("Imposta NOTION_TOKEN o NOTION_API_KEY", file=sys.stderr)
        sys.exit(1)

    base = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(base, "competitor_blocks.json"), encoding="utf-8") as f:
        blocks = json.load(f)

    # Blocchi già inviati: 0-24 (25). Restano 25..700 (indici), cioè blocchi da 25 a 700 (escluso 701)
    remaining = blocks[25:]
    after = AFTER_FIRST_25
    total_sent = 25

    for i in range(0, len(remaining), CHUNK_SIZE):
        chunk = remaining[i : i + CHUNK_SIZE]
        body = {"children": chunk}
        if after:
            body["after"] = after
        path = os.path.join(base, "_payload.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(body, f, ensure_ascii=False)

        url = f"https://api.notion.com/v1/blocks/{PAGE_ID}/children"
        cmd = [
            "curl", "-s", "-S", "-X", "PATCH", url,
            "-H", f"Authorization: Bearer {token}",
            "-H", "Content-Type: application/json",
            "-H", "Notion-Version: 2022-06-28",
            "-d", f"@{path}",
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(result.stderr, file=sys.stderr)
            print("Response:", result.stdout[:2000], file=sys.stderr)
            sys.exit(1)
        out = json.loads(result.stdout)
        results = out.get("results", [])
        if results:
            after = results[-1]["id"]
        total_sent += len(chunk)
        print(f"Patch {i // CHUNK_SIZE + 2}: inviati {len(chunk)} blocchi, totale {total_sent}, after={after}")

    print("Fatto. Totale blocchi sulla pagina:", total_sent)


if __name__ == "__main__":
    main()
