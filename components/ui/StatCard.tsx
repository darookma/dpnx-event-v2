import { type ReactNode } from "react";
import { compactTextGapClassName, textBodyMutedClassName, textHeroDisplayClassName } from "@/lib/layout";

type StatCardProps = {
  value: ReactNode;
  label: ReactNode;
  className?: string;
};

export default function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={[
        "rounded-panel border border-border bg-background p-5 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className={`${textHeroDisplayClassName} text-foreground`}>{value}</p>
      <p className={`${compactTextGapClassName} ${textBodyMutedClassName}`}>{label}</p>
    </div>
  );
}
