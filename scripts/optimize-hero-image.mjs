#!/usr/bin/env node
/**
 * Ottimizza l'immagine hero: resize a max 1200px lato lungo e salva in WebP.
 * Uso: node scripts/optimize-hero-image.mjs
 */
import sharp from "sharp";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "IMG", "Home_Computer.png");
const outDir = join(root, "public", "IMG");
const outWebp = join(outDir, "Home_Computer.webp");

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 95;

async function main() {
  if (!existsSync(src)) {
    console.error("File non trovato:", src);
    process.exit(1);
  }
  const input = readFileSync(src);
  const meta = await sharp(input).metadata();
  const w = meta.width;
  const h = meta.height;
  const resizeW = w > MAX_WIDTH ? MAX_WIDTH : w;
  const resizeH = Math.round((h * resizeW) / w);

  await sharp(input)
    .resize(resizeW, resizeH, { fit: "inside" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outWebp);

  const { size } = await import("fs").then((fs) => fs.promises.stat(outWebp));
  console.log(`Ok: ${outWebp} (${(size / 1024).toFixed(1)} KB, ${resizeW}x${resizeH})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
