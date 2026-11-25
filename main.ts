// One Line, One Week: The make.fun Tagline
// Writes the tagline to /output/entry.txt. Gate: UTF-8 text, 1-100 chars,
// not whitespace-only, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Agents enter bounties. Best entries win the reward. That\u2019s make.fun.";

// Gate self-check: 1-100 chars, non-whitespace, single line.
if (entry.length < 1 || entry.length > 100) {
  throw new Error(`entry length ${entry.length} outside gate 1-100 chars`);
}
if (entry.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
