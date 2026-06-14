# Changelog

Все значимые изменения в этом проекте документируются в этом файле.

## [0.3.0] - 2026-06-09 — V3 лендинг

### Added
- 6 юр. страниц: `/offer`, `/privacy`, `/terms`, `/about`, `/contact`, кастомный 404
- Контент 2 полноценных SEO-статей в `content/articles/*.mdx` с автогенерацией `/articles/<slug>`
- JSON-LD structured data: Organization + Product + WebSite
- Yandex.Metrika + Google Analytics 4 через `NEXT_PUBLIC_*` env (lazy)
- Cookie-баннер (минимальный, localStorage, ссылка на /privacy)
- Sticky CTA в правом нижнем углу (появляется после 600px скролла, dismissable)
- Интерактивный калькулятор тарифов (useState: агенты, запросы, LLM-стек)
- Секция сравнения Nemo vs no-code платформы (10 строк таблицы)
- `.env.example` для конфигурации аналитики и Supabase
- RevealOnScroll компонент (motion-based, не подключен повсеместно — точечно)
- `sitemap.ts` теперь индексирует все статьи из `content/articles/`

### Changed
- `layout.tsx` подключает Analytics + JsonLd + CookieBanner
- `page.tsx` включает все новые секции в правильном порядке
- `Footer` ссылки теперь ведут на реальные страницы (не 404)

### Fixed
- 5 страниц из Footer давали 404 — теперь 200
- 6 страниц статей давали 404 — теперь 200 (только для 2 опубликованных)

## [0.2.0] - 2026-06-09 — V2 брендинг

### Added
- 7 секций: Hero, SkillsLibrary, HowItWorks, Pricing, FAQ, Footer, Header
- Брендинг: midnight ocean + cyan tide + paper cream + amber + coral
- Шрифты: Fraunces (display) + Inter (body) + JetBrains Mono (code) + Instrument Serif (quotes)
- 5 страниц: /, /pricing, /articles, /404, sitemap.xml, robots.txt
- llms.txt для LLM-индексации
- TypeScript strict, ESLint, build green (8 страниц, 105KB First Load JS)

## [0.1.0] - 2026-06-09 — V1 скаффолд

### Added
- Next.js 15 App Router + Tailwind v4 + Motion
- Базовая структура проекта, .gitignore, README, package.json
