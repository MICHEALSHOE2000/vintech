import type { MetadataRoute } from "next";
import { products } from "./data/products";
import { siteConfig } from "./data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop", "/wholesale", "/why-chex", "/about", "/contact"];
  return [...routes.map((route) => ({ url: `${siteConfig.siteUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : .8 })), ...products.map((product) => ({ url: `${siteConfig.siteUrl}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: .7 }))];
}
