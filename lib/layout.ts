/** Master presentation grid — shared by every homepage chapter */
export const presentationMaxWidth = "max-w-[1280px]";
export const presentationGutter = "px-5 md:px-8 lg:px-10";
export const presentationContainerClassName = [
  "mx-auto w-full",
  presentationMaxWidth,
  presentationGutter,
].join(" ");

/** Fixed 16:9 presentation page canvas — same left + top guides on every chapter */
export const presentationPageTopGuide = "pt-8 md:pt-10 lg:pt-12";
export const presentationPageCanvas = [
  "relative mx-auto box-border flex w-full flex-col",
  presentationMaxWidth,
  "h-auto md:aspect-video",
  presentationGutter,
  presentationPageTopGuide,
  "max-md:pb-8",
].join(" ");

/** Inner content area within a presentation page (no duplicate gutters) */
export const presentationPageContentClassName =
  "flex min-h-0 w-full flex-col max-md:flex-none md:flex-1";

/** Page chapter backgrounds — alternate A (white) and B (subtle gray) only */
export const pageTypeA = "bg-background";
export const pageTypeB = "bg-surface-subtle";

/** @deprecated Presentation pages use fixed 16:9 canvas — no outer chapter padding */
export const pageChapterPadding = "";

/** 16:9 media frame — use consistently for editorial photography */
export const presentationAspectVideo = "aspect-video";
export const presentationMediaFrame = "relative overflow-hidden rounded-media";

export const presentationScrollHidden = [
  "snap-x snap-mandatory overflow-x-auto scroll-smooth",
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
].join(" ");

export const presentationHeaderClassName = "mx-auto max-w-2xl text-center";
export const presentationHeaderSpacing = "pb-6 md:pb-8";

export const carouselBreakout = "-mx-5 md:-mx-8 lg:-mx-10";

/** Align heading + intro to 80px canvas edge when introducing breakout visuals (Pages 2–4) */
export const presentationVisualHeaderAlignClassName =
  "-ml-5 md:-ml-8 lg:-ml-10";
export const carouselEndSpacer =
  "after:w-5 after:shrink-0 md:after:w-8 lg:after:w-10";

/** @deprecated Use pageChapterPadding — kept for gradual migration */
export const slideSection = "";

export const canvasSectionHeight =
  "h-[calc(100svh-var(--navbar-height))] max-h-[calc(100svh-var(--navbar-height))]";

export const sectionPaddingCalm = pageChapterPadding;
export const sectionPaddingCompact = pageChapterPadding;

export const headerContentSpacing = presentationHeaderSpacing;

export const textSmallWeightClassName = "font-[650]";

/** Golden Rule typography — exactly six sizes (64 / 54 / 45 / 40 / 24 / 16px), fixed at all breakpoints.
 *  Responsive layouts use wrapping, line-height, spacing, and composition — not additional font sizes. */

/** Level 1 — 64px — Hero primary display (Page 1 headline — see Hero.tsx; page-local, not a global token) */

/** Level 2 — 54px — Large display / numeric display (stat values, approved large display content) */
export const textHeroDisplayClassName =
  "text-[54px] font-extrabold leading-[1.1] tracking-tight text-foreground";

/** Level 3 — 45px — Section / major heading */
export const textLargeSectionClassName =
  "text-[45px] font-bold tracking-tight text-foreground";

/** Level 4 — 40px — Hero secondary display (Page 1 tagline — see Hero.tsx; page-local, not a global token) */

/** Level 5 — 24px — Content heading / lead / card title */
export const textMediumContentClassName =
  "text-[24px] font-semibold tracking-tight text-foreground";

/** Level 5 (muted variant) — meaningful lead copy at content-heading scale */
export const textLevel3SupportingClassName = [
  "text-[24px] leading-snug tracking-tight text-muted",
  textSmallWeightClassName,
].join(" ");

/** Level 6 — 16px — Body, metadata, labels, navigation, UI */
export const textSmallCompactClassName = [
  "text-[16px] leading-snug text-muted",
  textSmallWeightClassName,
].join(" ");

/** @deprecated Use textHeroDisplayClassName (Level 2 — 54px large display, not Hero primary) */
export const textLargeHeroClassName = textHeroDisplayClassName;

/** @deprecated Use textLargeSectionClassName */
export const textLargeClassName = textLargeSectionClassName;

