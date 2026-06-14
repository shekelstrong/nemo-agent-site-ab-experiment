"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("nemo-cookies")) setVisible(true);
  }, []);
  if (!visible) return null;
  const accept = () => { localStorage.setItem("nemo-cookies", "1"); setVisible(false); };
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-midnight/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-muted">
          Мы используем cookie для аутентификации и аналитики.{" "}
          <Link href="/privacy" className="text-cyan underline-offset-2 hover:underline">Подробнее</Link>
        </p>
        <button onClick={accept} className="rounded-lg bg-cyan px-4 py-1.5 text-sm font-medium text-midnight hover:bg-cyan-bright">
          Принять
        </button>
      </div>
    </div>
  );
}
