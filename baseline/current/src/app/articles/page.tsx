import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "База знаний — статьи про ИИ-автоматизацию бизнеса" };

const articles = [
  { slug: "ii-agent-dlya-biznesa-2026", date: "2026-06-15", read: "12 мин", title: "ИИ-агент для бизнеса в 2026 году: что работает, что нет", desc: "Разбор 14 реальных кейсов внедрения ИИ-агентов в российском бизнесе. Считаем ROI, разбираем ошибки." },
  { slug: "avtomatizatsiya-prodazh-v-b2b", date: "2026-06-22", read: "9 мин", title: "Автоматизация b2b-продаж: от холодной базы до закрытия сделки", desc: "Как ИИ-агент находит лида, ведёт сделку в CRM, готовит КП и пишет follow-up — без участия менеджера." },
  { slug: "telegram-bot-kak-cms", date: "2026-06-29", read: "7 мин", title: "Telegram-бот как CMS: почему это проще, чем Tilda + WordPress", desc: "Сравниваем классические CMS и подход «управляй сайтом через мессенджер». Цифры, кейсы, чеклист." },
  { slug: "152-fz-ii-dlya-korporatsii", date: "2026-07-06", read: "11 мин", title: "152-ФЗ и ИИ: как легально внедрить ИИ-агента в корпорации", desc: "Правовые нюансы, on-premise, ФСТЭК, обезличивание. Чеклист для юристов и ИТ-директоров." },
  { slug: "gigachat-vs-yandexgpt-vs-hermes", date: "2026-07-13", read: "14 мин", title: "GigaChat vs YandexGPT vs Hermes Agent: сравнение для бизнеса", desc: "Бенчмарки на 17 типовых бизнес-задач. Цена, latency, качество, поддержка русского." },
  { slug: "vps-dlya-ii-agenta", date: "2026-07-20", read: "8 мин", title: "VPS для ИИ-агента: Timeweb, Hetzner, Aeza, Oracle — что выбрать", desc: "Сравнение провайдеров по цене, latency до РФ, API, on-premise возможностям." },
];

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <Badge>SEO-оптимизированные статьи</Badge>
              <h1 className="display mt-6 text-4xl text-paper md:text-6xl">База знаний Nemo Agent</h1>
              <p className="mt-4 text-lg text-ink-muted">Глубокие разборы по автоматизации бизнеса, ИИ-агентам, Telegram-ботам и инфраструктуре</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="group rounded-2xl border border-paper/10 bg-paper/[0.02] p-6 transition-all hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <div className="mb-3 flex items-center gap-3 text-xs text-ink-dim">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {a.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.read}</span>
                  </div>
                  <h2 className="font-display text-xl text-paper transition-colors group-hover:text-cyan">{a.title}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{a.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-cyan">Читать <ArrowRight className="h-3.5 w-3.5" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
