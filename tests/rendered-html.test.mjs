import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExportedPage = (name) =>
  readFile(new URL(`../out/${name}`, import.meta.url), "utf8");

test("exports the Vintech homepage with premium branding and SEO", async () => {
  const html = await readExportedPage("index.html");

  assert.match(
    html,
    /<title>Vintech Global \| Premium Laptops, Gaming PCs &amp; Accessories in Lagos<\/title>/i,
  );
  assert.match(html, /<meta name="description" content="[^"]*Vintech Global/i);
  assert.match(html, /src="\/vintech-logo\.jpg"/i);
  assert.match(html, /Alienware x17 R2/i);
  assert.match(html, /Laptop accessories/i);
  assert.doesNotMatch(html, /CHEX Computers/i);
});

test("exports the primary shopping and trust routes", async () => {
  const [shop, whyVintech] = await Promise.all([
    readExportedPage("shop.html"),
    readExportedPage("why-vintech.html"),
  ]);

  assert.match(shop, /Shop premium laptops/i);
  assert.match(whyVintech, /Why Vintech/i);
});
