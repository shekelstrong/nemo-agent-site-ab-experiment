import { Badge } from "@/components/ui/Badge";
import { MessageCircle, Wallet, Server, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: MessageCircle, title: "Опишите задачу", desc: "В Telegram или на сайте: 'агент для продаж в b2b-сегменте, ищет лидов в строительстве'" },
  { n: "02", icon: Wallet, title: "Оплатите подписку", desc: "ЮKassa / СБП / картой. От 2 990 ₽/мес. Без привязки на 7 дней" },
  { n: "03", icon: Server, title: "VPS поднимается за 10 мин", desc: "Автоматически по API. Логин/пароль уходят в Telegram + на email" },
  { n: "04", icon: Rocket, title: "Пишите боту — он работает", desc: "Команды: /лид, /анализ, /отчёт. Агент учится на ваших данных" },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge>Запуск за 10 минут</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-6xl">Как это работает</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="group relative">
              <div className="absolute -left-px top-12 hidden h-px w-full bg-gradient-to-r from-cyan/40 to-transparent lg:block"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/5 text-cyan transition-all group-hover:scale-110 group-hover:bg-cyan/10">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-mono text-xs text-ink-dim">{s.n}</div>
                <h3 className="mt-1 font-display text-xl text-paper">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
