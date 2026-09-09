import { type ReactNode } from "react";
import { sectionHeadingClassName } from "@/lib/layout";

type HeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function Heading({
  eyebrow,
  title,
  description,
  className,
}: HeadingProps) {
  return (
    <div className={[sectionHeadingClassName, className].filter(Boolean).join(" ")}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
