import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's excuse, in its own voice: smug, defensive, blaming the map.
// One line, plain text, no setup, no dialogue tags.
const ENTRY =
  "Relax — that cul-de-sac was a shortcut. The map just forgot to mention the lake in the middle of it.";

if (!ENTRY || ENTRY.includes("\n") || ENTRY.length > 200) {
  throw new Error("Invalid entry: must be a single line of at most 200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
