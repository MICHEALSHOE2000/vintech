import fs from "node:fs";

const input = process.argv[2];
const output = process.argv[3] ?? "app/data/catalogue.generated.json";

if (!input) throw new Error("Usage: node scripts/import-catalogue.mjs <pdftotext-output> [output-json]");

const labels = [
  "Price", "Stock", "Configurations", "Release year", "Operating system",
  "Processor", "CPU generation", "Graphics", "RAM", "Maximum RAM", "Storage",
  "Maximum storage", "Screen", "Resolution", "Panel", "Touchscreen", "Battery",
  "Battery life", "Ports", "Weight", "Colour", "Specification level", "Product link",
];

const excluded = new Set(["Price", "Configurations", "Product link"]);
const text = fs.readFileSync(input, "utf8");
const pages = text.split("\f");
const records = [];

for (const page of pages) {
  const header = page.match(/^\s*(\d+)\.\s+(.+?)\s+\((CHEX-LAP-\d{4})\)\s*$/m);
  if (!header) continue;

  const fields = {};
  let current = null;
  const lines = page.slice((header.index ?? 0) + header[0].length).split(/\r?\n/);

  for (const line of lines) {
    if (/CHEX Computers - NeoStore|^\s*Page \d+\s*$/.test(line)) break;
    const matchedLabel = labels.find((label) => new RegExp(`^\\s*${label.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s{2,}`).test(line));
    if (matchedLabel) {
      current = matchedLabel;
      fields[current] = line.replace(new RegExp(`^\\s*${matchedLabel.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s{2,}`), "").trim();
    } else if (current && line.trim()) {
      fields[current] = `${fields[current]} ${line.trim()}`.trim();
    }
  }

  for (const key of excluded) delete fields[key];
  records.push({
    number: Number(header[1]),
    id: header[3],
    name: header[2].replace(/\s+/g, " ").trim(),
    ...fields,
  });
}

if (records.length !== 227) throw new Error(`Expected 227 products, parsed ${records.length}`);

const serialized = JSON.stringify(records, null, 2);
if (/neostore\.ng|https?:\/\/|"Price"|NGN\s*[\d,]/i.test(serialized)) {
  throw new Error("Generated catalogue still contains a prohibited price or source link");
}

fs.writeFileSync(output, `${serialized}\n`);
console.log(`Imported ${records.length} laptops into ${output}`);
