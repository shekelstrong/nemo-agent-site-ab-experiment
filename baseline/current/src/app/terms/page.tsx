import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Условия использования — Nemo Agent",
  description: "Условия использования Nemo Agent — технические требования, допустимое использование, ответственность.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="display text-4xl text-paper md:text-5xl">{"Условия использования"}</h1>
            <div className="prose-nemo mt-10 space-y-6 text-ink-muted">
              <p className="text-sm text-ink-dim">Дата публикации: 2026-06-09 · Редакция: 1.0</p>
              <h2 className="font-display text-2xl text-paper">1. Описание сервиса</h2>
              <p>Nemo Agent — программный продукт, предоставляющий доступ к ИИ-агенту на базе Hermes Agent через Telegram-бот и личный кабинет. Агент работает на изолированном VPS, принадлежащем Заказчику, и может решать задачи в нишах: продажи, поддержка, маркетинг, HR, аналитика, контент, DevTools.</p>
              <h2 className="font-display text-2xl text-paper mt-10">2. Технические требования</h2>
              <p>Для использования необходимы: аккаунт в Telegram; стабильный интернет (≥5 Мбит/с); актуальная версия браузера для личного кабинета. VPS Заказчика должен соответствовать минимальным системным требованиям (2 vCPU, 4 GB RAM, 40 GB SSD).</p>
              <h2 className="font-display text-2xl text-paper mt-10">3. Допустимое использование</h2>
              <p>Заказчик обязуется не использовать Услугу для: рассылки спама (без согласия получателя); мошеннических действий; нарушения прав третьих лиц; обхода санкционного законодательства; генерации контента, нарушающего законодательство РФ.</p>
              <h2 className="font-display text-2xl text-paper mt-10">4. Интеллектуальная собственность</h2>
              <p>Все права на программный код Nemo Agent, торговый знак «Nemo Agent», логотипы и контент сайта принадлежат Исполнителю. Заказчику предоставляется ограниченная неисключительная лицензия на использование в течение срока подписки.</p>
              <h2 className="font-display text-2xl text-paper mt-10">5. Ограничение ответственности</h2>
              <p>Исполнитель не несёт ответственности за: (а) убытки от использования ИИ-агента (агент может ошибаться); (б) перерывы в работе VPS-провайдера; (в) качество ответов LLM-моделей; (г) действия третьих лиц (Telegram, LLM-провайдеры).</p>
              <h2 className="font-display text-2xl text-paper mt-10">6. Изменения условий</h2>
              <p>Исполнитель вправе изменять настоящие Условия с уведомлением Заказчика за 14 дней до вступления изменений в силу. Продолжение использования Услуги после указанного срока означает согласие с новой редакцией.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
