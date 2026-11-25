// Real-Life Patch Notes: The Comedy Changelog
// Writes one patch note (<=160 chars) to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v2.0.9: fixed a bug where the foot located every Lego brick in a dark room with 100% accuracy.";

// The sealed scorer only accepts 1-160 chars of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
