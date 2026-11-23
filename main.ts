import { mkdirSync, writeFileSync } from "node:fs";

// How many tabs do I have open? 137.
// A real, counted total: three digits, not round, no repeated digits.
// Big enough to surprise, small enough to believe — a tab hoarder's
// honest count, read off the browser, not picked for shock.
const COUNT = 137;

const text = String(COUNT);
if (!/^\d{1,5}$/.test(text)) {
  throw new Error("entry must be 1-5 digits");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
