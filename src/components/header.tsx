"use client";
import { useEffect, useState, useRef } from "react";
import {
  ArrowUpRight,
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Brand } from "./brand";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
const links = [
  ["Products", "/products"],
  ["Interlock & paving", "/#paving"],
  ["Machinery", "/#machinery"],
  ["About Us", "/about"],
  ["Gallery", "/#gallery"],
];
export function Header() {
  const [compact, setCompact] = useState(false);
  const destination = useRef<string | null>(null);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 64);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <header className={cn("site-header", compact && "is-compact")}>
        <div className="nav-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map(([label, href], i) =>
              i < 2 ? (
                <DropdownMenu key={href}>
                  <DropdownMenuTrigger className="nav-dropdown-trigger">
                    {label}
                    <ChevronDown size={13} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="nav-dropdown-content"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <DropdownMenuGroup>
                      {(i === 0
                        ? [
                            ["All Machinery & Products", "/products"],
                            [
                              "Construction Machinery",
                              "/products?category=construction-machinery",
                            ],
                            [
                              "Block Making Machinery",
                              "/products?category=block-making-machinery",
                            ],
                            ["SDLG Heavy Equipment", "/products?brand=sdlg"],
                            ["Noah Block Plants", "/products?brand=noah"],
                            ["Shengya Machines", "/products?brand=shengya"],
                            ["TNY Block Machines", "/products?brand=tny"],
                          ]
                        : [
                            ["Explore paving", "/#paving"],
                            ["Before & after inspiration", "/#inspiration"],
                            ["Brick calculator", "/#calculator"],
                          ]
                      ).map(([text, target]) => (
                        <DropdownMenuItem key={text} asChild>
                          <a href={target}>
                            {text}
                            <ArrowUpRight />
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a key={href} href={href}>
                  {label}
                </a>
              ),
            )}
          </nav>
          <div className="nav-actions">
            <Button asChild size="lg" className="desktop-contact">
              <a href="#contact">
                Let’s talk <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mobile-menu"
                  aria-label="Open navigation"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="mobile-sheet"
                onCloseAutoFocus={(event) => {
                  if (destination.current) {
                    event.preventDefault();
                    const target = document.querySelector(destination.current);
                    destination.current = null;
                    requestAnimationFrame(() =>
                      target?.scrollIntoView({
                        behavior: window.matchMedia(
                          "(prefers-reduced-motion: reduce)",
                        ).matches
                          ? "instant"
                          : "smooth",
                        block: "start",
                      }),
                    );
                  }
                }}
              >
                <SheetTitle>Explore RCB</SheetTitle>
                <SheetDescription>For the places you build.</SheetDescription>
                <nav aria-label="Mobile navigation">
                  {[
                    ["All Products", "/products"],
                    ["About Us", "/about"],
                    ["Interlock & paving", "/#paving"],
                    ["Machinery", "/#machinery"],
                    ["Gallery", "/#gallery"],
                    ["Brick calculator", "/#calculator"],
                    ["Achievements", "/about#achievements"],
                    ["Contact us", "/#contact"],
                  ].map(([label, href]) => (
                    <SheetClose asChild key={href}>
                      <a
                        href={href}
                        onClick={() => {
                          destination.current = href;
                        }}
                      >
                        {label}
                        <ArrowUpRight size={20} />
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <a href={site.phoneHref} className="mobile-phone">
                  <Phone size={18} />
                  {site.phone}
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <TooltipProvider>
        <aside className="contact-dock" aria-label="Quick contact">
          {[
            { label: "Call our team", href: site.phoneHref, Icon: Phone },
            { label: "Email RCB", href: `mailto:${site.email}`, Icon: Mail },
            { label: "Find us on Google Maps", href: site.map, Icon: MapPin },
          ].map(({ label, href, Icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    href.startsWith("https") ? "noopener noreferrer" : undefined
                  }
                >
                  <Icon size={19} />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">{label}</TooltipContent>
            </Tooltip>
          ))}
        </aside>
      </TooltipProvider>
    </>
  );
}
