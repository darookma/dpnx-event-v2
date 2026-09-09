"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { FeaturedProjectContent } from "@/content/site";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import {
  compactTextGapClassName,
  focusRing,
  cardMiniZoomClassName,
  presentationMediaFrame,
  textLabelClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";

type SelectedWorkGridProps = {
  projects: FeaturedProjectContent[];
};

/** BAF Fair collage ratio — 1612 × 975 ≈ 1.65:1 */
const collageAspectClassName = "aspect-[1612/975]";

/** Canvas outer-left at start — Card 1 left = (100vw − min(100vw, 80rem)) / 2 */
const gridLeftClassName = "pl-[calc((100vw-min(100vw,80rem))/2)]";

/** Canvas outer-right at end — Card 3 right = (100vw + min(100vw, 80rem)) / 2 */
const gridEndClassName = "pr-[calc((100vw-min(100vw,80rem))/2)]";

/** Mobile: one card + peek (Page 2 rhythm); desktop: dominant 72% editorial slide */
const carouselSlideClassName = [
  "shrink-0 snap-start snap-always",
  "w-[calc((100vw-(100vw-min(100vw,80rem))/2-1*1.25rem)/1.1)]",
  "md:w-[calc(((100vw-(100vw-min(100vw,80rem))/2)-1.25rem-5rem)*0.72)]",
  "lg:w-[calc(((100vw-(100vw-min(100vw,80rem))/2)-1.5rem-7.5rem)*0.72)]",
].join(" ");

/** Full viewport width — clips only at browser edges, not an internal left boundary */
const carouselScrollClassName = [
  "overflow-x-auto overscroll-x-contain",
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
].join(" ");

const carouselViewportClassName = [
  carouselScrollClassName,
  "max-md:py-0 md:py-[5px]",
  "max-w-none shrink-0",
  "h-auto",
  "w-screen",
  "ml-[calc(50%-50vw)]",
].join(" ");

/** Continuous track — grid-aligned start/end stops */
const carouselTrackClassName = [
  "flex w-max min-w-full items-start gap-5 lg:gap-6",
  gridLeftClassName,
  gridEndClassName,
].join(" ");

const editorialImageFrameClassName = [
  presentationMediaFrame,
  collageAspectClassName,
  "relative w-full shrink-0 overflow-hidden bg-surface-subtle",
  "max-md:aspect-[6/5] md:aspect-[1612/975] md:min-h-[13rem]",
].join(" ");

/** Mobile copy block — readable below the image, not over the collage */
const mobileProjectCopyClassName = "pt-3 md:hidden";

const expandButtonClassName = [
  "absolute z-20 flex h-10 w-10 items-center justify-center rounded-full",
  "bg-white leading-none text-foreground shadow-sm",
  "max-md:bottom-6 max-md:right-6 md:bottom-6 md:right-6",
  focusRing,
].join(" ");

function projectCoverClassName(project: FeaturedProjectContent): string {
  if (project.id === "baf-fair") {
    return "max-md:scale-100 max-md:object-[50%_38%] md:origin-[50%_44%] md:scale-[1.11] md:object-[50%_44%]";
  }

  return "";
}

function projectCoverStyle(project: FeaturedProjectContent): CSSProperties | undefined {
  if (project.id === "baf-fair") {
    return undefined;
  }

  if (project.cover.objectPosition) {
    return { objectPosition: project.cover.objectPosition };
  }

  return undefined;
}

function SelectedWorkProjectCard({
  project,
  priority = false,
  onExpand,
}: {
  project: FeaturedProjectContent;
  priority?: boolean;
  onExpand: () => void;
}) {
  const slides = project.gallery;

  return (
    <article className={`flex shrink-0 flex-col ${cardMiniZoomClassName}`}>
      <div
        className={`${editorialImageFrameClassName} cursor-pointer`}
        onClick={onExpand}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 820px, 880px"
          className={["object-cover", projectCoverClassName(project)].join(" ")}
          style={projectCoverStyle(project)}
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-[38%] bg-gradient-to-b from-black/35 via-black/10 to-transparent md:block"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-0 z-10 hidden px-6 pt-6 pr-24 md:block md:px-7">
          <p className={`${textLabelClassName} !text-white`}>{project.category}</p>
          <h3 className={`${compactTextGapClassName} ${textMediumContentClassName} !font-[750] !text-white`}>
            {project.title}
          </h3>
          <p className={`mt-[3px] max-w-[48ch] ${textSmallCompactClassName} !font-extrabold !text-white`}>
            {project.opening}
          </p>
          {slides.length > 0 ? (
            <p className="sr-only">{slides.length} images in gallery</p>
          ) : null}
        </div>

        <button
          type="button"
          aria-label={`View ${project.title} gallery`}
          aria-haspopup="dialog"
          onClick={(event) => {
            event.stopPropagation();
            onExpand();
          }}
          className={expandButtonClassName}
        >
          <svg
            className="h-7.5 w-7.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 7v10M7 12h10" />
          </svg>
        </button>
      </div>

      <div className={mobileProjectCopyClassName}>
        <p className={textLabelClassName}>{project.category}</p>
        <h3 className={`${compactTextGapClassName} ${textMediumContentClassName} !font-[750]`}>
          {project.title}
        </h3>
        <p className={`mt-[3px] ${textSmallCompactClassName} !font-extrabold`}>
          {project.opening}
        </p>
      </div>
    </article>
  );
}

export default function SelectedWorkGrid({ projects }: SelectedWorkGridProps) {
  const [activeProject, setActiveProject] = useState<FeaturedProjectContent | null>(
    null,
  );
  const scrollPositionRef = useRef(0);

  const closeGallery = useCallback(() => {
    setActiveProject(null);
  }, []);

  const openGallery = useCallback((project: FeaturedProjectContent) => {
    scrollPositionRef.current = window.scrollY;
    setActiveProject(project);
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const scrollY = scrollPositionRef.current;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";

    return () => {
      bodyStyle.overflow = "";
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.width = "";

      const previousScrollBehavior = htmlStyle.scrollBehavior;
      htmlStyle.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);

      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        htmlStyle.scrollBehavior = previousScrollBehavior;
      });
    };
  }, [activeProject]);

  return (
    <>
      <div className={carouselViewportClassName}>
        <ul className={carouselTrackClassName}>
          {projects.map((project, index) => (
            <li key={project.id} className={carouselSlideClassName}>
              <SelectedWorkProjectCard
                project={project}
                priority={index === 0}
                onExpand={() => openGallery(project)}
              />
            </li>
          ))}
        </ul>
      </div>

      {activeProject ? (
        <ProjectGalleryModal project={activeProject} onClose={closeGallery} />
      ) : null}
    </>
  );
}
