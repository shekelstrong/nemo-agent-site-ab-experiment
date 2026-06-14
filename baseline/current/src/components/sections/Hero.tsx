import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronRight, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="group inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-sm text-cyan backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan"></span>
            </span>
            <span className="font-medium">Hermes Agent × Telegram × VPS</span>
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>

          {/* Heading */}
          <h1 className="display mt-8 max-w-5xl text-5xl text-paper md:text-7xl lg:text-[88px]">
            ИИ-агент, который<br />
            <span className="text-gradient-cyan">понимает ваш бизнес</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">
            Подписочный агент на базе Hermes, который работает на вашем VPS,
            общается через Telegram и решает задачи конкретно вашей ниши:
            продажи, поддержка, маркетинг, аналитика.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/#pricing" size="lg" variant="primary">
              <Sparkles className="h-4 w-4" />
              Подключить за 60 секунд
            </ButtonLink>
            <ButtonLink href="https://t.me/nemo_agent_bot" size="lg" variant="secondary" external>
              <Zap className="h-4 w-4" />
              Попробовать в Telegram
            </ButtonLink>
          </div>

          {/* Sub-copy */}
          <p className="mt-5 text-sm text-ink-dim">
            Без привязки карты · 7 дней бесплатно · Настройка через Telegram-бот
          </p>

          {/* Periscope visual */}
          <div className="relative mt-20 w-full max-w-5xl">
            <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.15),transparent_60%)] blur-2xl"></div>
            <div className="relative rounded-3xl border border-paper/10 bg-midnight-elev/50 p-2 shadow-2xl backdrop-blur-xl">
              <div className="mesh-ocean grain relative aspect-[16/10] overflow-hidden rounded-2xl">
                {/* Depth rings */}
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10"></div>
                <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15"></div>
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20"></div>

                {/* Periscope */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="h-40 w-2 rounded-full bg-gradient-to-b from-cyan-bright via-cyan to-cyan-deep"></div>
                    <div className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse-dot"></div>
                  </div>
                </div>

                {/* Bubbles */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-cyan-bright/40 animate-bubble"
                    style={{
                      left: `${(i * 8.3) % 100}%`,
                      bottom: "0",
                      animationDelay: `${i * 0.6}s`,
                      animationDuration: `${6 + (i % 4)}s`,
                    }}
                  />
                ))}

                {/* Mock chat UI overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 md:bottom-8 md:left-8">
                  <div className="ml-auto max-w-md rounded-2xl rounded-tr-sm border border-paper/10 bg-paper/5 px-4 py-2.5 text-sm text-paper backdrop-blur-md">
                    Найди 20 лидов в нише доставки еды в СПб
                  </div>
                  <div className="max-w-xl rounded-2xl rounded-tl-sm border border-cyan/20 bg-cyan/10 px-4 py-3 text-sm text-ink backdrop-blur-md">
                    <div className="mb-1 text-xs font-medium text-cyan">Nemo Agent · Sales</div>
                    <div className="text-paper">Анализирую рынок СПб. Нашёл 47 потенциальных лидов в HoReCa. Запускаю парсер Instagram + 2ГИС…</div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-paper/5">
                      <div className="depth-gauge h-full w-1/3 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
