import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export function Card({ className, children }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={cn("group relative rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all duration-300 hover:border-cyan/30 hover:bg-paper/[0.04] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]", className)}>{children}</div>;
}
