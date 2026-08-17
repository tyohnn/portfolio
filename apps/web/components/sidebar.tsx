import { site } from "@/content/site"
import { BrandIcon } from "@/components/brand-icon"

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-10 lg:flex lg:h-[calc(100svh-5rem)] lg:w-72 lg:shrink-0 lg:flex-col">
      <div className="flex items-center gap-3">
        <div
          aria-hidden
          className="flex size-12 items-center justify-center rounded-full bg-muted text-sm font-medium tracking-tight"
        >
          연
        </div>
        <div>
          <p className="text-base font-medium tracking-tight">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.handle}</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-snug text-pretty">{site.role}</p>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>{site.hero.line}</p>
        <p>
          <strong className="font-medium text-foreground">
            {site.hero.focusLabel}
          </strong>
          {` ${site.hero.focus}`}
        </p>
      </div>

      <nav aria-label="섹션" className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-muted-foreground no-underline transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 lg:mt-auto">
        <a
          href={site.github}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-sm no-underline transition-colors hover:bg-muted/60"
        >
          <BrandIcon name="github" className="size-4" />
          GitHub
        </a>
      </div>
    </aside>
  )
}
