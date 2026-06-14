import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "О нас — Nemo Agent",
  description: "О Nemo Agent — миссия, стек, команда. Подписочный ИИ-агент на вашем VPS за 2 990 ₽/мес.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="display text-4xl text-paper md:text-5xl">{"О Nemo Agent"}</h1>
            <div className="prose-nemo mt-10 space-y-6 text-ink-muted">
              <p className="text-lg">Nemo Agent — это подписочный ИИ-агент, который работает на вашем VPS, общается через Telegram и решает задачи конкретно вашего бизнеса.</p>
              <h2 className="font-display text-2xl text-paper mt-10">Почему Nemo</h2>
              <p>Идея простая: ИИ-агент должен решать реальные задачи бизнеса, а не жить в демо-режиме. Nemo поднимается на вашем VPS за 10 минут, учится на ваших данных и становится частью команды — продавцом, маркетологом, аналитиком, саппортом.</p>
              <h2 className="font-display text-2xl text-paper mt-10">Технологический стек</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>LLM: GigaChat-2-Max, YandexGPT, Hermes Agent (MiniMax-M3)</li>
                <li>Backend: Python 3.12 + aiogram 3.x + FastAPI</li>
                <li>Vector DB: Qdrant (RAG на данных клиента)</li>
                <li>DB: Supabase (PostgreSQL)</li>
                <li>Инфраструктура: VPS (Timeweb, Hetzner, Aeza, Oracle Cloud)</li>
              </ul>
              <h2 className="font-display text-2xl text-paper mt-10">Команда</h2>
              <p>Команда — 1 человек + AI-агенты как штат (копирайтер, дизайнер, backend-разработчик, DevOps, support, SEO-аналитик). Основатель — Артём Нидопекин, эксперт по AI-агентам, разработчик на Python и TypeScript.</p>
              <h2 className="font-display text-2xl text-paper mt-10">Миссия</h2>
              <p>Сделать так, чтобы каждый предприниматель в России мог за 10 минут получить персонального ИИ-сотрудника за 2 990 ₽/мес. Без вендор-лока, на своих серверах, под своим контролем.</p>
              <h2 className="font-display text-2xl text-paper mt-10">Контакты</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email: hello@nemoagent.ru</li>
                <li>Telegram-бот: @nemo_agent_bot</li>
                <li>Канал: @nemo_agent_news</li>
                <li>GitHub: github.com/shekelstrong</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
