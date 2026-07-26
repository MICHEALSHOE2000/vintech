import catalogue from "./catalogue.generated.json";

export type ProductCategory =
  | "Business laptops"
  | "2-in-1 laptops"
  | "Workstations"
  | "Gaming laptops"
  | "MacBooks";

type CatalogueRow = {
  number: number;
  id: string;
  name: string;
  Stock?: string;
  "Release year"?: string;
  "Operating system"?: string;
  Processor?: string;
  "CPU generation"?: string;
  Graphics?: string;
  RAM?: string;
  "Maximum RAM"?: string;
  Storage?: string;
  "Maximum storage"?: string;
  Screen?: string;
  Resolution?: string;
  Panel?: string;
  Touchscreen?: string;
  Battery?: string;
  "Battery life"?: string;
  Ports?: string;
  Weight?: string;
  Colour?: string;
  "Specification level"?: string;
};

export type Product = {
  id: string;
  catalogueNumber: number;
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: ProductCategory;
  condition: "Foreign-used";
  processor: string;
  processorGeneration: string;
  ram: string;
  maximumRam: string;
  storage: string;
  maximumStorage: string;
  storageType: string;
  graphics: string;
  display: string;
  screen: string;
  resolution: string;
  panel: string;
  touchscreen: string;
  operatingSystem: string;
  releaseYear: string;
  battery: string;
  batteryLife: string;
  ports: string;
  weight: string;
  color: string;
  specificationLevel: string;
  stockStatus: "In Stock" | "Out of Stock";
  featured: boolean;
  wholesaleAvailable: boolean;
  warranty: string;
  includedItems: string[];
  useCases: string[];
  images: string[];
  shortDescription: string;
  fullDescription: string;
};

const clean = (value?: string) => value?.trim() || "Not published";

