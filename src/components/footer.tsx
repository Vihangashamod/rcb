import Link from "next/link";
import { ArrowUpRight, Phone, MoveRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/contact";
import { PartnersSection } from "@/components/partners";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <>
      <PartnersSection />
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand light />
            <p>
              Interlock paving. Construction machinery.
              <br />
              For the places you build.
            </p>
            <SocialLinks />
          </div>
          <div className="footer-col">
            <h3>Explore Products</h3>
            <Link href="/products">All Machinery</Link>
            <Link href="/products?category=block-making-machinery">
              Block Making Machinery
            </Link>
            <Link href="/products?category=construction-machinery">
              Construction Machinery
            </Link>
            <a href="/#paving">Interlock & paving</a>
            <a href="/#calculator">Brick calculator</a>
            <a href="/#gallery">Project gallery</a>
          </div>
          <div className="footer-col">
            <h3>Get to know us</h3>
            <Link href="/about">About Us</Link>
            <a href="/about#divisions">Core Divisions</a>
            <a href="/about#achievements">Achievements</a>
            <a href="/#contact">Contact us</a>
            <a href={site.map} target="_blank" rel="noopener noreferrer">
              Find us <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="footer-col footer-contact">
            <h3>Let’s talk</h3>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href="tel:+94112561959">{site.office}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>
              No. 516/2, Hokandara North,
              <br />
              Hokandara, Sri Lanka.
            </p>
          </div>
        </div>
        <Separator />
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} RCB Holdings (Pvt) Ltd. All rights
            reserved.
          </p>
          <a href="#">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          RCB HOLDINGS
          <ArrowUpRight aria-hidden="true" />
        </div>
      </footer>
      <a className="mobile-call" href={site.phoneHref}>
        <Phone size={18} />
        Talk to RCB <MoveRight size={18} />
      </a>
    </>
  );
}
