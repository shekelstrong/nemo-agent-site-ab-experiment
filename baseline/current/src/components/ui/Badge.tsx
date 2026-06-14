import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan backdrop-blur-md", className)}>
      {children}
    </span>
  );
}
