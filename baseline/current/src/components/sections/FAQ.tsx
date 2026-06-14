import { Badge } from "@/components/ui/Badge";

const faqs = [
  { q: "А если я не разбираюсь в VPS и серверах?", a: "VPS поднимается автоматически. Вы получите Telegram-бота + личный кабинет. К серверу вообще не нужно подключаться — всё через бота." },
  { q: "Мои данные в безопасности?", a: "Агент работает на изолированном VPS, который принадлежит только вам. Мы не имеем доступа к вашим данным. Для Enterprise доступен on-premise (ваши серверы, 152-ФЗ)." },
  { q: "Какие модели ИИ поддерживаются?", a: "GigaChat-2-Max, YandexGPT, OpenAI/Anthropic/OpenRouter через ключ. Hermes Agent (MiniMax-M3) встроен. Свой ключ API подключается в один клик." },
  { q: "Можно ли подключить своего Telegram-бота?", a: "Да. Создайте бота через @BotFather, скопируйте токен, отправьте в @nemo_agent_bot. За 2 минуты ваш бот станет ИИ-агентом." },
  { q: "Что такое скиллы и как их ставить?", a: "Скилл = пакет команд + промт для конкретной ниши (Sales, HR, Marketing). В библиотеке 42 готовых. Установка: /install lead-hunter. Агент сам всё подключит и отчитается." },
  { q: "Что произойдёт, если я отменю подписку?", a: "VPS выключится через 7 дней, данные можно скачать. Никаких автопродлений, скрытых списаний." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <Badge>FAQ</Badge>
          <h2 className="display mt-6 text-4xl text-paper md:text-5xl">Частые вопросы</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-all open:border-cyan/30 open:bg-paper/[0.04]">
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-paper">
                {f.q}
                <span className="ml-4 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-paper/10 text-cyan transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