/** @deprecated Use textMediumContentClassName */
export const textMediumClassName = textMediumContentClassName;

/** @deprecated Use textSmallCompactClassName */
export const textSmallSupportingClassName = textSmallCompactClassName;

/** @deprecated Use textSmallCompactClassName */
export const textSmallClassName = textSmallCompactClassName;

/** Compact gap between related heading and supporting copy */
export const compactTextGapClassName = "mt-1.5";

/** Controlled gap from section heading (Level 3) to supporting copy */
export const sectionHeadlineGapClassName = "mt-2 md:mt-2.5";

/** @deprecated Use sectionHeadlineGapClassName */
export const headlineDescriptionSpacing = sectionHeadlineGapClassName;

export const sectionH2ClassName = textLargeSectionClassName;

export const sectionIntroClassName = textLevel3SupportingClassName;

export const sectionHeaderClassName = presentationHeaderClassName;

export const textBodyClassName = "text-[16px] leading-snug";
export const textBodyMutedClassName = textSmallCompactClassName;
export const textLabelClassName = [
  "text-[16px] leading-snug tracking-wide text-muted",
  textSmallWeightClassName,
].join(" ");
export const sectionEyebrowHeaderClassName =
  "[&_p:first-child]:text-[16px] [&_p:first-child]:font-[650] [&_p:first-child]:uppercase [&_p:first-child]:tracking-[0.12em] [&_p:first-child]:text-muted";
export const textCardTitleClassName = textMediumContentClassName;
export const textCardBodyClassName = textSmallCompactClassName;
export const textLinkClassName = [
  "text-[16px] text-foreground",
  textSmallWeightClassName,
].join(" ");
export const textFooterClassName = ["text-[16px] text-muted", textSmallWeightClassName].join(" ");
export const textFooterMetaClassName = ["text-[16px] text-muted", textSmallWeightClassName].join(" ");

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export const primaryButtonClassName = [
  "bg-primary px-10 py-3.5 text-[16px] text-white",
  textSmallWeightClassName,
  "transition-opacity duration-300 hover:opacity-90",
  focusRing,
].join(" ");

export const sectionHeadingClassName = [
  "flex flex-col",
  "[&_h2]:text-[45px] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground",
  "[&_h2+p]:mt-2 md:[&_h2+p]:mt-2.5",
  "[&_h2+p]:text-[16px] [&_h2+p]:leading-snug [&_h2+p]:tracking-tight [&_h2+p]:text-muted [&_h2+p]:font-[650]",
].join(" ");

/** Subtle pointer mini-zoom — whole card scales as one object */
export const cardMiniZoomClassName = [
  "transform-gpu transition-transform duration-200 ease-out will-change-transform",
  "motion-safe:hover:scale-[1.018] motion-safe:active:scale-[1.01]",
].join(" ");

/** Vertical bleed inside horizontal carousels — room for 1.018× transform paint (~0.9% per edge) */
export const carouselMiniZoomBleedClassName = "py-[5px]";

/** Hero entrance reveal — image → headline → tagline → logo */
export const heroRevealClassName = "hero-reveal";
export const heroRevealHeadlineClassName = "hero-reveal hero-reveal-step-headline";
export const heroRevealTaglineClassName = "hero-reveal hero-reveal-step-tagline";
export const heroRevealLogoClassName = "hero-reveal hero-reveal-step-logo";

/** @deprecated Use presentationGutter */
export const containerGutter = presentationGutter;

export const carouselServicesTrack = [
  "flex w-max min-w-full items-stretch gap-4 md:gap-5",
  presentationGutter,
  carouselEndSpacer,
].join(" ");

/** Service / Numbers twin cards — consistent 3:5 portrait ratio */
export const presentationPortraitCard = [
  "relative isolate aspect-[3/5] w-full overflow-hidden rounded-media",
].join(" ");

export const serviceSlideClassName = [
  "relative h-full shrink-0 snap-start snap-always overflow-hidden rounded-media",
  "aspect-[3/5] w-auto",
].join(" ");

export const presentationCarouselArea = "min-h-0 flex-1";

export const navLinkClassName = [
  "text-[16px] text-foreground transition-opacity hover:opacity-80",
  textSmallWeightClassName,
].join(" ");
