"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import type { FeaturedProjectContent, ImageAsset } from "@/content/site";
import {
  compactTextGapClassName,
  focusRing,
  textLabelClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";

const MAX_GALLERY_IMAGES = 8;

const GALLERY_MODAL_TRANSITION_MS = 700;

/** 80px canvas margins at desktop — same horizontal geometry as before */
const galleryHorizontalInsetClassName =
  "px-[max(1.25rem,calc((100vw-min(100vw,80rem))/2))]";

const galleryCloseButtonClassName = [
  "gallery-modal-close fixed z-[60] flex h-10 w-10 items-center justify-center rounded-full",
  "bg-foreground text-background shadow-sm hover:opacity-90",
  "top-[calc(38px+1.25rem)]",
  "right-[calc(max(1.25rem,calc((100vw-min(100vw,80rem))/2))+1.25rem)]",
].join(" ");

const galleryBackdropClassName =
  "gallery-modal-backdrop fixed inset-0 z-40 border-0 p-0 cursor-default";

type ProjectGalleryModalProps = {
  project: FeaturedProjectContent;
  onClose: () => void;
};

function galleryImages(gallery: ImageAsset[]): ImageAsset[] {
  return gallery.slice(0, MAX_GALLERY_IMAGES);
}

export default function ProjectGalleryModal({
  project,
  onClose,
}: ProjectGalleryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = galleryImages(project.gallery);
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setIsOpen(false);
  }, [isClosing]);

  useEffect(() => {
    if (!isClosing) return;

    const timer = window.setTimeout(onClose, GALLERY_MODAL_TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [requestClose]);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project.id, images.length]);

  if (images.length === 0) return null;

  const openClassName = isOpen ? "is-open" : "";

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        className={`${galleryBackdropClassName} ${openClassName}`}
        aria-label="Close gallery"
        onClick={requestClose}
      />

      <div
        ref={scrollRef}
        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-width:thin]"
      >
        <div
          className={galleryHorizontalInsetClassName}
          onClick={requestClose}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`gallery-title-${project.id}`}
            className={`gallery-modal-panel mt-[38px] mb-[38px] overflow-hidden rounded-media bg-background shadow-lg ${openClassName}`}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="max-w-prose px-6 pt-6 pr-16 md:px-8 md:pt-8">
              <p className={textLabelClassName}>{project.category}</p>
              <h3
                id={`gallery-title-${project.id}`}
                className={`${compactTextGapClassName} ${textMediumContentClassName} !font-[750]`}
              >
                {project.title}
              </h3>
              <p className={`${compactTextGapClassName} ${textSmallCompactClassName} !font-extrabold`}>
                {project.opening}
              </p>
            </header>

            <div className="mt-5 flex flex-col md:mt-6">
              {images.map((slide, index) => (
                <figure key={slide.src} className="w-full shrink-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    sizes="(max-width: 768px) calc(100vw - 2.5rem), 1280px"
                    className={
                      index === images.length - 1
                        ? "block h-auto w-full rounded-b-media object-cover"
                        : "block h-auto w-full object-cover"
                    }
                    style={
                      slide.objectPosition
                        ? { objectPosition: slide.objectPosition }
                        : undefined
                    }
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close gallery"
        onClick={requestClose}
        className={`${galleryCloseButtonClassName} ${openClassName} ${focusRing}`}
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.625"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
