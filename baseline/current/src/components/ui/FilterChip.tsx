import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function FilterChip({ children, icon: Icon, className, active }: { children: ReactNode; icon?: LucideIcon; className?: string; active?: boolean }) {
  return (
    <button className={cn("inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-all", active || false ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-paper/10 bg-paper/[0.02] text-ink-muted hover:border-paper/20 hover:text-ink", className)}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </button>
  );
}
