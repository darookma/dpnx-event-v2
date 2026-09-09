import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import {
  pageTypeA,
  presentationMediaFrame,
  presentationVisualHeaderAlignClassName,
  cardMiniZoomClassName,
  carouselMiniZoomBleedClassName,
} from "@/lib/layout";
import { siteContent, type AboutContent, type AboutEditorialNote } from "@/content/site";

const about = siteContent.about as AboutContent;

/** Structural separation: heading block → image/card */
const aboutHeaderSpacing = "pb-6";

/** Canvas-width card — left/right edge = 80px; bleed room for 1.018× scale (Page 3 carousel) */
const aboutMediaBreakoutClassName = [
  "relative max-md:flex-none min-h-0 flex-1",
  carouselMiniZoomBleedClassName,
  "-mx-5 w-[calc(100%+2.5rem)]",
  "md:-mx-8 md:w-[calc(100%+4rem)]",
  "lg:-mx-10 lg:w-[calc(100%+5rem)]",
].join(" ");

/** Page 5 card — same whole-card hover transform as Page 3 statement cards */
const aboutCardClassName = [
  "relative w-full max-md:h-auto md:h-full md:min-h-0",
  cardMiniZoomClassName,
].join(" ");

/** Page 5-only — matches Pages 2–4 heading alignment; 3px headline → supporting gap */
const aboutHeadingClassName = [
  "[&_h2]:leading-[1.1]",
  "[&_h2]:!text-black",
  "[&_h2+p]:!mt-[3px]",
  "[&_h2+p]:!text-[24px]",
  "[&_h2+p]:leading-snug",
  "[&_h2+p]:tracking-tight",
  "[&_h2+p]:!text-black",
  "[&_h2+p]:font-[650]",
].join(" ");

/** Negative-space zone — 40% of image width (≈512px @ 1440) to crew-hand boundary; desktop only */
const aboutNotesOverlayClassName =
  "pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[40%] items-center justify-center p-[18px] md:flex";

/** 2×3 grid — centered with equal horizontal breathing room before crew hand */
const aboutNotesGridClassName = "grid shrink-0 grid-cols-2 gap-[22px]";

/** Mobile — editorial notes below the photo, full canvas width */
const aboutNotesMobileGridClassName = "mt-4 grid grid-cols-2 gap-3 md:hidden";

/** Editorial panel — ~1.5:1 proportion, balanced inside negative space */
const aboutNoteBaseClassName = [
  "relative h-auto min-h-[120px] w-full overflow-hidden rounded-[6px] bg-black p-4",
  "shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
  "md:h-[157px] md:w-[227px] md:max-w-full md:p-5",
].join(" ");

/** DPNX! red fade — ~45% visual coverage, smooth transition into black base */
const aboutNoteRedFadeClassName = [
  "from-[#E30613] from-0%",
  "via-[#E30613]/82 via-[12%]",
  "via-[#c00510]/58 via-[22%]",
  "via-[#8a040c]/34 via-[34%]",
  "via-[#4a0206]/14 via-[42%]",
  "to-transparent to-[52%]",
].join(" ");

/** Page 5-only — black base + DPNX! red accent from unique origin per box */
const aboutNoteGradientById: Record<AboutEditorialNote["id"], string> = {
  "small-core": `bg-gradient-to-br ${aboutNoteRedFadeClassName}`,
  "big-crew": `bg-gradient-to-bl ${aboutNoteRedFadeClassName}`,
  handpicked: `bg-gradient-to-r ${aboutNoteRedFadeClassName}`,
  "hands-on": `bg-gradient-to-l ${aboutNoteRedFadeClassName}`,
  "figure-it-out": `bg-gradient-to-tr ${aboutNoteRedFadeClassName}`,
  "get-it-done": `bg-gradient-to-tl ${aboutNoteRedFadeClassName}`,
};

/** Page 5 box title — Golden Rules Level 5 (24px content heading) */
const aboutNoteTitleClassName = [
  "text-center !text-[24px] uppercase tracking-[0.07em] leading-snug !text-white font-[750]",
].join(" ");

/** Page 5 box body — Golden Rules Level 6 (16px body / supporting) */
const aboutNoteBodyClassName =
  "text-center !text-[16px] leading-snug !text-white/85 font-extrabold";

/** Background-only crop — crew remains comfortably centered vertically */
const aboutPhotoObjectPosition = "50% 48%";

/** Page 5-only — slight exposure lift for team visibility */
const aboutPhotoBrightness = "brightness(1.08)";

/** Left negative-space vignette — ends at crew-hand boundary (40% image width @ 1440) */
const aboutNegativeSpaceDarkenClassName = [
  "pointer-events-none absolute inset-y-0 left-0 z-[1] w-[40%]",
  "bg-gradient-to-r",
  "from-black from-0%",
  "via-black/80 via-[20%]",
  "via-black/60 via-[40%]",
  "via-black/30 via-[60%]",
  "via-black/20 via-[75%]",
  "via-black/10 via-[85%]",
  "via-black/5 via-[90%]",
  "to-transparent to-[100%]",
].join(" ");

function AboutEditorialNoteBox({ note }: { note: AboutEditorialNote }) {
  return (
    <div className={aboutNoteBaseClassName}>
      <div
        className={`pointer-events-none absolute inset-0 ${aboutNoteGradientById[note.id]}`}
        aria-hidden
      />
      <p className={`relative z-[1] ${aboutNoteTitleClassName}`}>{note.title}</p>
      <p className={`relative z-[1] mt-1.5 ${aboutNoteBodyClassName}`}>{note.body}</p>
    </div>
  );
}

export default function About() {
  const { image, headline, supporting, notes } = about;

  return (
    <Section id="about" className={pageTypeA}>
      <Container variant="page">
        <header
          className={`${aboutHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-2xl shrink-0 text-left`}
        >
          <Heading
            title={headline}
            description={supporting}
            className={aboutHeadingClassName}
          />
        </header>

        <div className={aboutMediaBreakoutClassName}>
          <article className={aboutCardClassName}>
            <figure
              className={`${presentationMediaFrame} relative w-full overflow-hidden max-md:aspect-[3/2] md:h-full md:min-h-0`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                sizes="1280px"
                className="object-cover"
                style={{
                  objectPosition: aboutPhotoObjectPosition,
                  filter: aboutPhotoBrightness,
                }}
              />

              <div className={aboutNegativeSpaceDarkenClassName} aria-hidden />

              <div className={aboutNotesOverlayClassName}>
                <div className={aboutNotesGridClassName}>
                  {notes.map((note) => (
                    <AboutEditorialNoteBox key={note.id} note={note} />
                  ))}
                </div>
              </div>
            </figure>

            <div className={aboutNotesMobileGridClassName}>
              {notes.map((note) => (
                <AboutEditorialNoteBox key={note.id} note={note} />
              ))}
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
