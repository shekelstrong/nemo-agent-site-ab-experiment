"use client"
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

const PRICE_PER_AGENT = 2990;
const PRICE_PER_K_REQ = 590; // за каждые 5 000 запросов сверх базового тарифа

const llms = [
  { id: "gigachat-lite", name: "GigaChat Lite", desc: "Бесплатно, базовое качество", fee: 0 },
  { id: "gigachat-pro", name: "GigaChat Pro + Hermes", desc: "Топ для русского языка", fee: 990 },
  { id: "all", name: "Все LLM (Pro + YandexGPT + Hermes)", desc: "Максимум гибкости", fee: 1990 },
];

export function PricingCalculator() {
  const [agents, setAgents] = useState(1);
  const [requests, setRequests] = useState(5); // в тысячах
  const [llm, setLlm] = useState("gigachat-pro");

  const total = useMemo(() => {
    const base = agents * PRICE_PER_AGENT;
    const overBase = Math.max(0, requests - 5) / 5 * PRICE_PER_K_REQ;
    const llmFee = llms.find((l) => l.id === llm)?.fee ?? 0;
    return base + overBase + llmFee;
  }, [agents, requests, llm]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <Badge>Калькулятор</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-5xl">
            Соберите свой тариф за <span className="text-gradient-cyan">10 секунд</span>
          </h2>
        </div>
        <div className="grid gap-6 rounded-3xl border border-paper/10 bg-paper/[0.02] p-8 md:grid-cols-2">
          {/* Контролы */}
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-medium text-paper">Количество агентов</label>
                <span className="font-mono text-2xl text-cyan">{agents}</span>
              </div>
              <input
                type="range" min={1} max={10} value={agents}
                onChange={(e) => setAgents(Number(e.target.value))}
                className="w-full accent-cyan"
              />
              <div className="mt-1 flex justify-between text-xs text-ink-dim">
                <span>1</span><span>5</span><span>10</span>
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-medium text-paper">Запросов в месяц</label>
                <span className="font-mono text-2xl text-cyan">{(requests * 1000).toLocaleString("ru-RU")}</span>
              </div>
              <input
                type="range" min={1} max={100} step={1} value={requests}
                onChange={(e) => setRequests(Number(e.target.value))}
                className="w-full accent-cyan"
              />
              <div className="mt-1 flex justify-between text-xs text-ink-dim">
                <span>1К</span><span>50К</span><span>100К</span>
              </div>
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-paper">LLM-стек</label>
              <div className="space-y-2">
                {llms.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLlm(l.id)}
                    className={`w-full rounded-xl border p-3 text-left transition-all ${
                      llm === l.id ? "border-cyan/40 bg-cyan/10" : "border-paper/10 bg-paper/[0.02] hover:border-paper/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-paper">{l.name}</span>
                      <span className="font-mono text-sm text-cyan">{l.fee === 0 ? "бесплатно" : `+${l.fee} ₽/мес`}</span>
                    </div>
                    <div className="mt-1 text-xs text-ink-muted">{l.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Итог */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-ink-dim">Ваша цена</div>
              <div className="mt-2 font-display text-5xl text-paper">
                {total.toLocaleString("ru-RU")} ₽
              </div>
              <div className="mt-1 text-sm text-ink-muted">в месяц</div>
              <div className="mt-6 space-y-2 text-sm text-ink-muted">
                <div className="flex justify-between"><span>Агенты × {agents}</span><span className="text-paper">{(agents * PRICE_PER_AGENT).toLocaleString("ru-RU")} ₽</span></div>
                {requests > 5 && (
                  <div className="flex justify-between"><span>Запросы сверх 5К</span><span className="text-paper">{Math.round((requests - 5) / 5 * PRICE_PER_K_REQ).toLocaleString("ru-RU")} ₽</span></div>
                )}
                {llms.find((l) => l.id === llm)?.fee! > 0 && (
                  <div className="flex justify-between"><span>LLM-стек</span><span className="text-paper">{llms.find((l) => l.id === llm)?.fee} ₽</span></div>
                )}
              </div>
            </div>
            <div className="mt-8">
              <ButtonLink href={`https://t.me/nemo_agent_bot?start=calc_${total}`} external variant="primary" size="lg" className="w-full">
                <Sparkles className="h-4 w-4" />
                Подключить за {total.toLocaleString("ru-RU")} ₽
              </ButtonLink>
              <p className="mt-3 text-center text-xs text-ink-dim">7 дней бесплатно · Отмена в любой момент</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
