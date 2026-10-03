import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Blocks,
  Truck,
  Wrench,
  Layers,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Header } from "@/components/header";
import { Awards, Laurel } from "@/components/brand";
import { ScrollMotion } from "@/components/motion";
import { Calculator } from "@/components/calculator";
import { Comparison } from "@/components/comparison";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { pavers } from "@/lib/calculator";
import { site } from "@/lib/site";

const contract =
  "THESIS: Make paving desirable and machinery approachable. OWN-WORLD: Concept B, cinematic tropical paving, deep RCB blue, Google Sans Flex, quiet gold awards. STORY: See the space, choose a solution, estimate, explore real RCB images, enquire. FIRST VIEWPORT: White navigation, immersive photo, large left headline and two actions, award band. FORM: Seed c9404b5c; user-approved concept B. Responsive semantic content, restrained scroll parallax and image expansion, accessible shadcn controls.";
export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<!-- ${contract} -->` }} />
      <Header />
      <ScrollMotion />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image">
            <Image
              src="/paving-after.webp"
              alt="Architectural inspiration: a tropical courtyard finished with interlock paving"
              fill
              priority
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="hero-scrim" />
          <div className="hero-content">
            <h1 id="hero-title">
              Build something
              <br />
              that lasts.
            </h1>
            <p>
              Interlock paving. Powerful machinery.
              <br />
              Your next project starts here.
            </p>
            <div className="hero-actions">
              <InteractiveHoverButton
                href="#paving"
                variant="hero-primary"
                size="lg"
              >
                Explore paving
              </InteractiveHoverButton>
              <InteractiveHoverButton
                href="#machinery"
                variant="hero-outline"
                size="lg"
              >
                Discover machinery
              </InteractiveHoverButton>
            </div>
          </div>
          <div className="hero-bottom">
            <Awards />
            <a className="scroll-cue" href="#solutions">
              <span>Discover what’s possible</span>
              <ArrowDown size={20} />
            </a>
          </div>
          <span className="hero-image-note">
            Paving inspiration · illustrative scene
          </span>
        </section>

        <section id="solutions" className="intro-section section-pad">
          <div className="intro-copy" data-reveal>
            <h2>
              From the first block.
              <br />
              To the final finish.
            </h2>
            <p>
              Some projects start with a sketch. Others with a patch of earth.
              Wherever yours begins, find the paving, blocks and machinery to
              move it forward with RCB Holdings.
            </p>
            <Link className="text-link" href="/about">
              Get to know RCB <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="intro-products" data-reveal>
            <div className="intro-loader">
              <Image
                src="/wheel-loader.jpg"
                alt="SDLG wheel loader from the RCB machinery collection"
                fill
                sizes="(max-width: 800px) 90vw, 40vw"
              />
            </div>
            <a href="#paving">
              <Blocks />
              <div>
                <strong>Interlock & paving</strong>
                <span>Bring your outdoor space together</span>
              </div>
              <ArrowUpRight />
            </a>
            <a href="#machinery">
              <Truck />
              <div>
                <strong>Construction machinery</strong>
                <span>Find the machine for the job</span>
              </div>
              <ArrowUpRight />
            </a>
            <a href="#calculator">
              <Layers />
              <div>
                <strong>Plan your project</strong>
                <span>Calculate your paving quantity</span>
              </div>
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section id="paving" className="paving-section section-pad">
          <div className="section-heading" data-reveal>
            <h2>
              A great space
              <br />
              starts underfoot.
            </h2>
            <div>
              <p>
                Welcoming driveways. Garden paths. Places to gather. Explore
                interlock paving with a pattern for your space.
              </p>
              <a href="#calculator" className="text-link">
                Calculate your bricks <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="paving-feature">
            <div className="paving-photo">
              <Image
                src="/ip.jpg"
                alt="Red herringbone interlock garden path from the RCB image collection"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div>
                <span>Thoughtful detail.</span>
                <strong>Every step of the way.</strong>
              </div>
            </div>
            <div className="paver-catalog">
              <h3>Find your finish.</h3>
              <p>
                Choose a block, then speak to our team about colours, patterns
                and the right application.
              </p>
              {pavers.map((p, i) => (
                <a
                  className="paver-row"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry about ${p.name} paving`)}`}
                  key={p.id}
                >
                  <span
                    className={`paver-swatch swatch-${i}`}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                  <span>
                    <strong>{p.name}</strong>
                    <small>
                      {p.length} × {p.width} × {p.depth} mm
                    </small>
                  </span>
                  <ArrowUpRight size={19} />
                </a>
              ))}
              <div className="block-note">
                <Blocks size={20} />
                <span>
                  Building up? Ask us about our hollow and solid cement blocks.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="word-ribbon" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-content">
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
            </div>
            <div className="marquee-content" aria-hidden="true">
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
              <span>MADE TO BUILD.</span>
              <span className="word-accent">BUILT TO LAST.</span>
            </div>
          </div>
        </div>
        <section id="machinery" className="machinery-section section-pad">
          <div className="section-heading" data-reveal>
            <h2>
              Big ambitions.
              <br />
              Meet your machines.
            </h2>
            <div>
              <p>
                From moving earth to making blocks, explore equipment for the work
                ahead. Talk to our team about the right model and current
                availability.
              </p>
              <a href="/products" className="text-link">
                Browse complete machinery catalog <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="machine-grid">
            <a
              href="/products?category=construction-machinery"
              className="machine-card machine-wide"
              data-reveal
            >
              <div className="machine-image">
                <Image
                  src="/wheel-loader.jpg"
                  alt="Yellow SDLG wheel loader moving aggregate"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
              <div className="machine-caption">
                <div>
                  <h3>Move more. Do more.</h3>
                  <p>Wheel loaders & earthmoving machinery</p>
                </div>
                <span className="round-arrow">
                  <ArrowUpRight />
                </span>
              </div>
            </a>
            <a
              href="/products?category=block-making-machinery"
              className="machine-card"
              data-reveal
            >
              <div className="machine-image machine-isolated">
                <Image
                  src="/QT8-15.jpg"
                  alt="QT8-15 block-making machinery"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="machine-caption">
                <div>
                  <h3>Build your production.</h3>
                  <p>Block-making machinery</p>
                </div>
                <span className="round-arrow">
                  <ArrowUpRight />
                </span>
              </div>
            </a>
          </div>
          <div className="machinery-support">
            <span>
              <Wrench size={19} /> Let’s find the right fit for your project.
            </span>
            <a className="text-link" href="/products">
              Explore full machinery catalog <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <Comparison />
        <Calculator />
        <Gallery />

        <section id="about" className="about-section section-pad">
          <div className="about-image" data-reveal>
            <Image
              src="/image (3).jpg"
              alt="RCB Holdings machinery stand at a construction exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="about-copy" data-reveal>
            <h2>
              Built on the ground.
              <br />
              Driven by possibility.
            </h2>
            <p>
              Our story brings together concrete products, paving and
              construction machinery. Today, RCB Holdings connects these worlds
              to help customers take their next step.
            </p>
            <p>
              Visit us in Hokandara. Tell us what you’re building. We’ll help
              you explore the products and equipment that fit.
            </p>
            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "20px" }}>
              <Link className="text-link" href="/about">
                Full company profile <ArrowUpRight size={18} />
              </Link>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="vision">
              <span>Our vision</span>
              <blockquote>“To give the best product to customers.”</blockquote>
            </div>
          </div>
        </section>
        <section id="achievements" className="achievements-section section-pad">
          <div className="section-heading" data-reveal>
            <h2>
              Recognition
              <br />
              along the way.
            </h2>
            <p>
              Two milestones in our story. A reminder to keep building, learning
              and moving forward.
            </p>
          </div>
          <div className="achievement-layout">
            <div className="award-photo">
              <Image
                src="/image.jpg"
                alt="An award presentation from the RCB Holdings photo collection"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="award-list">
              <article>
                <Laurel />
                <div>
                  <span>2013</span>
                  <h3>
                    Shramabhimanee
                    <br />
                    National Award
                  </h3>
                  <p>A milestone of national recognition in our journey.</p>
                </div>
              </article>
              <article>
                <Laurel />
                <div>
                  <span>2016</span>
                  <h3>
                    Construction Exhibition
                    <br />
                    Co-Sponsor Award
                  </h3>
                  <p>
                    Recognising our participation in the construction community.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <h2>
            A little clarity
            <br />
            before you build.
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="paving">
              <AccordionTrigger>
                Which paving block should I choose?
              </AccordionTrigger>
              <AccordionContent>
                The best choice depends on the use of your space, expected
                traffic, base preparation and the pattern you prefer. Share your
                project details with our team so we can help you compare the
                available options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="estimate">
              <AccordionTrigger>
                How accurate is the brick calculator?
              </AccordionTrigger>
              <AccordionContent>
                It estimates a rectangular area using the nominal length and
                width of your chosen block, then adds your selected cutting
                allowance. Joint spacing, block shape, borders and the laying
                pattern can change the final quantity. Please confirm your order
                with our team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="machine">
              <AccordionTrigger>
                How do I enquire about a machine?
              </AccordionTrigger>
              <AccordionContent>
                Tell us the type of work, expected workload and the machine
                category you are considering. Our team can discuss current
                models, availability and the support relevant to your
                requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="visit">
              <AccordionTrigger>Can I visit RCB Holdings?</AccordionTrigger>
              <AccordionContent>
                Yes. Find us at No. 516/2, Hokandara North, Hokandara. Our
                listed hours are Monday to Saturday, 8:30 am to 5:30 pm. Call
                ahead on {site.phone} to arrange your visit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <Contact />
      </main>
    </>
  );
}
