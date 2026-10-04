import Image from "next/image";
import Link from "next/link";

export const brandPartners = [
  {
    name: "SDLG Machinery",
    logo: "/brands/sdlg-lanka_no_bg.png",
    alt: "SDLG Construction Machinery",
    href: "/products?brand=sdlg",
    logoClass: "brand-logo-sdlg",
  },
  {
    name: "Noah Machinery",
    logo: "/brands/noah.png",
    alt: "Noah Block Making Machinery",
    href: "/products?brand=noah",
    logoClass: "brand-logo-noah",
  },
  {
    name: "Shandong Shengya",
    logo: "/brands/Shengya_no_bg.png",
    alt: "Shandong Shengya Machinery Co., Ltd.",
    href: "/products?brand=shengya",
    logoClass: "brand-logo-shengya",
  },
  {
    name: "Tengyu Machinery (TNY)",
    logo: "/brands/tny.png",
    alt: "TNY Tengyu Machine",
    href: "/products?brand=tny",
    logoClass: "brand-logo-tny",
  },
];

export function PartnersSection() {
  // Triple the set so the continuous marquee loop is infinitely seamless across all screen widths
  const marqueeItems = [...brandPartners, ...brandPartners, ...brandPartners];

  return (
    <section className="partners-logo-section" aria-label="Our Manufacturing Partners">
      <div className="partners-logo-inner">
        <div className="partners-logo-header">
          <span className="partners-logo-title">Authorized Manufacturing Partners</span>
        </div>

        {/* Infinite Animated Marquee Logo Showcase */}
        <div className="partners-marquee-wrapper">
          <div className="partners-marquee-fade left" aria-hidden="true" />
          <div className="partners-marquee-fade right" aria-hidden="true" />

          <div className="partners-marquee-track">
            {marqueeItems.map((partner, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.href}
                className="partner-logo-item"
                title={`Explore ${partner.name} machinery`}
                aria-label={partner.name}
              >
                <div className={`partner-brand-wrapper ${partner.logoClass}`}>
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 768px) 180px, 240px"
                    className="partner-brand-img"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
