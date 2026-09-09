import type { CSSProperties } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import {
  pageTypeA,
  carouselMiniZoomBleedClassName,
  cardMiniZoomClassName,
  presentationVisualHeaderAlignClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";
import { siteContent, type EditorialStatement } from "@/content/site";

const { headline, intro, statements } = siteContent.statement;

/** Structural separation: explanation → carousel */
const statementHeaderSpacing = "pb-6";

/** Page 3-only — overrides global Heading h2+p rules; temporary B&W test */
const statementHeadingClassName = [
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
const statementCarouselScrollClassName = [
  "overflow-x-auto overscroll-x-contain",
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
].join(" ");

/** Canvas outer-left at start — Card 1 left = (100vw − min(100vw, 80rem)) / 2 */
const statementTrackLeftClassName = "pl-[calc((100vw-min(100vw,80rem))/2)]";

/** Canvas outer-right at end — Card 6 right = (100vw + min(100vw, 80rem)) / 2 */
const statementTrackEndClassName = "pr-[calc((100vw-min(100vw,80rem))/2)]";

/** Full viewport width — clips at browser edges, not canvas-left boundary */
const statementCarouselViewportClassName = [
  statementCarouselScrollClassName,
  carouselMiniZoomBleedClassName,
  "min-h-0 max-w-none shrink-0",
  "h-auto",
  "w-screen",
  "ml-[calc(50%-50vw)]",
].join(" ");

const statementCarouselTrackClassName = [
  "flex w-max min-w-full items-start gap-5 lg:gap-6",
  statementTrackLeftClassName,
  statementTrackEndClassName,
].join(" ");

/** Mobile/tablet: one card + peek (Page 2 rhythm); desktop: three equal canvas widths */
const statementCardWidthClassName = [
  "w-[calc((100vw-(100vw-min(100vw,80rem))/2-1*1.25rem)/1.1)]",
  "md:w-[calc((100vw-(100vw-min(100vw,80rem))/2-2*1.25rem)/2.1)]",
  "lg:w-[calc((min(100vw,80rem)-2*1.5rem)/3)]",
].join(" ");

/** Page 3 twins — one geometry, radius, spacing, and interaction for all six cards */
const statementCardClassName = [
  "relative shrink-0 snap-start snap-always flex flex-col overflow-hidden rounded-[1.75rem]",
  "border border-border/50 bg-background shadow-sm",
  "aspect-[3/4]",
  statementCardWidthClassName,
  cardMiniZoomClassName,
].join(" ");

const statementCardContentClassName =
  "relative z-10 flex flex-col px-6 pt-6 pb-4 md:px-7 md:pb-5";

/** Page 3-only — tighter wrapped-line rhythm for 24px card statements (~2.7px glyph gap) */
const statementCardLeadClassName = [
  textMediumContentClassName,
  "leading-[26px]",
  "!font-[750]",
  "!text-white",
].join(" ");

function statementImageStyle(
  image: EditorialStatement["image"],
): CSSProperties | undefined {
  const style: CSSProperties = {};

  if (image.objectPosition) {
    style.objectPosition = image.objectPosition;
  }

  if (image.scale) {
    style.transform = `scale(${image.scale})`;
    style.transformOrigin =
      image.transformOrigin ?? image.objectPosition ?? "50% 50%";
  }

  return Object.keys(style).length > 0 ? style : undefined;
}

function EditorialStatementCard({
  statement,
  priority,
}: {
  statement: EditorialStatement;
  priority?: boolean;
}) {
  return (
    <article className={statementCardClassName}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={statement.image.src}
          alt={statement.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={priority}
          style={statementImageStyle(statement.image)}
        />
      </div>

      <div className={statementCardContentClassName}>
        <h3 className={statementCardLeadClassName}>{statement.lead}</h3>
        <p className={`mt-[3px] ${textSmallCompactClassName} !font-extrabold !text-white`}>
          {statement.body}
        </p>
      </div>
    </article>
  );
}

export default function Statement() {
  return (
    <Section id="statement" className={pageTypeA}>
      <Container variant="page">
        <header
          className={`${statementHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-[788px] shrink-0 text-left`}
        >
          <Heading
            title={headline}
            description={intro}
            className={statementHeadingClassName}
          />
        </header>

        <div className={statementCarouselViewportClassName}>
          <ul className={statementCarouselTrackClassName}>
            {statements.map((statement, index) => (
              <li key={statement.id} className="shrink-0">
                <EditorialStatementCard
                  statement={statement}
                  priority={index === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
