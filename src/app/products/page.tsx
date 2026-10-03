import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone, ArrowUpRight, ShieldCheck, Wrench, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { ProductCatalog } from "@/components/products/product-catalog";
import { WhatsApp } from "@/components/social-icons";
import { InteractiveHoverButton } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Machinery & Equipment Catalog | RCB Holdings Sri Lanka",
  description:
    "Explore SDLG excavators, wheel loaders, road rollers, and Noah, Shengya, and TNY block making machines. Inquire directly on WhatsApp with RCB Holdings.",
  openGraph: {
    title: "RCB Holdings — Heavy Machinery & Block Making Plants",
    description:
      "Explore SDLG and Yineng construction machinery, plus Noah, Shengya, and TNY block making plants. Direct WhatsApp inquiries.",
  },
};

export default async function ProductsPage(props: {
  searchParams?: Promise<{ category?: string; brand?: string }>;
}) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const initialCategory = searchParams.category;
  const initialBrand = searchParams.brand;

  return (
    <>
      <Header />
      <main id="main" className="products-page-main">
        {/* Products Page Hero */}
        <section className="products-hero-section">
          <div className="products-hero-inner">
            <nav aria-label="Breadcrumb" className="products-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Products</span>
            </nav>
            <h1 className="products-hero-title">
              Machinery & Equipment
            </h1>
            <p className="products-hero-subtitle">
              Engineered for endurance and high productivity. Official suppliers of
              construction machinery and industrial concrete block manufacturing plants
              across Sri Lanka.
            </p>

            <div className="products-hero-badges">
              <div className="hero-feature-badge">
                <ShieldCheck size={18} />
                <span>Verified Manufacturer Equipment</span>
              </div>
              <div className="hero-feature-badge">
                <Wrench size={18} />
                <span>Spare Parts & Technical Support</span>
              </div>
              <div className="hero-feature-badge">
                <Clock size={18} />
                <span>Direct WhatsApp Consultation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Filter and Product Cards */}
        <section className="catalog-container-section section-pad">
          <Suspense fallback={<div className="loading-state">Loading machinery catalog...</div>}>
            <ProductCatalog
              initialCategory={initialCategory}
              initialBrand={initialBrand}
            />
          </Suspense>
        </section>

        {/* Bottom Direct Inquiry Banner */}
        <section className="machinery-inquiry-banner">
          <div className="inquiry-banner-inner">
            <div className="inquiry-banner-text">
              <h2>Need a specific machine or custom specification?</h2>
              <p>
                Our engineering team helps you choose the right capacity, mold
                profiles, and hydraulic configurations for your job site or block plant.
              </p>
            </div>
            <div className="inquiry-banner-actions">
              <InteractiveHoverButton
                href={`https://wa.me/94771600600?text=${encodeURIComponent(
                  "Hello RCB Holdings, I would like to consult with your machinery team regarding equipment options and availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsApp size={20} />}
              >
                Inquire on WhatsApp
              </InteractiveHoverButton>
              <a href={site.phoneHref} className="btn-phone-secondary">
                <Phone size={19} />
                <span>Call {site.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
