import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { siteContent } from "@/content/site";
import { navLinkClassName, textFooterClassName, textFooterMetaClassName } from "@/lib/layout";

const { links } = siteContent.navigation;
const { email: contactEmail, phone: contactPhone } = siteContent.contact;
const { copyright } = siteContent.footer;

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-background py-8 md:py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
          <div className="md:flex-1">
            <Logo className="h-9 w-auto md:h-10" />
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-6 md:flex-1 md:gap-8"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClassName}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={`flex flex-col items-center gap-1 md:flex-1 md:items-end ${textFooterClassName}`}>
            <a href={contactEmail.href} className="transition-opacity hover:opacity-80">
              {contactEmail.label}
            </a>
            <a href={contactPhone.href} className="transition-opacity hover:opacity-80">
              {contactPhone.label}
            </a>
          </div>
        </div>

        <p className={`mt-6 ${textFooterMetaClassName}`}>{copyright}</p>
      </Container>
    </footer>
  );
}
