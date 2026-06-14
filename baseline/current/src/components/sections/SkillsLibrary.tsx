import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FilterChip } from "@/components/ui/FilterChip";
import { Bot, ShoppingCart, Headphones, Users, Megaphone, BarChart3, FileText, Wrench } from "lucide-react";

const categories = [
  { id: "all", label: "Все", icon: Bot, count: 42 },
  { id: "sales", label: "Продажи", icon: ShoppingCart, count: 8 },
  { id: "support", label: "Поддержка", icon: Headphones, count: 7 },
  { id: "hr", label: "HR", icon: Users, count: 6 },
  { id: "marketing", label: "Маркетинг", icon: Megaphone, count: 5 },
  { id: "analytics", label: "Аналитика", icon: BarChart3, count: 6 },
  { id: "content", label: "Контент", icon: FileText, count: 4 },
  { id: "devops", label: "DevTools", icon: Wrench, count: 6 },
];

const skills = [
  { name: "Lead Hunter", cat: "sales", desc: "Ищет лидов в открытых источниках, обогащает, квалифицирует" },
  { name: "Cold Outreach", cat: "sales", desc: "Генерирует персонализированные первые касания" },
  { name: "Pipeline Tracker", cat: "sales", desc: "Ведёт сделки, напоминает о follow-up" },
  { name: "Quote Builder", cat: "sales", desc: "Собирает КП под клиента из вашей базы" },
  { name: "CRM Sync", cat: "sales", desc: "Двухсторонняя синхронизация с Bitrix24/AmoCRM" },
  { name: "Meeting Booker", cat: "sales", desc: "Автоматически назначает встречи в календаре" },
  { name: "Objection Handler", cat: "sales", desc: "Библиотека ответов на типовые возражения" },
  { name: "Win-Loss Analyst", cat: "sales", desc: "Разбирает причины проигранных сделок" },
  { name: "First-Line Support", cat: "support", desc: "Отвечает на типовые вопросы 24/7" },
  { name: "Ticket Router", cat: "support", desc: "Распределяет тикеты по приоритету и командам" },
  { name: "Knowledge Base Search", cat: "support", desc: "RAG-поиск по вашей базе знаний" },
  { name: "SLA Watcher", cat: "support", desc: "Следит за SLA, эскалирует просрочку" },
  { name: "Sentiment Detector", cat: "support", desc: "Определяет негатив, уведомляет менеджера" },
  { name: "Macro Composer", cat: "support", desc: "Предлагает макросы на основе контекста" },
  { name: "CSAT Collector", cat: "support", desc: "Собирает оценки после закрытия" },
  { name: "Resume Screener", cat: "hr", desc: "Скорит резюме по вашим критериям" },
  { name: "Interview Scheduler", cat: "hr", desc: "Назначает интервью, шлёт напоминания" },
  { name: "Onboarding Kit", cat: "hr", desc: "Генерирует welcome-пакет для новичка" },
  { name: "1:1 Prep", cat: "hr", desc: "Готовит повестку 1-на-1 из истории встреч" },
  { name: "Pulse Survey", cat: "hr", desc: "Запускает анонимные опросы, агрегирует" },
  { name: "OKR Tracker", cat: "hr", desc: "Следит за прогрессом целей команды" },
  { name: "Ad Copy Generator", cat: "marketing", desc: "Генерирует тексты под площадку и ЦА" },
  { name: "UTM Builder", cat: "marketing", desc: "Создаёт UTM-метки по конвенции" },
  { name: "Social Calendar", cat: "marketing", desc: "Планирует посты по контент-плану" },
  { name: "Competitor Watcher", cat: "marketing", desc: "Следит за активностью конкурентов" },
  { name: "AB Test Planner", cat: "marketing", desc: "Планирует эксперименты, считает статзначимость" },
  { name: "KPI Dashboard", cat: "analytics", desc: "Стягивает данные из GA4/Yandex.Metrika" },
  { name: "Cohort Analyst", cat: "analytics", desc: "Считает когорты, retention, LTV" },
  { name: "Forecast Engine", cat: "analytics", desc: "Прогноз выручки на горизонте" },
  { name: "Anomaly Detector", cat: "analytics", desc: "Алертит при аномалиях в метриках" },
  { name: "Report Builder", cat: "analytics", desc: "Генерирует PDF/Excel отчёт по шаблону" },
  { name: "Data Warehouse SQL", cat: "analytics", desc: "Переводит вопросы на русском в SQL" },
  { name: "Article Writer", cat: "content", desc: "SEO-оптимизированные статьи 2000+ слов" },
  { name: "SMM Captioner", cat: "content", desc: "Подписи под посты + хэштеги" },
  { name: "Newsletter Drafter", cat: "content", desc: "Черновик email-рассылки по теме" },
  { name: "Video Script", cat: "content", desc: "Сценарий Reels/Shorts с таймкодами" },
  { name: "Git PR Reviewer", cat: "devops", desc: "Код-ревью Pull Request в стиле senior" },
  { name: "CI/CD Watcher", cat: "devops", desc: "Парсит логи пайплайна, ищет причины фейлов" },
  { name: "Infra Cost Optimizer", cat: "devops", desc: "Рекомендации по оптимизации расходов" },
  { name: "Log Triage", cat: "devops", desc: "Группирует алерты, убирает дубль-шум" },
  { name: "Security Scan Summary", cat: "devops", desc: "Сводка по результатам сканеров" },
  { name: "On-Call Helper", cat: "devops", desc: "Runbook + эскалация для дежурного" },
];

const catMap: Record<string, (typeof categories)[0]["id"]> = Object.fromEntries(categories.map((c) => [c.label, c.id]));

export function SkillsLibrary() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <Badge>Библиотека · 42 скилла · 10 MCP</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-6xl">
            Скиллы, плагины и MCP
            <br />
            <span className="text-gradient-cyan">для любой ниши</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Установите одной командой в Telegram-боте. Или попросите агента —
            он сам подберёт и поставит нужные.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <FilterChip key={c.id} icon={c.icon}>{c.label} · {c.count}</FilterChip>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((s) => (
            <Card key={s.name} className="group">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan">{s.cat}</div>
                <div className="h-2 w-2 rounded-full bg-cyan/40 transition-colors group-hover:bg-cyan"></div>
              </div>
              <h3 className="font-display text-lg text-paper">{s.name}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-dim">
                <span className="rounded-md border border-paper/10 bg-paper/5 px-1.5 py-0.5 font-mono">/install</span>
                <span>одной командой</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#how" className="text-sm text-ink-muted hover:text-cyan">
            Как установить скилл →
          </a>
        </div>
      </div>
    </section>
  );
}
