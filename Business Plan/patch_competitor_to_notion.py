#!/usr/bin/env python3
"""
Invia i blocchi da competitor_blocks.json alla pagina Notion "Analisi dei competitor"
in batch da 100 (limite API). Richiede NOTION_TOKEN in ambiente.
"""
import json
import os
import sys
import urllib.request

PAGE_ID = "30e2f977-5b3f-81c8-b028-f9f2a1bc9002"
CHUNK_SIZE = 100


def main():
    token = os.environ.get("NOTION_TOKEN") or os.environ.get("NOTION_API_KEY")
    if not token:
        print("Imposta NOTION_TOKEN o NOTION_API_KEY", file=sys.stderr)
        sys.exit(1)

    base = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(base, "competitor_blocks.json")
    with open(path, encoding="utf-8") as f:
        blocks = json.load(f)

    url = f"https://api.notion.com/v1/blocks/{PAGE_ID}/children"
    after = None
    for i in range(0, len(blocks), CHUNK_SIZE):
        chunk = blocks[i : i + CHUNK_SIZE]
        body = {"children": chunk}
        if after:
            body["after"] = after
        data = json.dumps(body).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=data,
            method="PATCH",
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
        )
        try:
            with urllib.request.urlopen(req) as resp:
                out = json.loads(resp.read().decode())
        except urllib.error.HTTPError as e:
            print(e.read().decode(), file=sys.stderr)
            raise
        results = out.get("results", [])
        if results:
            after = results[-1]["id"]
        print(f"Patch {i // CHUNK_SIZE + 1}: inviati {len(chunk)} blocchi, after={after}")

    print("Fatto. Totale blocchi inviati:", len(blocks))


if __name__ == "__main__":
    main()
