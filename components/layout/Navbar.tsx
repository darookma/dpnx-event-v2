"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { siteContent } from "@/content/site";
import { navLinkClassName, primaryButtonClassName } from "@/lib/layout";

const NAVBAR_HEIGHT = 80;

const { links } = siteContent.navigation;
const { whatsapp: contactWhatsApp } = siteContent.contact;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="navbar"
      className="h-[var(--navbar-height)] shrink-0"
    >
      <header
        style={{ height: NAVBAR_HEIGHT }}
        className={[
          "fixed inset-x-0 top-0 z-50 h-[var(--navbar-height)] w-full border-b border-border transition-[background-color,box-shadow,backdrop-filter] duration-300",
          isScrolled
            ? "bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-background/80 shadow-none backdrop-blur-md",
        ].join(" ")}
      >
        <Container className="h-full">
          <div className="flex h-full items-center">
            <div className="flex flex-1 items-center">
              <Logo className="h-[calc(var(--navbar-height)-16px)] w-auto" />
            </div>

            <nav
              aria-label="Primary navigation"
              className="hidden flex-1 justify-center gap-6 md:flex lg:gap-8"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className={`${navLinkClassName} !font-[750]`}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-1 justify-end">
              <Button href={contactWhatsApp.href} className={`${primaryButtonClassName} !font-[750]`}>
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </section>
  );
}
