export const questions = [
  {
    id: "record",
    title: "무엇을 하나의 데이터로 남길 것인가",
    intro:
      "현실의 업무를 어떤 레코드로 남길지 먼저 정한다. 캔버스의 블록, 네이버 검색 순위, 회사 도메인의 노드와 엣지, 기간별 재무 계정은 모양은 다르지만 모두 “무엇을 하나의 사실로 저장할 것인가”라는 질문에서 시작했다.",
    answer:
      "데이터 모델은 UI의 저장 형식이 아니라, 사람과 소프트웨어가 같은 대상을 다시 조회하고 판단할 수 있게 하는 계약이어야 한다. 외부 데이터도 서비스에서 반복해 쓸 수 있도록 일관된 정형 기록으로 바꿔야 한다.",
    evidence: [
      { href: "#ssota-note", label: "ssota note" },
      { href: "#catch-blog", label: "캐치블로그" },
      { href: "#holiday-investment", label: "holiday-investment" },
    ],
  },
  {
    id: "polymorphism",
    title: "관계와 다형성을 어디까지 열 것인가",
    intro:
      "여러 형태의 데이터를 하나의 인터페이스로 다루고 관계로 연결하는 데 관심이 있다. 동시에 모든 도메인에 범용 그래프가 필요한 것은 아니라는 것도 배웠다.",
    answer:
      "다형성과 관계를 기능으로 먼저 열지 않고, 실제 도메인에서 변하는 축을 확인한 뒤 연다. 열린 캔버스에서는 다형성이 제품의 핵심이었지만, 법무·회계처럼 관계가 정해진 업무에서는 타입과 연결 규칙을 서버에서 닫는 편이 낫다.",
    evidence: [
      { href: "#fynd", label: "Fynd" },
      { href: "#ssota-note", label: "ssota note" },
      { href: "#ssota", label: "ssota" },
    ],
  },
  {
    id: "trust",
    title: "사람과 에이전트가 같은 기록을 어떻게 신뢰할 것인가",
    intro:
      "에이전트가 안정적으로 일하려면 프롬프트보다 먼저 읽을 데이터, 호출할 도구, 변경할 수 있는 범위가 있어야 한다. 결정적인 기본 로직은 제품이 제공하고, 에이전트는 예외와 여러 단계를 잇는 작업을 맡는다.",
    answer:
      "에이전트를 기록 시스템 밖의 자동화로 두지 않는다. 사람과 같은 SoR을 읽되, 도구 스키마와 서버 권한으로 쓸 수 있는 범위를 제한하고, 게이트와 이력으로 결과를 다시 검토할 수 있게 한다.",
    evidence: [
      { href: "#veclix", label: "Veclix" },
      { href: "#ssota", label: "ssota" },
    ],
  },
] as const
