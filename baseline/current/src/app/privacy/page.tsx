import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Nemo Agent",
  description: "Политика конфиденциальности Nemo Agent — какие данные собираем, как храним, как удалить.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="display text-4xl text-paper md:text-5xl">{"Политика конфиденциальности"}</h1>
            <div className="prose-nemo mt-10 space-y-6 text-ink-muted">
              <p className="text-sm text-ink-dim">Дата публикации: 2026-06-09 · Редакция: 1.0</p>
              <h2 className="font-display text-2xl text-paper">1. Какие данные мы собираем</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Адрес электронной почты и номер Telegram-аккаунта — для аутентификации</li>
                <li>Тексты сообщений, отправленных в Telegram-бот, — для обработки ИИ-агентом</li>
                <li>Платёжные данные (обрабатываются ЮKassa, мы их не храним)</li>
                <li>Технические данные: IP, User-Agent, cookie — для аналитики (Yandex.Metrika, Google Analytics 4)</li>
              </ul>
              <h2 className="font-display text-2xl text-paper mt-10">2. Цели обработки</h2>
              <p>Предоставление доступа к Услуге, обработка запросов ИИ-агентом, техническая поддержка, выставление счетов, улучшение качества сервиса.</p>
              <h2 className="font-display text-2xl text-paper mt-10">3. Хранение и защита</h2>
              <p>Данные хранятся в Supabase (PostgreSQL, Frankfurt) и Yandex Object Storage. Передача зашифрована (TLS 1.3). Доступ к данным имеют только уполномоченные сотрудники Исполнителя. Срок хранения — 3 года с момента последнего обращения Заказчика.</p>
              <h2 className="font-display text-2xl text-paper mt-10">4. Передача третьим лицам</h2>
              <p>Мы не продаём и не передаём данные третьим лицам, кроме: (а) платёжного шлюза ЮKassa — для обработки платежей; (б) LLM-провайдеров (GigaChat, YandexGPT) — для генерации ответов агентом; (в) государственных органов — по законному требованию.</p>
              <h2 className="font-display text-2xl text-paper mt-10">5. Права субъекта ПДн</h2>
              <p>Заказчик вправе: получить копию своих ПДн; потребовать их удаления; отозвать согласие на обработку. Для реализации прав — напишите на privacy@nemoagent.ru. Срок ответа — 30 календарных дней.</p>
              <h2 className="font-display text-2xl text-paper mt-10">6. Cookies</h2>
              <p>Мы используем cookie для аутентификации и аналитики. Вы можете отключить cookie в настройках браузера, однако это может ограничить функциональность личного кабинета.</p>
              <h2 className="font-display text-2xl text-paper mt-10">7. Контакты</h2>
              <p>Email: privacy@nemoagent.ru · Telegram: @nemo_agent_support</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
