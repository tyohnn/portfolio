# Principles

Hero 바로 아래, Skills보다 앞에 둔다. 기술이나 방법론의 선호를 나열하지 않고
어떤 실패를 막기 위해 선택하는지 판단 기준으로 설명한다.

표시 순서: 추상화 → 도메인 → 컨텍스트 → 에이전트 → 보안.

## 한 줄

복잡한 도메인을 신뢰할 수 있는 기록으로 만들고, 변경을 안전하게 반복할 수 있는
구조를 선호합니다.

## 1. 비트겐슈타인 논리철학논고형 엔지니어

라벨: 추상화

데이터를 범용적으로 추상화하는 방법을 고민해 왔습니다. 노션 블록, 프레이머와
피그마 같은 데이터 모델을 리버스 엔지니어링으로 참고하고, 지식그래프와 데이터의 관계성·다형성을
어떻게 남길지 살펴왔습니다.

- Notion block
- Framer / Figma
- Knowledge graph
- Polymorphism
- 근거: ssota note, ssota, 데이터 모델 글

## 2. 도메인 중심으로 사고하는 엔지니어

라벨: 도메인

도메인의 문제와 요구사항을 파악해 도메인 로직과 데이터 모델을 설계합니다.
헥사고날 구조와 Port/Adapter를 선호하며, 도메인이 외부 환경에 직접 의존하지
않게 합니다. Domain Driven Development와 Event Storming으로 프로젝트를
진행해 왔습니다.

- DDD
- Hexagonal
- Port / Adapter
- Event Storming
- 근거: ssota, 데이터 모델 글

## 3. 에이전트의 컨텍스트를 모국어처럼 이해하는 엔지니어

라벨: 컨텍스트

2023년 컨텍스트 윈도우가 4096토큰일 때부터, 요구사항에 맞게 동작하는
에이전트를 설계했습니다. 툴 콜링, RAG, 지식그래프, 스킬, Progressive
Disclosure, Compaction을 직접 적용하며, 여러 턴이 지나도 동작이 이탈하지
않도록 고민했습니다.

- Tool calling
- RAG
- Skills
- Compaction
- 근거: Veclix, ssota

## 4. 에이전트와 협업을 설계하는 엔지니어

라벨: 에이전트

코드를 직접 작성하기보다 에이전트가 지켜야 하는 코드 규약을 설계합니다.
PR을 하나하나 검토하기보다 에이전트의 결과물을 신뢰할 수 있는 작업 환경을
세팅합니다. 코드를 어떻게 작성할지보다 구조와 도메인, 시스템을 고민합니다.

- Code conventions
- Work environment
- Sandbox
- Test gates
- 근거: ssota, 4단계 프레임워크 글

## 5. 서버 보안에 집착하는 엔지니어

라벨: 보안

인가받지 않은 요청이 통과하지 못하도록, 시스템의 경계마다 경비병을 둡니다.
데이터 파이프라인에 defense in depth를 구축하고, 각 경계는 이전
단계의 출력을 믿지 않습니다. DB의 deny-all RLS는 그 최후의 보루입니다.

- Defense in depth
- Server authorization
- deny-all RLS
- 근거: ssota
