"use client"
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("nemo-cta-dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-2 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => {
          setDismissed(true);
          if (typeof window !== "undefined") window.sessionStorage.setItem("nemo-cta-dismissed", "1");
        }}
        aria-label="Закрыть"
        className="rounded-full border border-paper/10 bg-midnight/80 p-2 text-ink-muted backdrop-blur-md transition-colors hover:border-paper/20 hover:text-ink"
      >
        <X className="h-3.5 w-3.5" />
      </button>
      <a
        href="https://t.me/nemo_agent_bot?start=sticky"
        target="_blank"
        rel="noopener"
        className="group inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-midnight shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:bg-cyan-bright hover:shadow-[0_0_50px_rgba(6,182,212,0.7)]"
      >
        <MessageCircle className="h-4 w-4" />
        Открыть в Telegram
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}
