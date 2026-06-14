import { cn } from "@/lib/cn";
import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-cyan text-midnight hover:bg-cyan-bright shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-[1.03] active:scale-[0.98]",
  secondary: "bg-paper/10 text-paper border border-paper/20 hover:bg-paper/15 hover:border-paper/30 backdrop-blur-md",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-[15px] rounded-xl",
  lg: "h-14 px-8 text-base rounded-2xl",
};

export function Button({ className, variant = "primary", size = "md", asChild, children, ...props }: ComponentProps<"button"> & { variant?: Variant; size?: Size; asChild?: boolean; children: ReactNode }) {
  if (asChild) {
    return <span className={cn(base, variants[variant], sizes[size], className)}>{children}</span>;
  }
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props}>{children}</button>;
}

export function ButtonLink({ className, variant = "primary", size = "md", href, children, external }: { className?: string; variant?: Variant; size?: Size; href: string; children: ReactNode; external?: boolean }) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}
