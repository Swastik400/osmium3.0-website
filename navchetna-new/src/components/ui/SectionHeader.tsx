import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  center = true,
}: {
  badge?: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge && (
        <div className={`mb-5 ${center ? "flex justify-center" : ""}`}>
          <Badge icon={badgeIcon}>{badge}</Badge>
        </div>
      )}
      <h2 className="font-[var(--font-dm-serif)] text-3xl tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-warm-600 md:text-lg">{description}</p>
      )}
    </div>
  );
}
