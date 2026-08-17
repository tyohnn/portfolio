export type Grade = "최상" | "상" | "중" | "하"

export type StackItem = {
  name: string
  grade: Grade
  evidence: string
  href?: string
  icons?: string[]
}

export type StackGroup = {
  id: string
  label: string
  subtitle: string
  items: StackItem[]
}

export const stacks: StackGroup[] = [
  {
    id: "backend",
    label: "Languages & Backend",
    subtitle: "API · 도메인 로직 · 검증",
    items: [
      { name: "TypeScript", grade: "최상", evidence: "ssota 서버·포트 전 구간", href: "#ssota", icons: ["typescript"] },
      { name: "Node.js", grade: "최상", evidence: "ssota 서버·포트 전 구간", href: "#ssota", icons: ["nodejs"] },
      { name: "Next.js", grade: "최상", evidence: "ssota, archive, catch-blog", href: "#ssota", icons: ["nextjs"] },
      { name: "NestJS", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["nestjs"] },
      { name: "Python", grade: "상", evidence: "Veclix, Fynd, holiday-investment", href: "#holiday-investment", icons: ["python"] },
      { name: "FastAPI", grade: "상", evidence: "Veclix 툴 계약", href: "#veclix", icons: ["fastapi"] },
      { name: "Django", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["django"] },
      { name: "Zod", grade: "최상", evidence: "외부 입력 거절", href: "#ssota", icons: ["zod"] },
    ],
  },
  {
    id: "frontend",
    label: "Frameworks & Frontend",
    subtitle: "UI · 캔버스 · 앱",
    items: [
      { name: "React", grade: "최상", evidence: "ssota, archive, catch-blog", href: "#ssota-note", icons: ["react"] },
      { name: "Next.js", grade: "최상", evidence: "App Router", href: "#ssota", icons: ["nextjs"] },
      { name: "Tailwind", grade: "중", evidence: "UI", icons: ["tailwindcss"] },
      { name: "Vue", grade: "중", evidence: "2023 초 버디파이", href: "#buddyfi", icons: ["vue"] },
      { name: "Nuxt", grade: "하", evidence: "사용 경험", icons: ["nuxt"] },
      { name: "React Native", grade: "하", evidence: "사용 경험", icons: ["react"] },
    ],
  },
  {
    id: "database",
    label: "Databases",
    subtitle: "SoR · 스키마 · 제약",
    items: [
      { name: "PostgreSQL", grade: "최상", evidence: "ssota, catch-blog, holiday-investment", href: "#ssota", icons: ["postgresql"] },
      { name: "MySQL", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["mysql"] },
      { name: "Supabase", grade: "상", evidence: "RLS deny-all, Auth, Functions", href: "#ssota", icons: ["supabase"] },
      { name: "Drizzle", grade: "상", evidence: "ssota 그래프 스키마", href: "#ssota", icons: ["drizzle"] },
      { name: "Neo4j", grade: "중", evidence: "Fynd", href: "#fynd", icons: ["neo4j"] },
      { name: "Redis", grade: "하", evidence: "사용 경험. catch-blog 큐는 PGMQ", icons: ["redis"] },
    ],
  },
  {
    id: "infra",
    label: "Tools & Infra",
    subtitle: "배치 · 크롤 · 배포",
    items: [
      { name: "Vercel", grade: "상", evidence: "catch-blog maxDuration 5분", href: "#catch-blog", icons: ["vercel"] },
      { name: "Message Queue", grade: "상", evidence: "크론·큐 워커", href: "#catch-blog", icons: ["supabase"] },
      { name: "Docker", grade: "중", evidence: "로컬 스택", href: "#holiday-investment", icons: ["docker"] },
      { name: "Playwright", grade: "중", evidence: "ssota e2e", href: "#ssota", icons: ["playwright"] },
      { name: "SEO", grade: "중", evidence: "네이버 랭크/키워드", href: "#catch-blog", icons: ["naver"] },
      { name: "Railway", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["railway"] },
      { name: "AWS S3", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["amazons3"] },
      { name: "EC2", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["amazonec2"] },
      { name: "EB", grade: "하", evidence: "사용 경험. 본문 카드는 아직 없음", icons: ["aws"] },
    ],
  },
  {
    id: "agent",
    label: "Agent",
    subtitle: "도구 계약 · 하네스",
    items: [
      { name: "MCP", grade: "상", evidence: "ssota 스코프 툴", href: "#ssota", icons: ["mcp"] },
      { name: "AI SDK", grade: "상", evidence: "ssota 에이전트 루프", href: "#ssota", icons: ["vercel"] },
      { name: "Langchain", grade: "중", evidence: "Veclix, Fynd", href: "#veclix", icons: ["langchain"] },
      { name: "RAG", grade: "중", evidence: "Fynd 지식그래프", href: "#fynd" },
      { name: "Neo4j", grade: "중", evidence: "Fynd", href: "#fynd", icons: ["neo4j"] },
    ],
  },
]
