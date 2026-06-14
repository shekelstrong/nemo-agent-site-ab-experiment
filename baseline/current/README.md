# Nemo Agent Landing

Лендинг продукта Nemo Agent — подписочный ИИ-агент на базе Hermes Agent с Telegram-ботом, авто-VPS-выдачей, AI-CMS и библиотекой скиллов.

## Stack

- **Next.js 15** (App Router, RSC)
- **Tailwind CSS v4** (CSS-first, `@theme` директивы)
- **Motion** (Framer Motion v12)
- **Velite** (markdown content для `/articles`)
- **TypeScript strict**
- Хостинг: **Layero** (Yandex Cloud CDN)

## Brand

- **Nemo Agent** — концепция «Глубина и навигация»
- Палитра: midnight `#0A1628` + cyan `#06B6D4` + paper `#FDFCF8` + amber `#F59E0B` + coral `#F43F5E`
- Шрифты: Fraunces (display) + Inter (body) + JetBrains Mono (code) + Instrument Serif (quotes)

## Development

```bash
npm install
npm run dev
```

## Deploy

Деплой ручной: push в main → Layero импортирует из GitHub → auto-build → preview URL.
CI/CD не настроен намеренно (требование: ручной деплой).

## Связанные репо

- `shekelstrong/nemo-agent-tgbot` — основной production-бот
- `shekelstrong/nemo-agent-cms` — AI-CMS бот
- `shekelstrong/nemo-team-docs` — база знаний проекта
