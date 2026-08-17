import { ExternalLink } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { BrandIcon, iconsForStack } from "@/components/brand-icon"
import { Typeset } from "@/components/typeset"
import { projectDetails } from "@/content/project-details"
import type { Project } from "@/content/years"

export function ProjectStory({ project }: { project: Project }) {
  const detail = projectDetails[project.id]

  return (
    <Card id={project.id} className="rounded-2xl py-5 text-sm ring-foreground/8">
      <CardHeader className="gap-2">
        {project.period ? (
          <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-muted-foreground">
            {project.period}
          </p>
        ) : null}
        <CardTitle className="flex flex-wrap items-center gap-2 text-base">
          {project.name}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub`}
              className="text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              <BrandIcon name="github" className="size-3.5" />
            </a>
          ) : null}
          {project.site ? (
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} 사이트`}
              className="text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-3.5" />
            </a>
          ) : null}
        </CardTitle>
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item}>
              <Badge
                variant="outline"
                className="h-6 gap-1 rounded-full px-2 text-[11px] font-normal"
              >
                {iconsForStack(item).map((icon) => (
                  <BrandIcon key={icon} name={icon} className="size-3" />
                ))}
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardContent>
        <section aria-labelledby={`${project.id}-overview`}>
          <h3
            id={`${project.id}-overview`}
            className="mb-2 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-widest text-muted-foreground uppercase"
          >
            개요
          </h3>
          <Typeset preset="card">
            {(detail?.overview ?? [project.lede]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Typeset>
          {detail?.references?.length ? (
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {detail.references.map((reference) => (
                <li key={reference.href}>
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground no-underline transition-colors hover:text-foreground"
                  >
                    {reference.label}
                    <ExternalLink className="size-3" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        {detail?.challenges.length ? (
          <section
            aria-labelledby={`${project.id}-challenges`}
            className="mt-6 border-t border-border pt-5"
          >
            <h3
              id={`${project.id}-challenges`}
              className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-widest text-muted-foreground uppercase"
            >
              기술적 도전
            </h3>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {detail.challenges.map((challenge, index) => (
                <li key={challenge.id}>
                  <a
                    href={`#${project.id}-${challenge.id}`}
                    className="flex gap-2 rounded-xl border border-border bg-muted/20 px-3 py-2.5 text-xs leading-relaxed no-underline transition-colors hover:bg-muted/50"
                  >
                    <span className="font-[family-name:var(--font-geist-mono)] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{challenge.title}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-7 space-y-9">
              {detail.challenges.map((challenge, index) => (
                <article
                  key={challenge.id}
                  id={`${project.id}-${challenge.id}`}
                  className="scroll-mt-8"
                >
                  <header className="mb-4 flex items-start gap-3">
                    <span className="pt-0.5 font-[family-name:var(--font-geist-mono)] text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-[family-name:var(--font-lora)] text-base leading-snug font-medium text-pretty">
                      {challenge.title}
                    </h4>
                  </header>
                  <dl className="space-y-4 border-s border-border ps-4 sm:ps-5">
                    <div>
                      <dt className="mb-1 text-xs font-medium">문제</dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">
                        {challenge.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-xs font-medium">해결</dt>
                      <dd className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {challenge.approach.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </dd>
                    </div>
                    {challenge.learning ? (
                      <div>
                        <dt className="mb-1 text-xs font-medium">배움</dt>
                        <dd className="text-sm leading-relaxed text-muted-foreground">
                          {challenge.learning}
                        </dd>
                      </div>
                    ) : null}
                    {challenge.limitation ? (
                      <div>
                        <dt className="mb-1 text-xs font-medium">한계</dt>
                        <dd className="text-sm leading-relaxed text-muted-foreground">
                          {challenge.limitation}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </CardContent>
    </Card>
  )
}
