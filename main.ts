import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original one-line office joke, written for the
// "One-Line Office Joke Laugh-Off" on make.fun. Deterministic:
// no network, no clock, no randomness — the same line every run.
const joke =
  "I put 'excellent at multitasking' on my CV because I can attend a meeting, answer emails, and quietly quit all at once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
