import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Wrench,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Phone,
  MapPin,
  Sparkles,
  ChevronRight,
  Truck,
  Layers,
  Factory,
  Globe,
  HardHat,
} from "lucide-react";
import { Header } from "@/components/header";
import { WhatsApp } from "@/components/social-icons";
import { InteractiveHoverButton } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | RCB Holdings (Pvt) Ltd. — Sri Lanka",
  description:
    "Learn about RCB Holdings, ICTAD registered construction company and authorized distributor of SDLG, YINENG, Noah, Shengya, and TNY machinery in Sri Lanka. Supplying paving, heavy equipment, and supporting national projects.",
  openGraph: {
    title: "About RCB Holdings — Machinery & Construction Leaders in Sri Lanka",
    description:
      "Authorized Distributor for SDLG, YINENG, Noah & Shengya. ICTAD Registered Construction Company supporting national infrastructure.",
    images: [{ url: "/osc.jpg" }],
  },
};

export default function AboutPage() {
  const whatsappConsultUrl = `https://wa.me/94771600600?text=${encodeURIComponent(
    "Hello RCB Holdings, I would like to consult with your team regarding machinery and construction solutions.",
  )}`;

  const divisions = [
    {
      title: "BLOCK MAKING MACHINERY",
      kicker: "Production Plants",
      image: "/QT8-15.jpg",
      alt: "Noah and Shengya automated concrete block making machine",
      brands: "Noah · Shengya · TNY · RCB",
      description:
        "High-output automatic, semi-automatic, and hydraulic brick and block making plants for solid, hollow, and interlock paving production.",
      href: "/products?category=block-making-machinery",
      actionText: "View Block Machines",
    },
    {
      title: "WHEEL LOADERS",
      kicker: "Earthmoving & Aggregates",
      image: "/wheel-loader.jpg",
      alt: "SDLG articulated heavy wheel loader moving aggregate",
      brands: "SDLG & YINENG",
      description:
        "High-torque, fuel-efficient articulated wheel loaders with reinforced chassis and high-breakout force for quarry, mining, and civil works.",
      href: "/products?brand=sdlg",
      actionText: "View Wheel Loaders",
    },
    {
      title: "EXCAVATORS",
      kicker: "Heavy Digging & Earthworks",
      image: "/divisions/excavators.png",
      alt: "SDLG hydraulic crawler excavator on construction site",
      brands: "SDLG Heavy Equipment",
      description:
        "Precision hydraulics and heavy digging depth for earthworks, quarrying, site preparation, and foundation engineering projects.",
      href: "/products/sdlg-excavators",
      actionText: "View Excavators",
    },
    {
      title: "OPEN STEEL CONSTRUCTIONS",
      kicker: "Structural Engineering",
      image: "/osc.jpg",
      alt: "Heavy open steel construction framework and industrial beams",
      brands: "RCB Structural Engineering",
      description:
        "Engineered structural steel design, heavy fabrication, industrial warehouse framing, and commercial factory erections.",
      href: "#contact-inquiry",
      actionText: "Inquire Steel Works",
    },
    {
      title: "READY MIX PLANT",
      kicker: "Concrete Batching",
      image: "/divisions/ready-mix.png",
      alt: "Automated commercial ready mix concrete batching plant",
      brands: "Industrial Batching Systems",
      description:
        "High-precision automated concrete batching plants engineered for uniform aggregate proportions and certified grade-standard concrete output.",
      href: "#contact-inquiry",
      actionText: "Inquire Batching Plants",
    },
    {
      title: "INTERLOCK AND PAVING",
      kicker: "RCB Architectural Paving",
      image: "/ip.jpg",
      alt: "Architectural herringbone interlock brick paving layout",
      brands: "RCB Signature Interlock",
      description:
        "Imported paving block machines and island-wide distribution of premium residential, commercial, and heavy-duty traffic interlocking pavers.",
      href: "/#paving",
      actionText: "Explore Paving Range",
    },
  ];

  const authorizedPartners = [
    {
      name: "SDLG Construction Machinery",
      category: "Construction Machinery",
      tag: "Volvo Group Partner",
      description:
        "Authorized distributor for SDLG Wheel Loaders, Excavators, Road Rollers, and Motor Graders across Sri Lanka. Built with Volvo Group engineering pedigree for extreme durability.",
      logo: "/brands/sdlg-lanka_no_bg.png",
      href: "/products?brand=sdlg",
      models: "Wheel Loaders · Excavators · Road Rollers · Graders",
    },
    {
      name: "YINENG Wheel Loaders",
      category: "Material Handling",
      tag: "Heavy Articulated",
      description:
        "Authorized distributor for YINENG industrial wheel loaders. Known for high breakout torque, fuel efficiency, and dependable performance in quarries and aggregate yards.",
      logo: "/wheel-loader.jpg",
      isPhoto: true,
      href: "/products?brand=yineng",
      models: "YN920D · YN917G · YN926G · YN959G",
    },
    {
      name: "Noah Block Machinery",
      category: "Block Making Machinery",
      tag: "High Automation",
      description:
        "Authorized distributor for Noah automatic and hydraulic concrete block and paver manufacturing lines, providing superior vibration density and rapid cycle times.",
      logo: "/brands/noah.png",
      href: "/products?brand=noah",
      models: "QT3-15 · QT4-15 · QT6-15 · QT8-15 · QT9-15 · QT12-15",
    },
    {
      name: "Shandong Shengya Machinery",
      category: "Block Making Machinery",
      tag: "Hydraulic Molding Tech",
      description:
        "Authorized distributor for Shengya versatile hydraulic and mobile brick machines. Flexible solutions for hollow blocks, solid bricks, and interlocking pavers.",
      logo: "/brands/Shengya_no_bg.png",
      href: "/products?brand=shengya",
      models: "QMR2-45 · QTJ4-40 · QTJ4-26A · QT4-40 Diesel Hydraulic",
    },
    {
      name: "Tengyu Machinery (TNY)",
      category: "Block Making Machinery",
      tag: "Heavy Industrial Plant",
      description:
        "Authorized distributor for TNY heavy industrial automated block making production lines, offering mass output and servo vibration reliability.",
      logo: "/brands/tny.png",
      href: "/products?brand=tny",
      models: "QT3-15 · QT4-15 · QT6-15 · QT8-15 · QT9-15 · QT10-15",
    },
    {
      name: "RCB Interlock Machinery",
      category: "Proprietary Brand",
      tag: "Direct Import & Support",
      description:
        "We import Interlock Paving Making Machines under our own RCB brand and distribute throughout Sri Lanka with comprehensive commissioning, operator training, and parts backup.",
      logo: "/logo_2.png",
      href: "/products?category=block-making-machinery",
      models: "Custom Hydraulic Paving & Block Making Machinery",
    },
  ];

  return (
    <>
      <Header />
      <main id="main" className="about-page-main">
        {/* ====================================================
            1. HERO SECTION
            ==================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-inner">
            <nav aria-label="Breadcrumb" className="about-breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">About Us</span>
            </nav>

            <div className="about-kicker-badge">
              <Sparkles size={14} />
              <span>RCB Holdings (Pvt) Ltd.</span>
            </div>

            <h1 className="about-hero-title">
              WELCOME TO OUR COMPANY!
            </h1>

            <p className="about-hero-lead">
              We import Interlock Paving Making Machines under our name <strong>RCB</strong> and
              distribute throughout Sri Lanka. We are also the <strong>Authorized Distributor</strong> for{" "}
              <strong>SDLG</strong> Wheel Loaders, Excavators, Road Rollers, Graders,{" "}
              <strong>YINENG</strong> Wheel Loaders, <strong>Noah</strong> Block Making Machines, and{" "}
              <strong>Shengya</strong> Block Making Machines in Sri Lanka.
            </p>

            {/* Official ICTAD & Government Support Statement Banner */}
            <div className="about-executive-banner">
              <div className="executive-banner-icon">
                <ShieldCheck size={36} />
              </div>
              <div className="executive-banner-text">
                <h3>ICTAD Registered Construction Partner</h3>
                <p>
                  RCB Holdings is an <strong>ICTAD Registered Construction Company</strong>, and we
                  have been a steadfast strength to the <strong>Sri Lankan Government</strong> in various
                  ways by helping various landmark Construction Projects recently carried out across the country.
                </p>
              </div>
            </div>

            {/* Key Pillars Quick Stats */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="stat-label">Government Accreditation</span>
                <strong className="stat-value">ICTAD Registered</strong>
                <span className="stat-sub">Certified Construction Company in Sri Lanka</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-label">Authorized Distributorship</span>
                <strong className="stat-value">5+ Global Brands</strong>
                <span className="stat-sub">SDLG · YINENG · Noah · Shengya · TNY</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-label">Proprietary Brand</span>
                <strong className="stat-value">RCB Machinery</strong>
                <span className="stat-sub">Directly imported & distributed nationwide</span>
              </div>
              <div className="about-stat-card">
                <span className="stat-label">Coverage & Support</span>
                <strong className="stat-value">Island-wide</strong>
                <span className="stat-sub">All 9 provinces with field servicing & spares</span>
              </div>
            </div>

            <div className="about-hero-actions">
              <InteractiveHoverButton
                href="/products"
                variant="primary"
                size="lg"
              >
                Browse Machinery Catalog
              </InteractiveHoverButton>

              <InteractiveHoverButton
                href={whatsappConsultUrl}
                target="_blank"
                variant="whatsapp"
                size="lg"
                icon={<WhatsApp className="w-4 h-4 fill-current" />}
              >
                Inquire on WhatsApp
              </InteractiveHoverButton>
            </div>
          </div>
        </section>

        {/* ====================================================
            2. SIX CORE DIVISIONS (MATCHING USER'S IMAGE)
            ==================================================== */}
        <section id="divisions" className="about-divisions-section section-pad">
          <div className="about-section-container">
            <div className="about-section-heading">
              <div className="section-eyebrow">
                <Layers size={15} />
                <span>Core Capabilities & Infrastructure</span>
              </div>
              <h2>Our 6 Specialized Divisions</h2>
              <p>
                From certified earthmoving machinery and high-output concrete block plants to heavy open steel fabrication and architectural interlock paving.
              </p>
            </div>

            <div className="divisions-image-grid">
              {divisions.map((item) => (
                <div key={item.title} className="division-card">
                  <div className="division-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="division-img"
                    />
                    <div className="division-kicker-tag">{item.kicker}</div>
                    
                    {/* The Bold Blue Banner at Bottom (Replicating User's Attached Graphic) */}
                    <div className="division-banner-tag">
                      <span>{item.title}</span>
                    </div>
                  </div>

                  <div className="division-body">
                    <div className="division-brands">{item.brands}</div>
                    <p className="division-desc">{item.description}</p>
                    <div className="division-footer">
                      <Link href={item.href} className="division-action-link">
                        <span>{item.actionText}</span>
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
            3. AUTHORIZED DISTRIBUTORSHIPS SHOWCASE
            ==================================================== */}
        <section className="about-distributorships-section section-pad">
          <div className="about-section-container">
            <div className="about-section-heading">
              <div className="section-eyebrow">
                <Factory size={15} />
                <span>Authorized Distribution Network</span>
              </div>
              <h2>Official Global Manufacturer Partnerships</h2>
              <p>
                RCB Holdings is the official bridge connecting Sri Lankan contractors and plant owners with verified world-class manufacturing technology.
              </p>
            </div>

            <div className="about-partners-grid">
              {authorizedPartners.map((partner) => (
                <div key={partner.name} className="about-partner-card">
                  <div className="partner-card-head">
                    <span className="partner-tag">{partner.tag}</span>
                    <span className="partner-cat">{partner.category}</span>
                  </div>

                  <h3 className="partner-title">{partner.name}</h3>
                  <p className="partner-text">{partner.description}</p>

                  <div className="partner-models-box">
                    <span className="models-label">Authorized Portfolio:</span>
                    <strong className="models-list">{partner.models}</strong>
                  </div>

                  <div className="partner-card-footer">
                    <Link href={partner.href} className="partner-card-link">
                      <span>Explore Equipment</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
            4. ICTAD REGISTRATION & GOVERNMENT SUPPORT STORY
            ==================================================== */}
        <section className="about-government-section section-pad">
          <div className="about-section-container">
            <div className="government-layout">
              <div className="government-content">
                <div className="section-eyebrow">
                  <HardHat size={15} />
                  <span>National Building Standards</span>
                </div>
                <h2>A Strength to Sri Lankan Government & National Infrastructure</h2>
                <p>
                  As an <strong>ICTAD Registered Construction Company</strong>, RCB Holdings has continuously contributed to the development of Sri Lanka’s national infrastructure. We have been a reliable strength to the Sri Lankan Government by providing essential equipment, heavy machinery, technical assistance, and material solutions for major civil and municipal projects recently carried out across the island.
                </p>

                <div className="government-checklist">
                  <div className="checklist-item">
                    <CheckCircle2 size={20} className="check-icon" />
                    <div>
                      <strong>ICTAD / CIDA Recognized Quality Standards</strong>
                      <p>
                        Strict adherence to national construction specifications, material durability guidelines, and machine safety protocols.
                      </p>
                    </div>
                  </div>

                  <div className="checklist-item">
                    <CheckCircle2 size={20} className="check-icon" />
                    <div>
                      <strong>Government & Public Sector Project Support</strong>
                      <p>
                        Supplying road-building machinery, compaction rollers, articulated loaders, and precision pavers for high-impact civic works.
                      </p>
                    </div>
                  </div>

                  <div className="checklist-item">
                    <CheckCircle2 size={20} className="check-icon" />
                    <div>
                      <strong>National Industrial Job Creation</strong>
                      <p>
                        Empowering hundreds of local entrepreneurs and small businesses across Sri Lanka to launch high-output cement block and paving operations with our machinery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="government-cta">
                  <InteractiveHoverButton
                    href={site.phoneHref}
                    variant="primary"
                    size="lg"
                    icon={<Phone size={16} />}
                  >
                    Contact Head Office
                  </InteractiveHoverButton>
                  <span className="cta-note">Direct engineering inquiries: {site.phone}</span>
                </div>
              </div>

              <div className="government-visual">
                <div className="visual-image-wrapper">
                  <Image
                    src="/image (3).jpg"
                    alt="RCB Holdings machinery and heavy construction display at national exhibition"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="visual-img"
                  />
                  <div className="visual-badge-overlay">
                    <Building2 size={22} />
                    <div>
                      <strong>ICTAD Registered</strong>
                      <span>Construction & Equipment Solutions</span>
                    </div>
                  </div>
                </div>
                <div className="visual-caption">
                  RCB Holdings technical team and machinery exhibits supporting Sri Lankan infrastructure.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            5. CORPORATE VISION & NATIONAL RECOGNITIONS
            ==================================================== */}
        <section id="achievements" className="about-awards-section section-pad">
          <div className="about-section-container">
            <div className="about-section-heading">
              <div className="section-eyebrow">
                <Award size={15} />
                <span>Our Vision & Recognition</span>
              </div>
              <h2>Milestones of Excellence</h2>
              <p>
                Our journey is rooted in an unwavering pledge to product quality and genuine service for every customer.
              </p>
            </div>

            <div className="vision-banner">
              <div className="vision-quote-box">
                <span className="vision-label">OUR CORPORATE VISION</span>
                <blockquote className="vision-quote">
                  “To give the best product to customers.”
                </blockquote>
                <p className="vision-explanation">
                  Whether delivering a multi-ton SDLG wheel loader or providing an automated Noah block manufacturing line, our benchmark remains absolute: deliver the highest quality, provide genuine parts, and stand firmly behind every machine we supply.
                </p>
              </div>
            </div>

            <div className="awards-archive-grid">
              <div className="award-archive-card">
                <div className="award-archive-media">
                  <Image
                    src="/image.jpg"
                    alt="Shramabhimanee National Award presentation to RCB Holdings"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="award-archive-img"
                  />
                </div>
                <div className="award-archive-content">
                  <div className="award-pill">National Honor</div>
                  <h3>Shramabhimanee National Award</h3>
                  <span className="award-year">2013</span>
                  <p>
                    Conferred in recognition of outstanding entrepreneurship, industrial contribution, and empowering local communities with sustainable manufacturing technology.
                  </p>
                </div>
              </div>

              <div className="award-archive-card">
                <div className="award-archive-media">
                  <Image
                    src="/image (2).jpg"
                    alt="Construction Exhibition Co-Sponsor Award ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="award-archive-img"
                  />
                </div>
                <div className="award-archive-content">
                  <div className="award-pill">Ministry Recognition</div>
                  <h3>Construction Exhibition Co-Sponsor</h3>
                  <span className="award-year">2016</span>
                  <p>
                    Awarded by the Ministry of Housing and Construction for active partnership and promoting advanced construction machinery and building technologies in Sri Lanka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            6. BOTTOM CONSULTATION / INQUIRY CTA BANNER
            ==================================================== */}
        <section id="contact-inquiry" className="about-inquiry-banner">
          <div className="about-inquiry-inner">
            <div className="inquiry-copy">
              <h2>Let’s Build Your Next Project Together</h2>
              <p>
                Whether you need certified SDLG earthmoving equipment, an automated block production plant, or consultation on national construction tenders, our engineers are ready to assist you.
              </p>
              <div className="inquiry-points">
                <span><MapPin size={16} /> Hokandara North, Sri Lanka</span>
                <span><Phone size={16} /> +94 771 600 600</span>
                <span><ShieldCheck size={16} /> ICTAD Certified Company</span>
              </div>
            </div>

            <div className="inquiry-actions">
              <InteractiveHoverButton
                href={whatsappConsultUrl}
                target="_blank"
                variant="whatsapp"
                size="lg"
                icon={<WhatsApp className="w-4 h-4 fill-current" />}
              >
                Chat on WhatsApp
              </InteractiveHoverButton>

              <InteractiveHoverButton
                href={site.phoneHref}
                variant="primary"
                size="lg"
                icon={<Phone size={16} />}
              >
                Call Office Now
              </InteractiveHoverButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
