import { PrincipleCards } from "@/components/principle-cards"
import { ProjectList } from "@/components/project-list"
import { Sidebar } from "@/components/sidebar"
import { StackCards } from "@/components/stack-cards"
import { WritingList } from "@/components/writing-list"

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <a
        href="#principles"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        본문으로 건너뛰기
      </a>
      <div className="lg:flex lg:items-start lg:gap-12">
        <Sidebar />
        <main className="mt-12 min-w-0 flex-1 space-y-16 lg:mt-0">
          <PrincipleCards />
          <StackCards />
          <ProjectList />
          <WritingList />
        </main>
      </div>
    </div>
  )
}
