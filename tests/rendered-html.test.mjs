import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExportedPage = (name) =>
  readFile(new URL(`../out/${name}`, import.meta.url), "utf8");

const readSourceFile = (name) =>
  readFile(new URL(`../${name}`, import.meta.url), "utf8");

test("exports the Vintech homepage with premium branding and SEO", async () => {
  const html = await readExportedPage("index.html");

  assert.match(
    html,
    /<title>Vintech Global \| Premium Laptops, Gaming PCs &amp; Accessories in Lagos<\/title>/i,
  );
  assert.match(html, /<meta name="description" content="[^"]*Vintech Global/i);
  assert.match(html, /src="\/vintech-logo\.jpg"/i);
  assert.match(html, /Alienware x17 R2/i);
  assert.match(html, /HP Envy x360 15\.6/i);
  assert.match(html, /Open Box HP Victus Gaming Laptop/i);
  assert.match(html, /ASUS TUF Gaming F15/i);
  assert.match(html, /Laptop accessories/i);
  assert.match(html, /Creator Support &amp; Gimbals/i);
  assert.match(html, /Creator Lighting/i);
  assert.match(html, /Storage &amp; Connectivity/i);
  assert.match(html, /Power &amp; Audio/i);
  assert.match(html, /Laptop Essentials/i);
  assert.match(html, /C17 AI Face Tracking Quadrapod Gimbal/i);
  assert.match(html, /WD Elements Portable External Drive/i);
  assert.match(html, /Kisonli K23 70W Portable Subwoofer/i);
  assert.match(html, /HP W10 Bluetooth &amp; Wireless Dual-Mode Mouse/i);
  assert.match(html, /Photo coming soon/i);
  assert.match(html, /0803 254 6571/i);
  assert.match(html, /tel:08032546571/i);
  assert.match(html, /\+234 803 254 6571/i);
  assert.match(html, /https:\/\/wa\.me\/2348032546571/i);
  assert.doesNotMatch(html, /2348036341852/i);
  assert.match(html, /No\. 20 Francis Oremeji Street/i);
  assert.doesNotMatch(html, /CHEX Computers/i);
});

test("exports the primary shopping and trust routes", async () => {
  const [shop, whyVintech] = await Promise.all([
    readExportedPage("shop.html"),
    readExportedPage("why-vintech.html"),
  ]);

  assert.match(shop, /Shop premium laptops/i);
  assert.match(shop, /230-laptop catalogue/i);
  assert.match(whyVintech, /Why Vintech/i);
});

test("contains mobile elements within the viewport", async () => {
  const css = await readSourceFile("app/globals.css");

  assert.match(css, /html\s*\{[^}]*overflow-x:\s*clip/i);
  assert.match(css, /body\s*\{[^}]*overflow-x:\s*clip/i);
  assert.match(css, /\.hero\s*\{[^}]*overflow:\s*hidden/i);
  assert.match(css, /\.filter-drawer\s*\{[^}]*visibility:\s*hidden/i);
  assert.match(css, /\.filter-drawer\.open\s*\{[^}]*visibility:\s*visible/i);
});
