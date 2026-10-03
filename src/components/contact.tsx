"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import { Facebook, Linkedin } from "./social-icons";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { site } from "@/lib/site";
export function Contact() {
  const [interest, setInterest] = useState("Interlock paving"),
    [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hello RCB,\n\nI'm interested in ${interest}.\n\n${data.get("message")}\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry: ${interest}`)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app will open with your enquiry. Review it and press Send there. You can also call us directly.",
    );
  }
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="contact-details" data-reveal>
        <h2>
          Let’s build
          <br />
          what’s next.
        </h2>
        <p>
          A new driveway. A bigger project. The right machine.
          <br />
          Tell us what you have in mind.
        </p>
        <div className="contact-links">
          <a href={site.phoneHref}>
            <Phone />
            <span>
              Talk to our team<strong>{site.phone}</strong>
            </span>
            <ArrowUpRight />
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail />
            <span>
              Send us an email<strong>{site.email}</strong>
            </span>
            <ArrowUpRight />
          </a>
          <a href={site.map} target="_blank" rel="noopener noreferrer">
            <MapPin />
            <span>
              Visit RCB Holdings<strong>{site.address}</strong>
            </span>
            <ArrowUpRight />
          </a>
          <div>
            <Clock />
            <span>
              Opening hours
              <strong>Monday – Saturday · 8:30 am – 5:30 pm</strong>
            </span>
          </div>
        </div>
        <a
          href={site.map}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Get directions on Google Maps <ArrowUpRight size={17} />
        </a>
      </div>
      <form className="enquiry-form" onSubmit={submit} suppressHydrationWarning>
        <h3>Tell us about your project</h3>
        <FieldGroup>
          <div className="form-row">
            <Field>
              <FieldLabel htmlFor="name">Your name</FieldLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Full name"
                maxLength={100}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email address</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                maxLength={150}
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="phone">
              Phone number <span>(optional)</span>
            </FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your contact number"
              maxLength={25}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="interest">I’m interested in</FieldLabel>
            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger id="interest">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[
                    "Interlock paving",
                    "Cement blocks",
                    "Construction machinery",
                    "Block-making machinery",
                    "Something else",
                  ].map((x) => (
                    <SelectItem key={x} value={x}>
                      {x}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="message">
              A little about your project
            </FieldLabel>
            <Textarea
              id="message"
              name="message"
              required
              minLength={5}
              maxLength={4000}
              rows={4}
              placeholder="Your location, approximate area or the machine you’re looking for…"
            />
          </Field>
          <Button size="lg" type="submit">
            Prepare email enquiry <ArrowUpRight data-icon="inline-end" />
          </Button>
          <p className="form-note">
            Opens your email app. Your enquiry is sent only when you press Send.
          </p>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </FieldGroup>
      </form>
    </section>
  );
}
export function SocialLinks() {
  const [status, setStatus] = useState("");
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({ title: "RCB Holdings", url: "https://rcb.lk" });
      else {
        await navigator.clipboard.writeText("https://rcb.lk");
        setStatus("Website link copied");
      }
    } catch {
      setStatus("Share the website at rcb.lk");
    }
  }
  return (
    <div className="social-block">
      <span>Share RCB</span>
      <div className="social-links">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frcb.lk"
          aria-label="Share RCB on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Frcb.lk"
          aria-label="Share RCB on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <button onClick={share} aria-label="Share or copy RCB website">
          <Share2 size={18} />
        </button>
      </div>
      <span role="status">{status}</span>
    </div>
  );
}
