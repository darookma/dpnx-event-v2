import Image from "next/image";
import type { FeaturedProjectContent } from "@/content/site";
import {
  presentationAspectVideo,
  presentationMediaFrame,
  compactTextGapClassName,
  textLabelClassName,
  textLinkClassName,
  textMediumContentClassName,
  textSmallCompactClassName,
} from "@/lib/layout";

type FeaturedProjectProps = {
  project: FeaturedProjectContent;
  imagePosition: "left" | "right";
  priority?: boolean;
};

export default function FeaturedProject({
  project,
  imagePosition,
  priority = false,
}: FeaturedProjectProps) {
  const imageOrder = imagePosition === "right" ? "lg:order-2" : "";
  const textOrder = imagePosition === "right" ? "lg:order-1" : "";

  return (
    <article className="grid h-full min-h-0 grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-10">
      <div className={`${presentationMediaFrame} ${presentationAspectVideo} ${imageOrder} w-full max-w-full justify-self-start`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          priority={priority}
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className={`flex flex-col ${textOrder}`}>
        <p className={textLabelClassName}>{project.category}</p>
        <h3 className={`${compactTextGapClassName} ${textMediumContentClassName} !font-[750]`}>{project.title}</h3>
        <p className={`${compactTextGapClassName} ${textSmallCompactClassName} !font-extrabold`}>{project.opening}</p>

        {project.story ? (
          <p className={`${compactTextGapClassName} ${textSmallCompactClassName}`}>{project.story}</p>
        ) : null}

        {project.href ? (
          <a
            href={project.href}
            className={`mt-4 ${textLinkClassName} underline-offset-4 transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
          >
            View Project
          </a>
        ) : null}
      </div>
    </article>
  );
}
