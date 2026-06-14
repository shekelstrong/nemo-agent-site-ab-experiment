import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Nemo Agent — ИИ-агент в Telegram для вашего бизнеса", template: "%s | Nemo Agent" },
  description: "Подписочный ИИ-агент на базе Hermes Agent. Работает на вашем VPS, решает задачи бизнеса в Telegram. Продажи, поддержка, маркетинг, аналитика.",
  keywords: ["ИИ-агент", "Telegram-бот", "автоматизация бизнеса", "Hermes Agent", "Nemo Agent"],
  authors: [{ name: "Nemo Agent" }],
  openGraph: { type: "website", locale: "ru_RU", siteName: "Nemo Agent", title: "Nemo Agent — Глубина и навигация для вашего бизнеса", description: "ИИ-агент на вашем VPS, общается через Telegram", images: ["/og-image.svg"] },
  twitter: { card: "summary_large_image", title: "Nemo Agent", description: "ИИ-агент в Telegram для бизнеса", images: ["/og-image.svg"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/icon-192.png" },
  metadataBase: new URL("https://nemoagent.ru"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${fraunces.variable} ${jbMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="mesh-ocean min-h-screen antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
