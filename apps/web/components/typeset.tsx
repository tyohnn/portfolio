import { cn } from "@workspace/ui/lib/utils"

export function Typeset({
  children,
  className,
  preset = "docs",
}: {
  children: React.ReactNode
  className?: string
  preset?: "docs" | "card"
}) {
  return (
    <div
      className={cn(
        "typeset",
        preset === "docs" ? "typeset-docs max-w-[33em]" : "typeset-card",
        className
      )}
    >
      {children}
    </div>
  )
}
