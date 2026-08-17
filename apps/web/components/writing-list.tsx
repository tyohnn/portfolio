import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { essays } from "@/content/essays"

export function WritingList() {
  return (
    <section id="writing" className="scroll-mt-8">
      <h2 className="mb-1 text-lg font-medium tracking-tight">Writing</h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        프로젝트에서 나온 판단을 회고와 설계 문서로 교차 확인해 긴 글로
        정리했습니다.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {essays.map((essay) => (
          <Card
            key={essay.id}
            id={essay.id}
            className="h-full rounded-2xl bg-card py-5 text-sm ring-foreground/8"
          >
            <CardHeader className="gap-2">
              <CardTitle className="text-base text-pretty">
                <Link
                  href={`/writing/${essay.id}`}
                  className="transition-colors hover:text-foreground/70"
                >
                  {essay.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-pretty">
                {essay.hook}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {essay.body}
              </p>
              <div className="mt-auto flex items-end justify-between gap-3">
                <ul className="flex flex-wrap gap-1.5">
                  {essay.projects.map((href) => (
                    <li key={href}>
                      <a href={href} className="no-underline">
                        <Badge
                          variant="outline"
                          className="h-6 rounded-full px-2 text-[11px] font-normal"
                        >
                          {href.slice(1)}
                        </Badge>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/writing/${essay.id}`}
                  aria-label={`${essay.title} 읽기`}
                  className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  읽기
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
