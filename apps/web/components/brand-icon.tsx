import { cn } from "@workspace/ui/lib/utils"

const byName: Record<string, string[]> = {
  TypeScript: ["typescript"],
  "Node.js": ["nodejs"],
  "Next.js": ["nextjs"],
  Zod: ["zod"],
  Python: ["python"],
  FastAPI: ["fastapi"],
  NestJS: ["nestjs"],
  Django: ["django"],
  React: ["react"],
  "React Flow": ["reactflow"],
  Tailwind: ["tailwindcss"],
  Vue: ["vue"],
  Nuxt: ["nuxt"],
  "React Native": ["react"],
  PostgreSQL: ["postgresql"],
  Postgres: ["postgresql"],
  MySQL: ["mysql"],
  Supabase: ["supabase"],
  Drizzle: ["drizzle"],
  Neo4j: ["neo4j"],
  Redis: ["redis"],
  Vercel: ["vercel"],
  "Vercel / Serverless": ["vercel"],
  Serverless: ["vercel"],
  "Message Queue": ["supabase"],
  Docker: ["docker"],
  Playwright: ["playwright"],
  SEO: ["naver"],
  Railway: ["railway"],
  "AWS S3": ["amazons3"],
  EC2: ["amazonec2"],
  EB: ["aws"],
  MCP: ["mcp"],
  "OpenAI function calling": ["openai"],
  "AI SDK": ["vercel"],
  "Vercel AI SDK": ["vercel"],
  Langchain: ["langchain"],
  LangChain: ["langchain"],
}

export function iconsForStack(name: string) {
  return byName[name] ?? []
}

export function BrandIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <img
      src={`/brands/${name}.svg`}
      alt=""
      width={14}
      height={14}
      className={cn("block size-3.5 shrink-0 object-contain", className)}
    />
  )
}
