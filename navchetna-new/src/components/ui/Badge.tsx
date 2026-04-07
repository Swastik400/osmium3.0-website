import type { ReactNode } from "react";

export function Badge({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-warm-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-warm-700">
      {icon}
      {children}
    </span>
  );
}
