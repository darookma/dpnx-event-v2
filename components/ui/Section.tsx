import { type ReactNode } from "react";
import { presentationPageCanvas } from "@/lib/layout";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "min-h-[calc(100svh-var(--navbar-height))]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={presentationPageCanvas}>{children}</div>
    </section>
  );
}
