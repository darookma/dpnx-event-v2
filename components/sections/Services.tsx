import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import type { ServiceContent } from "@/content/site";
import {
  pageTypeB,
  cardMiniZoomClassName,
  carouselMiniZoomBleedClassName,
  presentationVisualHeaderAlignClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";
import { siteContent } from "@/content/site";

const { title, description, items } = siteContent.services;

/** Structural separation: explanation → carousel */
const servicesHeaderSpacing = "pb-6";

/** Page 2-only — overrides global Heading h2+p rules; temporary B&W test */
const servicesHeadingClassName = [
  "[&_h2]:leading-[1.1]",
  "[&_h2]:!text-black",
  "[&_h2+p]:!mt-[3px]",
  "[&_h2+p]:!text-[24px]",
  "[&_h2+p]:leading-snug",
  "[&_h2+p]:tracking-tight",
  "[&_h2+p]:!text-black",
  "[&_h2+p]:font-[650]",
].join(" ");

/** Native horizontal rail — overflow-x only; vertical wheel chains to the page */
const serviceCarouselScrollClassName = [
  "overflow-x-auto overscroll-x-contain",
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
].join(" ");

/** Canvas outer-left at start — Card 1 left = (100vw − min(100vw, 80rem)) / 2 */
const serviceTrackLeftClassName = "pl-[calc((100vw-min(100vw,80rem))/2)]";

/** Canvas outer-right at end — Card 8 right = (100vw + min(100vw, 80rem)) / 2 */
const serviceTrackEndClassName = "pr-[calc((100vw-min(100vw,80rem))/2)]";

/** Full viewport width — clips at browser edges, not canvas-left boundary */
const serviceCarouselViewportClassName = [
  serviceCarouselScrollClassName,
  carouselMiniZoomBleedClassName,
  "max-w-none shrink-0",
  "h-auto",
  "w-screen",
  "ml-[calc(50%-50vw)]",
].join(" ");

const serviceCarouselTrackClassName = [
  "flex w-max min-w-full items-start gap-5 lg:gap-6",
  serviceTrackLeftClassName,
  serviceTrackEndClassName,
].join(" ");

/** Twin cards — fixed width from 4 full + ~10% of 5th (desktop) composition */
const serviceCardWidthClassName = [
  "w-[calc((100vw-(100vw-min(100vw,80rem))/2-1*1.25rem)/1.1)]",
  "md:w-[calc((100vw-(100vw-min(100vw,80rem))/2-2*1.25rem)/2.1)]",
  "lg:w-[calc((100vw-(100vw-min(100vw,80rem))/2-4*1.5rem)/4.1)]",
].join(" ");

const serviceEditorialCardClassName = [
  "relative shrink-0 snap-start snap-always overflow-hidden rounded-media",
  "aspect-[3/5]",
  serviceCardWidthClassName,
  cardMiniZoomClassName,
].join(" ");

/** Barely-there depth for white copy over bright photography */
const serviceCopyShadowClassName = "[text-shadow:0_1px_3px_rgba(0,0,0,0.16)]";

type ServiceSlideProps = {
  service: ServiceContent;
  priority?: boolean;
};

function ServiceSlide({ service, priority = false }: ServiceSlideProps) {
  return (
    <article className={serviceEditorialCardClassName}>
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) calc(85vw * 2.5), (max-width: 1024px) calc(45vw * 2.5), 925px"
        className="object-cover"
        style={
          service.image.objectPosition
            ? { objectPosition: service.image.objectPosition }
            : undefined
        }
      />

      {service.atmosphere ? (
        <div className={`absolute inset-0 ${service.atmosphere}`} aria-hidden="true" />
      ) : null}

      {service.readabilityScrim ? (
        <div
          className={`absolute inset-0 ${service.readabilityScrim}`}
          aria-hidden="true"
        />
      ) : null}

      <div className="absolute inset-x-0 top-0 z-10 px-6 pb-16 pt-0 md:px-7 md:pb-20">
        <div className="pt-6">
          <h3
            className={`${textSmallCompactClassName} !font-[750] ${serviceCopyShadowClassName} !text-white`}
          >
            {service.title}
          </h3>
          <p
            className={`mt-[3px] max-w-[26ch] ${textMediumContentClassName} !font-extrabold ${serviceCopyShadowClassName} !text-white`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <Section id="services" className={pageTypeB}>
      <Container variant="page">
        <header
          className={`${servicesHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-lg shrink-0 text-left`}
        >
          <Heading
            title={title}
            description={description}
            className={servicesHeadingClassName}
          />
        </header>

        <div className={serviceCarouselViewportClassName}>
          <ul className={serviceCarouselTrackClassName}>
            {items.map((service, index) => (
              <li key={service.id} className="shrink-0">
                <ServiceSlide service={service} priority={index < 2} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
