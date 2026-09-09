import { type ReactNode } from "react";
import type { ServiceIconName } from "@/content/site";
import { compactTextGapClassName, textCardBodyClassName, textCardTitleClassName } from "@/lib/layout";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "portrait";
};

export default function ServiceCard({
  icon,
  title,
  description,
  variant,
}: ServiceCardProps) {
  if (variant === "portrait") {
    return (
      <article className="flex h-full w-full flex-col justify-start rounded-card border border-border bg-background px-6 pt-7 pb-4 shadow-sm transition-shadow duration-300 hover:shadow-md md:px-7 md:pt-8 md:pb-5">
        <div className="mb-7 text-foreground" aria-hidden="true">
          {icon}
        </div>
        <h3 className={`${textCardTitleClassName} !font-[750]`}>{title}</h3>
        <p className={`${compactTextGapClassName} ${textCardBodyClassName} !font-extrabold`}>{description}</p>
      </article>
    );
  }

  return (
    <article className="rounded-panel border border-border bg-background p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-9">
      <div className="mb-5 text-foreground" aria-hidden="true">
        {icon}
      </div>
      <h3 className={`${textCardTitleClassName} !font-[750]`}>{title}</h3>
      <p className={`${compactTextGapClassName} ${textCardBodyClassName} !font-extrabold`}>{description}</p>
    </article>
  );
}

const iconClassName = "h-[27px] w-[27px]";

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  switch (name) {
    case "corporate-events":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20V10l8-5 8 5v10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "conferences-exhibitions":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10h18M8 15h2M12 15h2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "team-building":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M4 19c0-2.5 2-4.5 5-4.5s5 2 5 4.5M13 19c0-1.8 1.5-3.2 3.5-3.2" strokeLinecap="round" />
        </svg>
      );
    case "product-launches":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l2.5 6.5L21 10l-5 4.5L17 21l-5-3-5 3 1-6.5L3 10l6.5-.5L12 3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gala-dinner":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 10c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5-4-1.5-4-3.5z" strokeLinecap="round" />
          <path d="M12 13.5v7M8 21h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "end-to-end":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 7h14M5 12h10M5 17h6" strokeLinecap="round" />
          <circle cx="18" cy="17" r="2" />
          <path d="M20 17l1.5 1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
