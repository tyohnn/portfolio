import { ProjectStory } from "@/components/project-story"
import { earlier, featured, type Project } from "@/content/years"

function groupYear(project: Project) {
  return project.year.slice(0, 4)
}

function byRecency(a: Project, b: Project) {
  if (a.featured !== b.featured) return a.featured ? -1 : 1
  return 0
}

const timeline = Object.entries(
  [...featured, ...earlier].reduce<Record<string, Project[]>>((groups, project) => {
    const year = groupYear(project)
    groups[year] ??= []
    groups[year].push(project)
    return groups
  }, {})
)
  .sort(([a], [b]) => Number(b) - Number(a))
  .map(([year, projects]) => ({
    year,
    projects: [...projects].sort(byRecency),
  }))

export function ProjectList() {
  return (
    <section id="projects" className="scroll-mt-8">
      <h2 className="mb-6 text-lg font-medium tracking-tight">Projects</h2>
      <ol className="space-y-10">
        {timeline.map(({ year, projects }) => (
          <li
            key={year}
            className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-x-6"
          >
            <p className="sticky top-8 self-start pt-1 font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-muted-foreground">
              {year}
            </p>
            <div className="relative space-y-4 border-s border-border ps-5 sm:ps-6">
              <span
                aria-hidden
                className="absolute top-2.5 -start-[5px] size-2.5 rounded-full bg-foreground/80 ring-4 ring-background"
              />
              {projects.map((project) => (
                <ProjectStory
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
