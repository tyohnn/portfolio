import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Typeset } from "@/components/typeset"
import { essays, getEssay } from "@/content/essays"

type WritingPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.id }))
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params
  const essay = getEssay(slug)

  if (!essay) {
    return { title: "글을 찾을 수 없습니다 · 연주환" }
  }

  return {
    title: `${essay.title} · 연주환`,
    description: essay.hook,
  }
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params
  const essay = getEssay(slug)

  if (!essay) {
    notFound()
  }

  const essayIndex = essays.findIndex((item) => item.id === essay.id)
  const previousEssay = essays[essayIndex - 1]
  const nextEssay = essays[essayIndex + 1]

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        글 본문으로 건너뛰기
      </a>

      <nav aria-label="상위 경로" className="mb-12 sm:mb-16">
        <Link
          href="/#writing"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Writing
        </Link>
      </nav>

      <header className="max-w-3xl border-b border-border pb-10 sm:pb-12">
        <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-muted-foreground uppercase">
          Technical essay
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-lora)] text-3xl leading-tight font-medium tracking-tight text-pretty sm:text-4xl">
          {essay.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {essay.hook}
        </p>
        <p className="mt-6 font-[family-name:var(--font-geist-mono)] text-xs leading-relaxed text-muted-foreground">
          {essay.evidence}
          {essay.source ? (
            <>
              {" · "}
              <a
                href={essay.source.href}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {essay.source.label}
              </a>
            </>
          ) : null}
        </p>
      </header>

      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,42rem)_14rem] lg:gap-16">
        <article id="article" className="min-w-0 scroll-mt-8">
          <Typeset preset="docs" className="max-w-none">
            <p className="lead">{essay.body}</p>

            {essay.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <blockquote>
              {essay.closing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
          </Typeset>
        </article>

        <aside className="border-t border-border pt-6 lg:sticky lg:top-10 lg:border-t-0 lg:pt-0">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-widest text-muted-foreground uppercase">
            이 글에서
          </p>
          <ol className="mt-3 space-y-2.5 text-sm leading-snug">
            {essay.sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex gap-2 text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  <span className="font-[family-name:var(--font-geist-mono)] text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              </li>
            ))}
          </ol>

          <p className="mt-8 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-widest text-muted-foreground uppercase">
            관련 프로젝트
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {essay.projects.map((project) => (
              <li key={project}>
                <Link href={`/${project}`} className="no-underline">
                  <Badge
                    variant="outline"
                    className="h-6 rounded-full px-2 text-[11px] font-normal"
                  >
                    {project.slice(1)}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <nav
        aria-label="다른 글"
        className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
      >
        {previousEssay ? (
          <Link
            href={`/writing/${previousEssay.id}`}
            className="group flex min-h-20 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm no-underline transition-colors hover:bg-muted/50"
          >
            <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
            <span>
              <span className="block text-xs text-muted-foreground">
                이전 글
              </span>
              <span className="mt-1 block leading-snug">
                {previousEssay.title}
              </span>
            </span>
          </Link>
        ) : (
          <span aria-hidden />
        )}

        {nextEssay ? (
          <Link
            href={`/writing/${nextEssay.id}`}
            className="group flex min-h-20 items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-right text-sm no-underline transition-colors hover:bg-muted/50"
          >
            <span className="ms-auto">
              <span className="block text-xs text-muted-foreground">
                다음 글
              </span>
              <span className="mt-1 block leading-snug">{nextEssay.title}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : null}
      </nav>
    </div>
  )
}
