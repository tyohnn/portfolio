export type Principle = {
  id: string
  label: string
  title: string
  description: string
  practices: string[]
  evidence: { label: string; href: string }[]
}

export const principles: Principle[] = [
  {
    id: "abstraction",
    label: "추상화",
    title: "비트겐슈타인 논리철학논고형 엔지니어",
    description:
      "데이터를 범용적으로 추상화하는 방법을 고민해 왔습니다. 노션 블록, 프레이머와 피그마 같은 데이터 모델을 리버스 엔지니어링으로 참고하고, 지식그래프와 데이터의 관계성·다형성을 어떻게 남길지 살펴왔습니다.",
    practices: ["Notion block", "Framer / Figma", "Knowledge graph", "Polymorphism"],
    evidence: [
      { label: "ssota note", href: "#ssota-note" },
      { label: "ssota", href: "#ssota" },
      { label: "데이터 모델 글", href: "/writing/data-model" },
    ],
  },
  {
    id: "domain",
    label: "도메인",
    title: "도메인 중심으로 사고하는 엔지니어",
    description:
      "도메인의 문제와 요구사항을 파악해 도메인 로직과 데이터 모델을 설계합니다. 헥사고날 구조와 Port/Adapter를 선호하며, 도메인이 외부 환경에 직접 의존하지 않게 합니다. Domain Driven Development와 Event Storming으로 프로젝트를 진행해 왔습니다.",
    practices: ["DDD", "Hexagonal", "Port / Adapter", "Event Storming"],
    evidence: [
      { label: "ssota", href: "#ssota" },
      { label: "데이터 모델 글", href: "/writing/data-model" },
    ],
  },
  {
    id: "context",
    label: "컨텍스트",
    title: "에이전트의 컨텍스트를 모국어처럼 이해하는 엔지니어",
    description:
      "2023년 컨텍스트 윈도우가 4096토큰일 때부터, 요구사항에 맞게 동작하는 에이전트를 설계했습니다. 툴 콜링, RAG, 지식그래프, 스킬, Progressive Disclosure, Compaction을 직접 적용하며, 여러 턴이 지나도 동작이 이탈하지 않도록 고민했습니다.",
    practices: ["Tool calling", "RAG", "Skills", "Compaction"],
    evidence: [
      { label: "Veclix", href: "#veclix" },
      { label: "ssota", href: "#ssota" },
    ],
  },
  {
    id: "agentic",
    label: "에이전트",
    title: "에이전트와 협업을 설계하는 엔지니어",
    description:
      "코드를 직접 작성하기보다 에이전트가 지켜야 하는 코드 규약을 설계합니다. PR을 하나하나 검토하기보다 에이전트의 결과물을 신뢰할 수 있는 작업 환경을 세팅합니다. 코드를 어떻게 작성할지보다 구조와 도메인, 시스템을 고민합니다.",
    practices: ["Code conventions", "Work environment", "Sandbox", "Test gates"],
    evidence: [
      { label: "ssota", href: "#ssota" },
      { label: "4단계 프레임워크 글", href: "/writing/agentic" },
    ],
  },
  {
    id: "boundaries",
    label: "보안",
    title: "서버 보안에 집착하는 엔지니어",
    description:
      "인가받지 않은 요청이 통과하지 못하도록, 시스템의 경계마다 경비병을 둡니다. 데이터 파이프라인에 defense in depth를 구축하고, 각 경계는 이전 단계의 출력을 믿지 않습니다. DB의 deny-all RLS는 그 최후의 보루입니다.",
    practices: ["Defense in depth", "Server authorization", "deny-all RLS"],
    evidence: [{ label: "ssota", href: "#ssota" }],
  },
]
