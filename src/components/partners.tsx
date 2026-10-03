import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const partners = [
  {
    name: "SDLG Machinery",
    shortName: "SDLG",
    logo: "/brands/sdlg-lanka_no_bg.png",
    alt: "SDLG Construction Machinery Lanka",
    accreditation: "Volvo Group Partner",
    category: "Construction Machinery",
    description:
      "Heavy-duty articulated wheel loaders, excavators, and road compaction machinery built for extreme job site endurance.",
    equipment: ["Wheel Loaders", "Excavators", "Road Rollers", "Motor Graders"],
    href: "/products?category=construction-machinery",
    logoClass: "partner-logo-sdlg",
  },
  {
    name: "Noah Machinery",
    shortName: "Noah",
    logo: "/brands/noah.png",
    alt: "Noah Block Making Machinery",
    accreditation: "High-Output Automation",
    category: "Block Making Machinery",
    description:
      "Fully automated concrete block and paver production lines engineered for continuous vibration density and rapid cycle times.",
    equipment: ["QT3-15 Series", "QT8-15 Plants", "QT12-15 Lines", "Automated Stacking"],
    href: "/products?category=block-making-machinery",
    logoClass: "partner-logo-noah",
  },
  {
    name: "Shandong Shengya",
    shortName: "Shengya",
    logo: "/brands/Shengya_no_bg.png",
    alt: "Shandong Shengya Machinery Co., Ltd.",
    accreditation: "Hydraulic Molding Tech",
    category: "Block Making Machinery",
    description:
      "Versatile hydraulic compression and mobile brick molding technology for interlocking pavers, hollow blocks, and solid bricks.",
    equipment: ["QMR2-45 Mobile", "QTJ4-40 Series", "QTJ4-26A", "Diesel Hydraulic"],
    href: "/products?category=block-making-machinery",
    logoClass: "partner-logo-shengya",
  },
  {
    name: "Tengyu Machinery",
    shortName: "TNY",
    logo: "/brands/tny.png",
    alt: "TNY Tengyu Machine",
    accreditation: "Heavy Industrial Plant",
    category: "Block Making Machinery",
    description:
      "Mass-throughput commercial automatic hydraulic production plants equipped with advanced servo vibration and automatic pallet lines.",
    equipment: ["QT3-15 to QT10-15", "Servo Vibration", "Commercial Output", "Pallet Return"],
    href: "/products?category=block-making-machinery",
    logoClass: "partner-logo-tny",
  },
];

export function PartnersSection() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-inner">
        <div className="partners-header" data-reveal>
          <h2 id="partners-title">Our Manufacturing Partners</h2>
          <p>
            RCB Holdings works directly with certified global equipment manufacturers to deliver certified heavy machinery, automated production lines, and local servicing support across Sri Lanka.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              className="partner-card"
              aria-label={`Explore ${partner.name} machinery`}
            >
              {/* Top: Dedicated Clean Logo Stage (No nested gray box) */}
              <div className="partner-logo-stage">
                <div className={`partner-img-wrapper ${partner.logoClass}`}>
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="partner-img"
                  />
                </div>
              </div>

              {/* Middle: Content & Specs */}
              <div className="partner-card-body">
                <div className="partner-meta-line">
                  <span className="partner-accreditation">{partner.accreditation}</span>
                  <span className="partner-category-dot" aria-hidden="true">·</span>
                  <span className="partner-category-name">{partner.category}</span>
                </div>

                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>

                {/* Equipment Tags */}
                <div className="partner-tags-list">
                  {partner.equipment.map((item) => (
                    <span key={item} className="partner-tag-chip">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom: Apple-style Action Prompt */}
                <div className="partner-action">
                  <span>Explore equipment</span>
                  <span className="partner-arrow-circle" aria-hidden="true">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
