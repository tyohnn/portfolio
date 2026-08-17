import { readFile } from "node:fs/promises"
import path from "node:path"

export type EssayHeading = {
  id: string
  title: string
  level: 2 | 3
}

export function headingId(title: string) {
  return title
    .replace(/[*`]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\w가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function readEssayArticle(id: string) {
  try {
    return await readFile(
      path.join(process.cwd(), "content/writing", `${id}.md`),
      "utf8"
    )
  } catch {
    return null
  }
}

export function getMarkdownOutline(markdown: string): EssayHeading[] {
  return [...markdown.matchAll(/^(#{2,3}) (.+)$/gm)].map((match, index) => {
    const title = match[2]?.replace(/\*\*/g, "").trim() ?? ""
    const level = match[1] === "###" ? 3 : 2

    return {
      id: headingId(title) || `section-${index + 1}`,
      title,
      level,
    }
  })
}
