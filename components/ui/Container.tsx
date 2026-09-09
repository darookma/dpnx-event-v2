import { type ReactNode } from "react";
import {
  presentationContainerClassName,
  presentationPageContentClassName,
} from "@/lib/layout";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  variant?: "site" | "page";
};

export default function Container({
  children,
  className,
  variant = "site",
}: ContainerProps) {
  const baseClassName =
    variant === "page" ? presentationPageContentClassName : presentationContainerClassName;

  return (
    <div className={[baseClassName, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
