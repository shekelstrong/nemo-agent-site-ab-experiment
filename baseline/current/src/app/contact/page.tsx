import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Контакты — Nemo Agent",
  description: "Контакты Nemo Agent — Telegram, email, GitHub. Отвечаем за 24 часа.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="display text-4xl text-paper md:text-5xl">{"Контакты"}</h1>
            <div className="prose-nemo mt-10 space-y-6 text-ink-muted">
              <p>Свяжитесь с нами любым удобным способом. Отвечаем в течение 24 часов в рабочие дни.</p>
              <div className="grid gap-4 sm:grid-cols-2 mt-10">
                <a href="https://t.me/nemo_agent_bot" target="_blank" rel="noopener" className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all hover:border-cyan/30">
                  <div className="text-cyan font-mono text-xs uppercase tracking-wider">Telegram · Production-бот</div>
                  <div className="mt-1 text-paper text-lg">@nemo_agent_bot</div>
                  <div className="mt-1 text-sm text-ink-muted">Основной канал поддержки и продаж</div>
                </a>
                <a href="https://t.me/nemo_agent_news" target="_blank" rel="noopener" className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all hover:border-cyan/30">
                  <div className="text-cyan font-mono text-xs uppercase tracking-wider">Telegram · Канал</div>
                  <div className="mt-1 text-paper text-lg">@nemo_agent_news</div>
                  <div className="mt-1 text-sm text-ink-muted">Новости, кейсы, обновления</div>
                </a>
                <a href="mailto:hello@nemoagent.ru" className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all hover:border-cyan/30">
                  <div className="text-cyan font-mono text-xs uppercase tracking-wider">Email · General</div>
                  <div className="mt-1 text-paper text-lg">hello@nemoagent.ru</div>
                  <div className="mt-1 text-sm text-ink-muted">Общие вопросы, партнёрство</div>
                </a>
                <a href="mailto:offer@nemoagent.ru" className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all hover:border-cyan/30">
                  <div className="text-cyan font-mono text-xs uppercase tracking-wider">Email · Юр. вопросы</div>
                  <div className="mt-1 text-paper text-lg">offer@nemoagent.ru</div>
                  <div className="mt-1 text-sm text-ink-muted">Оферта, акты, документы</div>
                </a>
                <a href="https://github.com/shekelstrong" target="_blank" rel="noopener" className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all hover:border-cyan/30 sm:col-span-2">
                  <div className="text-cyan font-mono text-xs uppercase tracking-wider">GitHub</div>
                  <div className="mt-1 text-paper text-lg">github.com/shekelstrong</div>
                  <div className="mt-1 text-sm text-ink-muted">4 репозитория: landing, tgbot, cms, nemo-team-docs</div>
                </a>
              </div>
              <h2 className="font-display text-2xl text-paper mt-12">Юридический адрес</h2>
              <p>ИП Никопекин А.С. (в процессе регистрации). После регистрации ИП реквизиты будут обновлены в Оферте и на этой странице.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
