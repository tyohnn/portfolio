import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Bot,
  Cloud,
  Database,
  Layout,
  Server,
} from "lucide-react"

import { BrandIcon } from "@/components/brand-icon"
import { stacks } from "@/content/stacks"

const icons = {
  backend: Server,
  frontend: Layout,
  database: Database,
  infra: Cloud,
  agent: Bot,
} as const

export function StackCards() {
  return (
    <section id="skills" className="scroll-mt-8">
      <h2 className="mb-4 text-lg font-medium tracking-tight">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stacks.map((group) => {
          const Icon = icons[group.id as keyof typeof icons] ?? Server
          const items = group.items
          return (
            <Card
              key={group.id}
              className="rounded-2xl bg-card py-5 text-sm ring-foreground/8"
            >
              <CardHeader className="gap-1">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="size-4 text-muted-foreground" aria-hidden />
                  {group.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((item) => {
                    const badge = (
                      <Badge
                        variant="outline"
                        title={item.evidence}
                        className="h-7 gap-1.5 rounded-full px-2.5 text-xs font-normal"
                      >
                        {item.icons?.map((icon) => (
                          <BrandIcon key={icon} name={icon} />
                        ))}
                        {item.name}
                      </Badge>
                    )
                    return (
                      <li key={item.name}>
                        {item.href ? (
                          <a href={item.href} className="no-underline">
                            {badge}
                          </a>
                        ) : (
                          badge
                        )}
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
