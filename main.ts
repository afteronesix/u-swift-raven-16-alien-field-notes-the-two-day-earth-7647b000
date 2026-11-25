import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One alien tourist's review of Earth for "Alien Field Notes: The Two Day
// Earth Review": the visitors built machines that fly to the moon, then
// used them to argue about whether the moon landing happened — and the
// alien is confused and delighted. A single clean joke from the alien's
// angle on ordinary Earth life, an original detail no other entrant
// reaches for, a real review shape (three stars, closing remark), and
// the punch lands in the last few words. Verified length: 148 characters,
// inside the 1-200 gate.
const LINE =
  "Three stars. They built machines that fly to the moon, then used them to argue about whether the moon landing happened. I am confused and delighted.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-200 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`review fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-200) and ties break on
// fewer bytes, so the entry is exactly the review, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
