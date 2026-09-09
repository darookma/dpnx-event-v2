import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import {
  pageTypeB,
  carouselBreakout,
  cardMiniZoomClassName,
  compactTextGapClassName,
  presentationPortraitCard,
  presentationVisualHeaderAlignClassName,
  textHeroDisplayClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";
import { siteContent, type NumberStat } from "@/content/site";

const { items } = siteContent.numbers;

/** Structural separation: heading block → card grid */
const numbersHeaderSpacing = "pb-6";

/** Matches Pages 2–5 heading block — Level 5 (24px) supporting */
const numbersHeadingClassName = [
  "[&_h2]:leading-[1.1]",
  "[&_h2+p]:!mt-[3px]",
  "[&_h2+p]:!text-[24px]",
  "[&_h2+p]:!text-black",
].join(" ");

/** Full canvas width — left edge matches Pages 2–5 presentation content */
const numbersCardGridClassName = [
  "grid max-md:flex-none min-h-0 flex-1 list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6",
  carouselBreakout,
  "w-[calc(100%+2.5rem)] md:w-[calc(100%+4rem)] lg:w-[calc(100%+5rem)]",
].join(" ");

const numbersIntro = {
  title: "Experience you can measure",
  description: "People, projects, and relationships behind every event.",
};

const accentStyles = {
  blue: {
    line: "bg-blue-300",
    gradient:
      "bg-gradient-to-t from-blue-950/95 from-0% via-blue-900/85 via-[12%] via-blue-800/55 via-[24%] via-blue-700/22 via-[36%] via-blue-600/6 via-[46%] to-transparent to-[58%]",
  },
  purple: {
    line: "bg-purple-300",
    gradient:
      "bg-gradient-to-t from-purple-950/95 from-0% via-purple-900/85 via-[12%] via-purple-800/55 via-[24%] via-purple-700/22 via-[36%] via-fuchsia-600/6 via-[46%] to-transparent to-[58%]",
  },
  red: {
    line: "bg-red-300",
    gradient:
      "bg-gradient-to-t from-red-950/95 from-0% via-red-900/85 via-[12%] via-red-800/55 via-[24%] via-red-700/22 via-[36%] via-red-600/6 via-[46%] to-transparent to-[58%]",
  },
} as const;

function NumberEditorialCard({ stat }: { stat: NumberStat }) {
  const accent = accentStyles[stat.accent];

  return (
    <article className={`${presentationPortraitCard} ${cardMiniZoomClassName} max-md:h-auto md:h-full`}>
      <Image
        src={stat.image.src}
        alt={stat.image.alt}
        fill
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover blur-[2px] scale-[1.06]"
        style={{ objectPosition: stat.image.objectPosition }}
      />

      <div className={`absolute inset-0 ${accent.gradient}`} aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col px-6 pt-16 pb-7 md:px-7 md:pb-8">
        <p className={`${textHeroDisplayClassName} text-white`}>{stat.value}</p>
        <div className={`mt-4 mb-3 h-0.5 w-10 ${accent.line}`} aria-hidden="true" />
        <p className={`${textMediumContentClassName} !font-[750] text-white`}>{stat.label}</p>
        <p className={`${compactTextGapClassName} w-full ${textSmallCompactClassName} !font-extrabold text-white/90`}>
          {stat.supporting}
        </p>
      </div>
    </article>
  );
}

export default function Numbers() {
  return (
    <Section id="numbers" className={pageTypeB}>
      <Container variant="page">
        <header
          className={`${numbersHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-2xl shrink-0 text-left`}
        >
          <Heading
            title={numbersIntro.title}
            description={numbersIntro.description}
            className={numbersHeadingClassName}
          />
        </header>

        <ul className={numbersCardGridClassName}>
          {items.map((stat) => (
            <li key={stat.id} className="min-h-0 min-w-0 w-full">
              <NumberEditorialCard stat={stat} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
