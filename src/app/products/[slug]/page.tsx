import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Wrench,
  Layers,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Header } from "@/components/header";
import { WhatsApp } from "@/components/social-icons";
import {
  products,
  getProductBySlug,
  getWhatsAppInquiryUrl,
} from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | RCB Holdings",
    };
  }

  return {
    title: `${product.name} | RCB Holdings Machinery Sri Lanka`,
    description: `${product.tagline} Specifications, features, and direct WhatsApp inquiry with RCB Holdings Sri Lanka.`,
    openGraph: {
      title: `${product.name} — RCB Holdings`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from the same brand or category
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.brandSlug === product.brandSlug)
    .slice(0, 3);

  const fallbackRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : products
          .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
          .slice(0, 3);

  const whatsappUrl = getWhatsAppInquiryUrl(product.name, product.brand);

  return (
    <>
      <Header />
      <main id="main" className="product-detail-main">
        {/* Breadcrumb Bar */}
        <section className="product-detail-nav-bar">
          <div className="product-detail-container">
            <nav aria-label="Breadcrumb" className="detail-breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <Link href="/products">Products</Link>
              <ChevronRight size={14} />
              <Link href={`/products?category=${product.categorySlug}`}>
                {product.category}
              </Link>
              <ChevronRight size={14} />
              <span aria-current="page">{product.name}</span>
            </nav>
            <Link href="/products" className="back-to-catalog-link">
              <ArrowLeft size={16} />
              <span>Back to all equipment</span>
            </Link>
          </div>
        </section>

        {/* Product Hero / Main Info Split */}
        <section className="product-detail-hero section-pad">
          <div className="product-detail-container detail-split-layout">
            {/* Visual Column */}
            <div className="detail-visual-col">
              <div className="detail-image-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="detail-main-img"
                />
                <div className="detail-image-badges">
                  <span className="detail-badge-brand">{product.brand}</span>
                  <span className="detail-badge-cat">{product.category}</span>
                </div>
              </div>

              <div className="detail-trust-pills">
                <div className="trust-pill-item">
                  <ShieldCheck size={18} />
                  <span>Genuine Factory Model</span>
                </div>
                <div className="trust-pill-item">
                  <Wrench size={18} />
                  <span>Local Servicing Available</span>
                </div>
              </div>
            </div>

            {/* Content & Inquiry Column */}
            <div className="detail-content-col">
              <span className="detail-kicker">{product.brand} Equipment</span>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-tagline">{product.tagline}</p>

              <div className="detail-description-block">
                <p>{product.description}</p>
              </div>

              {/* WHATSAPP INQUIRY CARD (NO BUY NOW BUTTON) */}
              <div className="whatsapp-inquiry-box">
                <div className="inquiry-box-header">
                  <div className="inquiry-status-indicator">
                    <span className="status-dot-pulse" />
                    <span>Inquiry Line Active</span>
                  </div>
                  <h3>Direct Product Inquiry</h3>
                  <p>
                    Connect with RCB Holdings machinery specialists on WhatsApp to
                    receive quotation details, delivery schedules, and technical
                    documentation.
                  </p>
                </div>

                <div className="inquiry-box-actions">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-primary"
                    aria-label={`Inquire about ${product.name} on WhatsApp`}
                  >
                    <WhatsApp size={22} />
                    <span>Inquire in WhatsApp</span>
                  </a>

                  <a
                    href={site.phoneHref}
                    className="btn-phone-secondary-detail"
                    aria-label="Call RCB sales team"
                  >
                    <Phone size={18} />
                    <span>Call {site.phone}</span>
                  </a>
                </div>

                <div className="inquiry-box-footer">
                  <small>
                    No immediate online payment required. Our team provides verified
                    specifications, custom tooling options, and site evaluation.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Engineering Features */}
        <section className="product-specs-section section-pad">
          <div className="product-detail-container">
            <div className="section-heading">
              <h2>
                Technical
                <br />
                Specifications.
              </h2>
              <p>
                Engineered with high mechanical durability and energy efficiency for
                demanding industrial construction sites.
              </p>
            </div>

            <div className="specs-and-features-grid">
              {/* Specs Table */}
              <div className="specs-table-wrapper">
                <h3>Technical Parameters</h3>
                <dl className="specs-data-list">
                  {product.specs.map((s, index) => (
                    <div
                      key={s.label}
                      className={`specs-row ${index % 2 === 0 ? "even" : "odd"}`}
                    >
                      <dt className="specs-term">{s.label}</dt>
                      <dd className="specs-definition">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Features List */}
              <div className="features-card">
                <h3>Design & Engineering Highlights</h3>
                <ul className="features-bullet-list">
                  {product.features.map((f) => (
                    <li key={f} className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="specs-support-callout">
                  <FileText size={22} />
                  <div>
                    <strong>Need customized mould configurations?</strong>
                    <p>
                      We fabricate custom moulds for hollow blocks, solid bricks, and
                      interlock patterns tailored to your project requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Equipment Section */}
        {fallbackRelated.length > 0 && (
          <section className="related-equipment-section section-pad">
            <div className="product-detail-container">
              <div className="related-header">
                <h2>Other {product.brand} & Related Machines</h2>
                <Link href="/products" className="text-link">
                  <span>View full catalog</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="related-grid">
                {fallbackRelated.map((rp) => (
                  <article key={rp.id} className="related-card">
                    <div className="related-media">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="related-badge">{rp.brand}</span>
                    </div>
                    <div className="related-body">
                      <h4>
                        <Link href={`/products/${rp.slug}`}>{rp.name}</Link>
                      </h4>
                      <p>{rp.tagline}</p>
                      <div className="related-actions">
                        <a
                          href={getWhatsAppInquiryUrl(rp.name, rp.brand)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp-related"
                          aria-label={`Inquire about ${rp.name} on WhatsApp`}
                        >
                          <WhatsApp size={16} />
                          <span>Inquire on WhatsApp</span>
                        </a>
                        <Link
                          href={`/products/${rp.slug}`}
                          className="btn-view-related"
                        >
                          Specs <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
