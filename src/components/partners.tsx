import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export const partners = [
  {
    name: "SDLG Machinery",
    shortName: "SDLG",
    logo: "/brands/sdlg-lanka_no_bg.png",
    alt: "SDLG Construction Machinery Lanka",
    type: "Construction Machinery",
    specialty: "Wheel Loaders · Excavators · Road Rollers · Graders",
    href: "/products?category=construction-machinery",
    highlight: "Volvo Group Partner",
    logoClass: "partner-logo-sdlg",
  },
  {
    name: "Noah Machinery",
    shortName: "Noah",
    logo: "/brands/noah.png",
    alt: "Noah Block Making Machinery",
    type: "Block Making Machinery",
    specialty: "Automated QT Paver & Concrete Block Production Lines",
    href: "/products?category=block-making-machinery",
    highlight: "High-Output Automation",
    logoClass: "partner-logo-noah",
  },
  {
    name: "Shandong Shengya",
    shortName: "Shengya",
    logo: "/brands/Shengya_no_bg.png",
    alt: "Shandong Shengya Machinery Co., Ltd.",
    type: "Block Making Machinery",
    specialty: "Hydraulic Interlock Brick & Hollow Block Molding",
    href: "/products?category=block-making-machinery",
    highlight: "Hydraulic Molding Tech",
    logoClass: "partner-logo-shengya",
  },
  {
    name: "Tengyu Machinery",
    shortName: "TNY",
    logo: "/brands/tny.png",
    alt: "TNY Tengyu Machine",
    type: "Block Making Machinery",
    specialty: "Heavy Industrial Automatic Hydraulic Production Plants",
    href: "/products?category=block-making-machinery",
    highlight: "Industrial Heavy Duty",
    logoClass: "partner-logo-tny",
  },
];

export function PartnersSection() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-inner">
        <div className="partners-header" data-reveal>
          <div className="partners-kicker">
            <ShieldCheck size={15} />
            <span>Direct Factory Partnerships</span>
          </div>
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
              <div className="partner-logo-box">
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

              <div className="partner-card-body">
                <div className="partner-badge">{partner.highlight}</div>
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-type">{partner.type}</span>
                <p className="partner-specialty">{partner.specialty}</p>
                <div className="partner-action">
                  <span>Explore machinery</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
