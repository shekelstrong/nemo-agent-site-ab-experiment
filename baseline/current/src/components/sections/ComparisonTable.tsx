import { Badge } from "@/components/ui/Badge";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Свой VPS, изоляция данных", nemo: "✅", others: "❌" },
  { feature: "Telegram-бот как интерфейс", nemo: "✅", others: "✅" },
  { feature: "Установка скиллов одной командой", nemo: "✅ /install", others: "❌" },
  { feature: "Подключение LLM в 1 клик", nemo: "✅", others: "⚠️ только свой API" },
  { feature: "On-Premise для 152-ФЗ", nemo: "✅", others: "❌" },
  { feature: "RAG на своих данных", nemo: "✅", others: "⚠️ только Pro" },
  { feature: "Цена за старт", nemo: "0 ₽/мес", others: "5 990 ₽/мес" },
  { feature: "Без вендор-лока", nemo: "✅ open source Hermes", others: "❌" },
  { feature: "Русский LLM-стек", nemo: "✅ GigaChat + YandexGPT", others: "❌" },
  { feature: "API для интеграций", nemo: "✅ REST + Webhooks", others: "⚠️ ограничено" },
];

export function ComparisonTable() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <Badge>Сравнение</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-5xl">
            Nemo vs <span className="text-gradient-cyan">типичные no-code-боты</span>
          </h2>
          <p className="mt-4 text-ink-muted">SaleBot, Chat2Desk, BotHelp, Make, n8n — у каждого свои плюсы, но...</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-paper/10 bg-paper/[0.02]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-paper/10 bg-paper/[0.03]">
              <tr>
                <th className="px-4 py-4 text-xs font-mono uppercase tracking-wider text-ink-dim">Возможность</th>
                <th className="px-4 py-4 text-cyan">Nemo Agent</th>
                <th className="px-4 py-4 text-ink-dim">No-code бот-платформы</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-paper/5 last:border-0">
                  <td className="px-4 py-3.5 text-paper">{r.feature}</td>
                  <td className="px-4 py-3.5 text-cyan">{r.nemo}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-xs text-ink-dim">* «No-code бот-платформы» — обобщение для SaleBot, Chat2Desk, BotHelp и аналогов. Каждая имеет свои сильные стороны, но все проигрывают Nemo в гибкости, цене и on-premise.</p>
      </div>
    </section>
  );
}
