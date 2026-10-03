import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `https://rcb.lk/products/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    { url: "https://rcb.lk", changeFrequency: "monthly", priority: 1 },
    { url: "https://rcb.lk/products", changeFrequency: "weekly", priority: 0.9 },
    ...productEntries,
  ];
}
