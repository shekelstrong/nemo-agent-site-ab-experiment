import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

const nav = [
  { href: "/#skills", label: "Скиллы" },
  { href: "/#how", label: "Как работает" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/articles", label: "База знаний" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/5 bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image src="/logo-mark.svg" alt="Nemo" width={32} height={32} className="h-8 w-8" />
          <span className="display text-lg text-paper">Nemo<span className="text-cyan">.</span>Agent</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-paper/5 hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="https://t.me/nemo_agent_bot" variant="ghost" size="sm" external>Войти</ButtonLink>
          <ButtonLink href="/#pricing" variant="primary" size="sm">Попробовать</ButtonLink>
        </div>
      </div>
    </header>
  );
}
