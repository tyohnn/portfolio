import Link from "next/link"
import {
  ArrowUpRight,
  Blocks,
  Bot,
  Layers,
  Share2,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { principles } from "@/content/principles"

const icons = {
  abstraction: Share2,
  domain: Blocks,
  context: Layers,
  agentic: Bot,
  boundaries: ShieldCheck,
} as const

export function PrincipleCards() {
  return (
    <section id="principles" className="scroll-mt-8">
      <h2 className="mb-6 text-lg font-medium tracking-tight">Principles</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = icons[principle.id as keyof typeof icons] ?? Blocks

          return (
            <Card
              key={principle.id}
              className="h-full rounded-2xl bg-card py-5 text-sm ring-foreground/8"
            >
              <CardHeader className="gap-3">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon className="size-4" aria-hidden />
                    <span className="text-xs">{principle.label}</span>
                  </span>
                  <span className="font-[family-name:var(--font-geist-mono)] text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <CardTitle className="text-base text-pretty">
                  {principle.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>

                <ul className="flex flex-wrap gap-1.5">
                  {principle.practices.map((practice) => (
                    <li key={practice}>
                      <Badge
                        variant="outline"
                        className="h-6 rounded-full px-2 text-[11px] font-normal"
                      >
                        {practice}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                  {principle.evidence.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground no-underline transition-colors hover:text-foreground"
                      >
                        {item.label}
                        <ArrowUpRight className="size-3" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
