import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  read: string;
  tags: string[];
}

async function loadArticle(slug: string): Promise<{ meta: ArticleMeta; html: string } | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "articles", `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf-8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) return null;
    const [, fm, body] = fmMatch;
    const meta: ArticleMeta = { slug, title: "", description: "", date: "", read: "", tags: [] };
    for (const line of fm.split("\n")) {
      const m = line.match(/^(\w+):\s*"?(.+?)"?$/);
      if (!m) continue;
      const [, k, v] = m;
      if (k === "tags") meta.tags = v.split(",").map((t) => t.trim().replace(/"/g, ""));
      else if (k === "title" || k === "description" || k === "date" || k === "read") {
        (meta as any)[k] = v.replace(/"/g, "");
      }
    }
    const html = body
      .replace(/^# (.+)$/gm, '<h2 class="display mt-12 text-2xl text-paper">$1</h2>')
      .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl text-paper mt-10">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl text-paper mt-8">$1</h3>')
      .replace(/^> (.+)$/gm, '<blockquote class="border-l-2 border-cyan pl-4 italic text-ink-muted my-4">$1</blockquote>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-paper font-semibold">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="rounded bg-paper/10 px-1.5 py-0.5 font-mono text-sm text-cyan">$1</code>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-ink-muted">$1</li>')
      .split("\n\n")
      .map((p) => p.startsWith("<") ? p : `<p class="text-ink-muted leading-relaxed">${p}</p>`)
      .join("\n");
    return { meta, html };
  } catch {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), "content", "articles");
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await loadArticle(slug);
  if (!a) return { title: "Статья не найдена" };
  return {
    title: a.meta.title,
    description: a.meta.description,
    openGraph: { title: a.meta.title, description: a.meta.description, type: "article", publishedTime: a.meta.date },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await loadArticle(slug);
  if (!article) {
    return (
      <>
        <Header />
        <main className="grid min-h-[60vh] place-items-center pt-16">
          <div className="text-center px-6">
            <h1 className="display text-4xl text-paper">Статья не найдена</h1>
            <Link href="/articles" className="mt-6 inline-block text-cyan">← Все статьи</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link href="/articles" className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-cyan">
              <ArrowLeft className="h-3.5 w-3.5" /> Все статьи
            </Link>
            <div className="mt-8 mb-3 flex items-center gap-3 text-xs text-ink-dim">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.meta.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.meta.read}</span>
            </div>
            <h1 className="display text-4xl text-paper md:text-5xl">{article.meta.title}</h1>
            <p className="mt-4 text-lg text-ink-muted">{article.meta.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.meta.tags.map((t) => <Badge key={t}>{t}</Badge>)}
            </div>
            <div className="mt-12 space-y-5" dangerouslySetInnerHTML={{ __html: article.html }} />
            <div className="mt-16 rounded-2xl border border-cyan/20 bg-cyan/5 p-8">
              <h3 className="font-display text-2xl text-paper">Хотите внедрить ИИ-агента?</h3>
              <p className="mt-2 text-ink-muted">Напишите в Telegram-бот — установим базового агента бесплатно на 7 дней.</p>
              <a href="https://t.me/nemo_agent_bot?start=article" target="_blank" rel="noopener" className="mt-4 inline-flex items-center justify-center font-medium h-11 px-6 rounded-xl bg-cyan text-midnight hover:bg-cyan-bright">
                Попробовать в Telegram →
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
