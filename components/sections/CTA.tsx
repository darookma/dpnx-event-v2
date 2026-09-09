import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ContactInquiryForm from "@/components/sections/ContactInquiryForm";
import {
  pageTypeA,
  carouselBreakout,
  cardMiniZoomClassName,
  focusRing,
  presentationVisualHeaderAlignClassName,
  textLevel3SupportingClassName,
} from "@/lib/layout";
import { siteContent } from "@/content/site";

const { headline, body, whatsapp } = siteContent.cta;
const { whatsapp: contactWhatsApp } = siteContent.contact;

/** Structural separation: heading block → card grid */
const contactHeaderSpacing = "pb-6";

/** Page 7 — left-aligned editorial heading on 80px canvas edge */
const contactHeadingClassName = [
  "[&_h2]:leading-[1.1]",
  "[&_h2+p]:!mt-[3px]",
  "[&_h2+p]:!text-[24px]",
  "[&_h2+p]:leading-snug",
  "[&_h2+p]:tracking-tight",
  "[&_h2+p]:!text-black",
  "[&_h2+p]:font-[650]",
].join(" ");

/** Twin-card grid — same breakout + gap rhythm as Page 6 Numbers */
const contactCardGridClassName = [
  "grid max-md:flex-none min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-2 lg:gap-6",
  carouselBreakout,
  "w-[calc(100%+2.5rem)] md:w-[calc(100%+4rem)] lg:w-[calc(100%+5rem)]",
].join(" ");

const contactGridItemClassName = "min-h-0 min-w-0 w-full";

const panelSurfaceClassName =
  "rounded-panel border border-border bg-background shadow-sm";

/** Right combined card — crew photo area + WhatsApp CTA */
const combinedCrewCardClassName = [
  panelSurfaceClassName,
  "flex max-md:h-auto h-full min-h-0 w-full flex-col overflow-hidden",
  cardMiniZoomClassName,
].join(" ");

const crewPhotoAreaClassName = "max-md:min-h-[160px] min-h-0 flex-1";

const whatsappCtaClassName = [
  "block shrink-0 border-t border-border p-4 text-left no-underline",
  "transition-opacity hover:opacity-80",
  focusRing,
].join(" ");

const whatsappLeadClassName = [
  textLevel3SupportingClassName,
  "!font-[750]",
  "!text-foreground",
].join(" ");

const whatsappLinkRowClassName =
  "mt-2 inline-flex items-center gap-1 text-[24px] font-extrabold leading-snug tracking-tight text-primary";

export default function CTA() {
  return (
    <Section id="cta" className={pageTypeA}>
      <Container variant="page">
        <header
          className={`${contactHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-2xl shrink-0 text-left`}
        >
          <Heading
            title={headline}
            description={body}
            className={`${contactHeadingClassName} text-left [&_h2]:text-left [&_p]:text-left`}
          />
        </header>

        <div className={contactCardGridClassName}>
          <div className={contactGridItemClassName}>
            <ContactInquiryForm className={cardMiniZoomClassName} />
          </div>

          <div className={contactGridItemClassName}>
            <article className={combinedCrewCardClassName}>
              <div className={crewPhotoAreaClassName} aria-hidden="true" />
              <a
                href={contactWhatsApp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={whatsappCtaClassName}
              >
                <p className={whatsappLeadClassName}>{whatsapp.lead}</p>
                <span className={whatsappLinkRowClassName}>
                  <svg
                    className="h-[18px] w-[18px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {whatsapp.label}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}
