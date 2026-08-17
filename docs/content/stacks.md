# 스택 인벤토리

상단은 **직군** 카드다. 칩에 등급을 작게 붙인다.

등급: `최상` / `상` / `중` / `하`. 퍼센트·별점은 쓰지 않는다.

- 최상: 본문에서 판단과 한계까지 말할 수 있다
- 상: 프로덕션에서 반복해 썼다
- 중: 프로젝트 근거가 있는 사용
- 하: 썼지만 본문 근거가 짧다

## Backend

| 칩 | 등급 | 근거 |
| --- | --- | --- |
| TypeScript | 최상 | ssota 서버·포트 전 구간 |
| Node.js | 최상 | ssota 서버·포트 전 구간 |
| Next.js | 최상 | ssota, archive, catch-blog |
| NestJS | 하 | 사용자 추가. 본문 카드는 아직 없음 |
| Python | 상 | Veclix, Fynd, holiday-investment ingest |
| FastAPI | 상 | Veclix-BE 툴 계약 |
| Django | 하 | 사용자 추가. 본문 카드는 아직 없음 |
| Zod | 최상 | 외부 입력 거절 |

## Frameworks & Frontend

| 칩 | 등급 | 근거 |
| --- | --- | --- |
| React | 최상 | ssota, archive, catch-blog |
| Next.js | 최상 | App Router |
| Tailwind | 중 | UI |
| Vue | 중 | 2023 초 버디파이 |
| Nuxt | 하 | 사용자 추가 |
| React Native | 하 | 사용자 추가 (RealMate-RN은 팀 레포) |

## DB

| 칩 | 등급 | 근거 |
| --- | --- | --- |
| PostgreSQL | 최상 | ssota, catch-blog, holiday-investment |
| MySQL | 하 | 사용자 추가. 본문 카드는 아직 없음 |
| Supabase | 상 | RLS deny-all, Auth, Edge Functions |
| Drizzle | 상 | ssota 그래프 스키마 |
| Neo4j | 중 | Fynd |
| Redis | 하 | 사용자 추가. catch-blog 큐는 PGMQ |

## Infra / 데이터 작업

| 칩 | 등급 | 근거 |
| --- | --- | --- |
| Vercel | 상 | catch-blog maxDuration 5분 |
| Message Queue | 상 | catch-blog 크론·큐 워커 |
| Docker | 중 | 사용자 추가, 로컬 스택 |
| Playwright | 중 | ssota e2e |
| SEO | 중 | catch-blog 네이버 랭크/키워드 |
| Railway | 하 | 사용자 추가. 본문 카드는 아직 없음 |
| AWS S3 | 하 | 사용자 추가. 본문 카드는 아직 없음 |
| EC2 | 하 | 사용자 추가. E2C로 적힌 항목 |
| EB | 하 | 사용자 추가. Elastic Beanstalk |

## Agent / 계약

| 칩 | 등급 | 근거 |
| --- | --- | --- |
| MCP | 상 | ssota 스코프 툴 |
| AI SDK | 상 | ssota 에이전트 루프. 로고는 Vercel만 |
| Langchain | 중 | Veclix, Fynd |
| RAG | 중 | Fynd 지식그래프. 브랜드 로고 없음 |
| Neo4j | 중 | Fynd. Databases 카드와 동일 |
