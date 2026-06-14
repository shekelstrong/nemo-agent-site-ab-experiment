import Image from "next/image";
import Link from "next/link";

const cols = [
  { title: "Продукт", links: [["/#skills", "Скиллы"], ["/#how", "Как работает"], ["/pricing", "Тарифы"], ["/articles", "База знаний"]] },
  { title: "Компания", links: [["/about", "О нас"], ["/contact", "Контакты"], ["https://t.me/nemo_agent_news", "Канал в Telegram"]] },
  { title: "Юридическое", links: [["/offer", "Оферта"], ["/privacy", "Политика конфиденциальности"], ["/terms", "Условия использования"]] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-paper/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-mark.svg" alt="Nemo" width={32} height={32} className="h-8 w-8" />
              <span className="display text-lg text-paper">Nemo<span className="text-cyan">.</span>Agent</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">ИИ-агент в Telegram, который работает на вашем VPS. Глубина и навигация.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3 text-xs font-mono uppercase tracking-wider text-ink-dim">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-sm text-ink-muted transition-colors hover:text-cyan">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/5 pt-8 md:flex-row">
          <p className="text-xs text-ink-dim">© 2026 Nemo Agent. Сделано в России 🇷🇺</p>
          <p className="font-mono text-xs text-ink-dim">v0.1.0 · 2026-06-09</p>
        </div>
      </div>
    </footer>
  );
}
