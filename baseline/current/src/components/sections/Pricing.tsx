import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/cn";

const tiers = [
  { name: "Free", price: 0, period: "навсегда", desc: "Попробовать", features: ["1 агент", "100 запросов/мес", "GigaChat Lite", "Telegram-бот", "Сообщество"], cta: "Начать бесплатно", href: "https://t.me/nemo_agent_bot?start=free" },
  { name: "Start", price: 2990, period: "/мес", desc: "Фрилансер", features: ["1 агент", "5 000 запросов", "GigaChat Pro + Hermes", "Свой Telegram-бот", "Email-поддержка"], cta: "Подключить", href: "https://t.me/nemo_agent_bot?start=start" },
  { name: "Pro", price: 5990, period: "/мес", desc: "Малый бизнес", popular: true, features: ["3 агента", "20 000 запросов", "Все LLM", "Skills Library", "Личный кабинет", "Приоритет-поддержка"], cta: "Подключить Pro", href: "https://t.me/nemo_agent_bot?start=pro" },
  { name: "Business", price: 12990, period: "/мес", desc: "Команда 5-15 чел", features: ["10 агентов", "100 000 запросов", "Кастомные скиллы", "MCP-серверы", "SLA 99.9%", "Менеджер"], cta: "Подключить", href: "https://t.me/nemo_agent_bot?start=biz" },
  { name: "Enterprise", price: null, period: "кастом", desc: "Корп / 152-ФЗ", features: ["Безлимит", "On-Premise VPS", "SSO, RBAC, audit", "SLA 99.99%", "Dedicated team"], cta: "Связаться", href: "https://t.me/nemo_agent_bot?start=ent" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge>Тарифы</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-6xl">
            Оплата по подписке,
            <br />
            <span className="text-gradient-cyan">без скрытых платежей</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {tiers.map((t) => (
            <div key={t.name} className={cn("relative flex flex-col rounded-3xl border bg-paper/[0.02] p-6 transition-all", t.popular ? "border-cyan/40 shadow-[0_0_50px_rgba(6,182,212,0.15)]" : "border-paper/10")}>
              {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><div className="inline-flex items-center gap-1 rounded-full bg-cyan px-3 py-1 text-xs font-semibold text-midnight"><Star className="h-3 w-3" /> Популярный</div></div>}
              <div className="text-sm uppercase tracking-wider text-ink-dim">{t.name}</div>
              <div className="mt-2 font-display text-3xl text-paper">
                {t.price === null ? "По запросу" : t.price === 0 ? "0 ₽" : `${t.price.toLocaleString("ru-RU")} ₽`}
              </div>
              <div className="text-sm text-ink-muted">{t.period} · {t.desc}</div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href={t.href} external variant={t.popular ? "primary" : "secondary"} className="w-full">{t.cta}</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
