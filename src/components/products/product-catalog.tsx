"use client";

import { useState, useMemo, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal, Check } from "lucide-react";
import { WhatsApp } from "@/components/social-icons";
import { products, categories, getWhatsAppInquiryUrl, type Product } from "@/lib/products";

export function ProductCatalog({
  initialCategory,
  initialBrand,
}: {
  initialCategory?: string;
  initialBrand?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );
  const [selectedBrand, setSelectedBrand] = useState<string>(
    initialBrand || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();

  // All distinct brands with counts
  const brandList = useMemo(() => {
    return [
      { id: "all", name: "All Brands" },
      { id: "sdlg", name: "SDLG Machinery", category: "construction-machinery" },
      { id: "yineng", name: "Yineng", category: "construction-machinery" },
      { id: "noah", name: "Noah", category: "block-making-machinery" },
      { id: "shengya", name: "Shengya", category: "block-making-machinery" },
      { id: "tny", name: "TNY", category: "block-making-machinery" },
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (
        selectedCategory !== "all" &&
        p.categorySlug !== selectedCategory
      ) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== "all" && p.brandSlug !== selectedBrand) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesTagline = p.tagline.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesTagline) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const handleCategoryChange = (slug: string) => {
    startTransition(() => {
      setSelectedCategory(slug);
      // Reset brand if it does not belong to this category
      if (slug !== "all") {
        const matchingBrands = brandList.filter(
          (b) => b.id === "all" || b.category === slug
        );
        if (!matchingBrands.some((b) => b.id === selectedBrand)) {
          setSelectedBrand("all");
        }
      }
    });
  };

  const handleBrandChange = (brandSlug: string) => {
    startTransition(() => {
      setSelectedBrand(brandSlug);
      // If brand belongs to a specific category, auto-switch category
      const brandObj = brandList.find((b) => b.id === brandSlug);
      if (brandObj && brandObj.category) {
        setSelectedCategory(brandObj.category);
      }
    });
  };

  return (
    <div className="product-catalog-wrap">
      {/* Filters Toolbar */}
      <div className="catalog-filters">
        <div className="filter-group-header">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by model or equipment type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search equipment"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="search-clear"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <span className="results-count">
            Showing <strong>{filteredProducts.length}</strong> of {products.length} machines
          </span>
        </div>

        {/* Category Selector Tabs */}
        <div className="filter-row">
          <span className="filter-label">Category:</span>
          <div className="filter-pills" role="tablist" aria-label="Filter by category">
            <button
              type="button"
              className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => handleCategoryChange("all")}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                type="button"
                key={c.slug}
                className={`filter-pill ${selectedCategory === c.slug ? "active" : ""}`}
                onClick={() => handleCategoryChange(c.slug)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Selector Tabs */}
        <div className="filter-row">
          <span className="filter-label">Brand / Make:</span>
          <div className="filter-pills" role="tablist" aria-label="Filter by brand">
            {brandList
              .filter(
                (b) =>
                  selectedCategory === "all" ||
                  b.id === "all" ||
                  b.category === selectedCategory
              )
              .map((b) => (
                <button
                  type="button"
                  key={b.id}
                  className={`filter-pill ${selectedBrand === b.id ? "active" : ""}`}
                  onClick={() => handleBrandChange(b.id)}
                >
                  {b.name}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="empty-catalog">
          <h3>No machines found</h3>
          <p>
            No equipment matches your current filter selection. Try clearing your search
            or selecting another category.
          </p>
          <button
            type="button"
            className="btn-outline-clear"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBrand("all");
              setSearchQuery("");
            }}
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-card-media">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="product-card-img"
                />
                <span className="product-badge brand-badge">{p.brand}</span>
              </div>

              <div className="product-card-body">
                <span className="product-category-sub">{p.category}</span>
                <h3 className="product-card-title">
                  <Link href={`/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="product-card-tagline">{p.tagline}</p>

                {/* Key Spec Snapshot */}
                <div className="product-specs-compact">
                  {p.specs.slice(0, 2).map((s) => (
                    <div key={s.label} className="compact-spec-item">
                      <span className="spec-lbl">{s.label}:</span>
                      <span className="spec-val">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: WhatsApp and View Details (NO Buy Now) */}
                <div className="product-card-actions">
                  <a
                    href={getWhatsAppInquiryUrl(p.name, p.brand)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-card"
                    aria-label={`Inquire about ${p.name} on WhatsApp`}
                  >
                    <WhatsApp size={18} />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <Link
                    href={`/products/${p.slug}`}
                    className="btn-details-card"
                  >
                    <span>View Specs</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
