import Image from "next/image";
import Section from "@/components/ui/Section";
import Logo from "@/components/ui/Logo";
import {
  pageTypeA,
  presentationAspectVideo,
  presentationMediaFrame,
  heroRevealClassName,
  heroRevealHeadlineClassName,
  heroRevealTaglineClassName,
  heroRevealLogoClassName,
} from "@/lib/layout";
import { siteContent } from "@/content/site";

const { hero } = siteContent;

const heroImageSrc = "/images/hero-dpnx-darkened-bottom-right.png";
const heroImageWidth = 1024;
const heroImageHeight = 575;

/**
 * Full-canvas stage (matches Page 2 carousel breakout). The figure fills the
 * stage width so its left edge matches the first service card without translation.
 */
const heroMediaStageClassName = [
  "-mx-5 flex w-[calc(100%+2.5rem)] shrink-0 self-start",
  "max-md:-mt-8 max-md:ml-[calc(50%-50vw)] max-md:w-screen max-md:max-w-none",
  "md:-mx-8 md:mt-0 md:ml-0 md:w-[calc(100%+4rem)]",
  "lg:-mx-10 lg:w-[calc(100%+5rem)]",
].join(" ");

/** Page 1-only — Golden Rules Level 1 (64px) + Level 4 (40px); mobile uses Level 4 + Level 5 */
const heroHeadlineClassName = [
  "text-[40px] font-extrabold tracking-tight text-white",
  "leading-[1.05] md:text-[64px] md:leading-[calc(67/64)]",
].join(" ");

const heroTaglineClassName = [
  "text-[24px] font-semibold tracking-tight text-white",
  "leading-snug md:text-[40px] md:leading-[1.1]",
].join(" ");

/**
 * Mobile hero crop — tuned against 1024×575 source (inspected, not guessed):
 * - Upper-right: interview panel, skyline, “Events Done Right” poster (~65–85% x, 15–40% y)
 * - Center: camera on tripod, tiered seating, multiview monitor (~45–70% x, 30–55% y)
 * - Bottom-right foreground: large crew back / shoulders (~55–78% x, 70–92% y) — dominant on default cover
 * 62% center pans onto interview, cameras, and production — no extra scale (preserves sharpness on 1024×575).
 */
const heroMobileImageLayerClassName = "hero-mobile-image-layer absolute inset-0";

export default function Hero() {
  return (
    <Section id="hero" className={pageTypeA}>
      <div className={heroMediaStageClassName}>
        <figure
          className={[
            presentationMediaFrame,
            presentationAspectVideo,
            "relative w-full shrink-0",
            "max-md:aspect-auto max-md:min-h-[calc(100svh-var(--navbar-height)-3rem)]",
            "md:aspect-video md:min-h-0",
          ].join(" ")}
        >
          <div className={`absolute inset-0 overflow-hidden ${heroRevealClassName}`}>
            <div className={heroMobileImageLayerClassName}>
              <Image
                src={heroImageSrc}
                alt={hero.image.alt}
                width={heroImageWidth}
                height={heroImageHeight}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <figcaption className="absolute inset-0 left-0 flex w-[min(100%,696px)] items-start pt-8 md:inset-y-0 md:items-center md:pt-0">
            <div className="max-w-[calc(100%-5.5rem)] px-6 text-left md:max-w-lg md:px-8 lg:px-10">
              <h1
                className={`${heroRevealHeadlineClassName} ${heroHeadlineClassName} max-w-md md:max-w-lg`}
              >
                {hero.title.line1}
                <br />
                {hero.title.line2}
              </h1>

              <p
                className={`${heroRevealTaglineClassName} ${heroTaglineClassName} mt-3 max-w-sm md:mt-[16px]`}
              >
                <span className="block md:-translate-y-[4px]">{hero.body}</span>
              </p>
            </div>
          </figcaption>

          <Logo
            className={`${heroRevealLogoClassName} absolute right-4 bottom-4 hidden h-14 w-auto min-[375px]:block md:right-6 md:bottom-6 md:h-[calc((var(--navbar-height)-20px)*2)] lg:right-8 lg:bottom-8`}
          />
        </figure>
      </div>
    </Section>
  );
}
