import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="grid min-h-[80vh] place-items-center pt-16">
        <div className="text-center px-6">
          <div className="font-mono text-sm text-cyan">404</div>
          <h1 className="display mt-4 text-5xl text-paper md:text-7xl">Глубина не та</h1>
          <p className="mt-4 text-lg text-ink-muted max-w-md mx-auto">Запрошенная страница уплыла на дно. Поднимемся обратно на поверхность?</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 h-11 px-6 text-[15px] rounded-xl bg-cyan text-midnight hover:bg-cyan-bright shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              На главную
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 h-11 px-6 text-[15px] rounded-xl bg-paper/10 text-paper border border-paper/20 hover:bg-paper/15">
              Тарифы
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