function slugify(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function brandFrom(name: string) {
  const upper = name.toUpperCase();
  if (upper.includes("ALIENWARE")) return "Alienware";
  if (upper.includes("MACBOOK") || upper.includes("APPLE")) return "Apple";
  if (upper.includes("DELL")) return "Dell";
  if (/\bHP\b/.test(upper)) return "HP";
  if (upper.includes("LENOVO") || upper.includes("THINKPAD")) return "Lenovo";
  if (upper.includes("MICROSOFT") || upper.includes("SURFACE")) return "Microsoft";
  if (upper.includes("ASUS")) return "ASUS";
  if (upper.includes("ACER")) return "Acer";
  if (upper.includes("MSI")) return "MSI";
  if (upper.includes("RAZER")) return "Razer";
  if (upper.includes("SAMSUNG")) return "Samsung";
  return name.replace(/^\d{4}\s+/, "").split(/\s+/)[0];
}

function categoryFrom(row: CatalogueRow): ProductCategory {
  const text = `${row.name} ${row.Graphics ?? ""} ${row.Touchscreen ?? ""}`.toUpperCase();
  if (/MACBOOK|APPLE/.test(text)) return "MacBooks";
  if (/GAMING|ALIENWARE|OMEN|PREDATOR|ROG|TUF|RAZER|RTX\s?\d|GEFORCE RTX/.test(text)) return "Gaming laptops";
  if (/PRECISION|ZBOOK|WORKSTATION|THINKPAD P\d|QUADRO|NVIDIA T\d{3,4}/.test(text)) return "Workstations";
  if (/2-IN-1|2 IN 1|X360|CONVERTIBLE/.test(text) || /^YES/i.test(row.Touchscreen ?? "")) return "2-in-1 laptops";
  return "Business laptops";
}

const suppliedProductImages: Record<string, string[]> = {
  "DELL LATITUDE 5530": ["/products/dell-latitude-5530.webp"],
  "DELL PRECISION 5550(TOUCHSCREEN)": ["/products/dell-precision-5550-touchscreen.webp"],
  "HP ZBOOK POWER G7": ["/products/hp-zbook-power-g7.webp"],
  "HP ZBOOK FIREFLY 14 G8": ["/products/hp-zbook-firefly-14-g8.webp"],
  "HP ZBOOK 15 G6": ["/products/hp-zbook-15-g6.webp"],
  "DELL XPS 15 9500(TOUCHSCREEN)": ["/products/dell-xps-15-9500-touchscreen.webp"],
  "DELL XPS 15 7590": ["/products/dell-xps-15-7590.webp"],
  "HP ZBOOK FIREFLY 15 G7(TOUCHSCREEN)": ["/products/hp-zbook-firefly-15-g7-touchscreen.webp"],
  "DELL LATITUDE 5420": ["/products/dell-latitude-5420.webp"],
  "MSI GE66 RAIDER": ["/products/msi-ge66-raider.webp"],
  "HP SPECTRE 13 X360": ["/products/hp-spectre-13-x360.webp"],
  "ALIENWARE X17 R2": ["/products/alienware-x17-r2.webp"],
  "DELL LATITUDE 9410X360": ["/products/dell-latitude-9410-x360.webp"],
  "HP PROBOOK 440 G8": ["/products/hp-probook-440-g8.webp"],
  "HP ELITEBOOK 1040 G8X360": ["/products/hp-elitebook-1040-g8-x360.webp"],
  "ACER NITRO V16 AI GAMING LAPTOP": ["/products/acer-nitro-v16-ai-gaming-laptop.webp"],
  "HP OMEN SLIM 16 GAMING LAPTOP": ["/products/hp-omen-slim-16-gaming-laptop.webp"],
  "ASUS ROG ZEPHYRUS M16": ["/products/asus-rog-zephyrus-m16.webp"],
  "LENOVO LEGION PRO 5 GEN-10": ["/products/lenovo-legion-pro-5-gen-10.webp"],
};

function imagesFor(name: string) {
  const upper = name.toUpperCase();
  const suppliedImages = suppliedProductImages[upper];
  if (suppliedImages) return suppliedImages;
  if (upper.includes("ELITEBOOK 840 G5")) return ["/products/hp-elitebook-840-g5-1.webp", "/products/hp-elitebook-840-g5-2.webp"];
  if (upper.includes("LATITUDE 5300") && !upper.includes("2-IN-1")) return ["/products/dell-latitude-5300-1.jpg", "/products/dell-latitude-5300-2.jpg", "/products/dell-latitude-5300-3.jpg"];
  if (upper.includes("LATITUDE 5400")) return ["/products/dell-latitude-5400-1.jpg", "/products/dell-latitude-5400-2.jpg", "/products/dell-latitude-5400-3.jpg"];
  if (upper.includes("LATITUDE 7430")) return ["/products/dell-latitude-7430-1.jpg", "/products/dell-latitude-7430-2.jpg", "/products/dell-latitude-7430-3.jpg"];
  if (upper.includes("LATITUDE 7490")) return ["/products/dell-latitude-7490-1.jpg", "/products/dell-latitude-7490-2.jpg", "/products/dell-latitude-7490-3.jpg"];
  if (upper.includes("PRECISION 7550")) return ["/products/dell-precision-7550-1.webp", "/products/dell-precision-7550-2.webp", "/products/dell-precision-7550-3.webp"];
  // Use a model-specific image search thumbnail when CHEX has not supplied a
  // photographed unit yet. Keeping this as an image-only URL means catalogue
  // cards never link customers away from the CHEX website.
  return [`https://tse2.mm.bing.net/th?q=${encodeURIComponent(`${name} laptop product photo`)}&w=900&h=650&c=7&rs=1&p=0`];
}

function useCasesFor(category: ProductCategory) {
  if (category === "Gaming laptops") return ["Gaming", "Graphics and video editing", "Coding and development"];
  if (category === "Workstations") return ["Graphics and video editing", "Coding and development", "Office and remote work"];
  if (category === "MacBooks") return ["Everyday personal use", "Coding and development", "Graphics and video editing"];
  if (category === "2-in-1 laptops") return ["Office and remote work", "School and university", "Everyday personal use"];
  return ["Office and remote work", "School and university", "Everyday personal use"];
}

export const products: Product[] = (catalogue as CatalogueRow[]).map((row, index) => {
  const category = categoryFrom(row);
  const brand = brandFrom(row.name);
  const processor = clean(row.Processor);
  const ram = clean(row.RAM);
  const storage = clean(row.Storage);
  const screen = clean(row.Screen);
  const resolution = clean(row.Resolution);
  const details = [processor, ram !== "Not published" ? `${ram} RAM` : "", storage, screen].filter((item) => item && item !== "Not published").join(" · ") || `${brand} foreign-used laptop`;

  return {
    id: row.id,
    catalogueNumber: row.number,
    slug: `${slugify(row.name)}-${row.id.toLowerCase()}`,
    name: row.name,
    brand,
    model: row.name.replace(/^\d{4}\s+/, "").replace(new RegExp(`^${brand}\\s+`, "i"), ""),
    category,
    condition: "Foreign-used",
    processor,
    processorGeneration: clean(row["CPU generation"]),
    ram,
    maximumRam: clean(row["Maximum RAM"]),
    storage,
    maximumStorage: clean(row["Maximum storage"]),
    storageType: /SSD/i.test(storage) ? "SSD" : /HDD/i.test(storage) ? "HDD" : "Not published",
    graphics: clean(row.Graphics),
    display: [screen, resolution].filter((item) => item !== "Not published").join(" · ") || "Not published",
    screen,
    resolution,
    panel: clean(row.Panel),
    touchscreen: clean(row.Touchscreen),
    operatingSystem: clean(row["Operating system"]),
    releaseYear: clean(row["Release year"]),
    battery: clean(row.Battery),
    batteryLife: clean(row["Battery life"]),
    ports: clean(row.Ports),
    weight: clean(row.Weight),
    color: clean(row.Colour),
    specificationLevel: clean(row["Specification level"]),
    stockStatus: row.Stock === "Out of Stock" ? "Out of Stock" : "In Stock",
    featured: index < 8,
    wholesaleAvailable: true,
    warranty: "Support terms confirmed per unit",
    includedItems: ["Laptop", "Charger", "Any extras shown on your invoice"],
    useCases: useCasesFor(category),
    images: imagesFor(row.name),
    shortDescription: details,
    fullDescription: `${row.name} is listed in the CHEX foreign-used laptop catalogue. Review the published specifications below and contact CHEX to confirm the exact available unit, condition and delivery options.`,
  };
});

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
