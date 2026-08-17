<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Guide

이 저장소는 **연주환(tyohnn)의 기술 포트폴리오**를 만들기 위한 작업 공간이다.
최종 산출물은 Next.js 기반 포트폴리오 사이트다. **타깃은 채용**이다
(투자 피치·개인 브랜드가 아님). 기획 문서는 `docs/`와 루트 `README.md`에 있고,
사이트는 `apps/web`이다.

## 목표

1. 특정 결과물보다 **여러 해 동안 반복해 온 기술적 질문과 판단의 변화**를
   중심에 둔다. 프로젝트와 연도는 그 판단을 검증하는 근거다.
2. **2026 → 2021** 연도별로 한 일 / 배운 것 / 고민한 것을 정리해,
   채용 독자가 일주일 만에 같은 판단을 재현할 수 있게 쓴다.
3. 아래 축을 연도를 가로지르는 기술 에세이로 드러낸다.
   - 서버단 데이터 모델 설계 (정합성, 다형성, 테넌시, SoR)
   - 보안·권한·감사 (아는 것만, 추측 금지)
   - 개발 워크플로우 경험 (문서, 리뷰, 스프린트, 하네스)
   - 에이전틱 워크플로우 설계 (에이전트가 읽고 쓰는 SSOT, 게이트, 스킬)
4. 사용자 회고를 1차 원천으로 삼고, 노션·깃허브·코드로 교차 확인한다.
5. **모르는 사실은 지어내지 않고 사용자에게 묻는다.**
6. 확정된 문장은 `apps/web/content`로 옮기고, 기획되지 않은 마케팅 문구를 구현에서 만들지 않는다.

## 작업 순서

```
사용자 회고 덤프
  → 노션 / GitHub / 로컬 코드 교차확인
  → docs/years, docs/themes, docs/gaps 갱신
  → 사용자 확인·보완
  → (이후) Next.js 사이트
```

페이지 기획은 루트 `README.md`가 SSOT다. 사이트는 `apps/web`이다.

## 원천 우선순위

1. **이 대화에서 사용자가 직접 말한 회고** — 의도·고민·한계의 SSOT
2. **코드와 커밋** (`~/projects/ssota`, `ssota-canvas`/`ssota-archive` 등)
3. **GitHub 레포 메타** (`tyohnn/*`, `ssota-labs/*`)
4. **Notion 설계/회고 문서** — 맥락 보강. 날짜가 회고와 어긋나면 회고를 우선하고 `docs/gaps.md`에 적는다.

공개 사이트에 올릴 문장은 1이 확인된 것만 쓴다. 2~4는 "근거"로만 붙인다.

## 넣지 말 것

- 가족 재정, 대출, 개인회생, 월세 등 사적 생존 서사
- 확인되지 않은 숫자(사용자 수, 매출, "80건" 등) — 사용자가 공개하겠다고 하기 전
- 다른 사람 명의의 발표/약력을 내 경력처럼 쓰기
- 보안 취약점 PoC, 시크릿, `.env`
- 실패한 삶을 전시하는 톤. 기술 판단의 한계는 쓰되, 자책 서사는 쓰지 않는다.

## 문서 맵

| 경로 | 역할 |
| --- | --- |
| `README.md` | 포트폴리오 페이지 기획 SSOT |
| `docs/README.md` | 문서 인덱스 |
| `docs/years/20XX.md` | 연도별 1차 정리. 2026이 가장 두껍고, 나머지는 stub + 질문 |
| `docs/themes/` | 연도를 가로지르는 기술 테마 |
| `docs/sources.md` | 사용한 자료와 링크 |
| `docs/gaps.md` | 사용자에게 물어야 할 것 |
| `docs/recommendations.md` | 포폴에 넣으면 좋은 추가 소재 |

연도 문서 템플릿:

```
## 한 줄
## 프로젝트
## 한 일
## 배운 것
## 고민 / 한계
## 스택
## 근거
## 아직 모름
```

## 보이스

- 한국어. 1인칭("나는") 또는 담담한 기술 서술. 채용 면접에서 그대로 말할 수 있는 문장.
- 포트폴리오는 **판단의 기록**이다. "무엇을 만들었나"보다 "왜 그 모델을 골랐고, 어디서 깨졌나".
- 과장하지 않는다. 한계를 프로젝트의 일부로 적는다.
- 보안 서사 SSOT: 외부 입력은 신뢰하지 않는다 (Zod 등). 복잡한 RLS보다 **RLS deny-all을 마지막 잠금**으로 두고, 권한은 서버·미들웨어에서 처리한다 (defense in depth).
- 제품 계보: 초기 Sota → archive(note) → ssota는 **한 세대가 점점 분리된 것**. **anycraft는 계보 밖**.
- 역할 한 줄: **복잡계를 모델링하는 소프트웨어 엔지니어**. 영어 `Engineer`만
  두지 않는다.
- 히어로는 데이터 추상화, 관계·다형성, 사람/에이전트의 SSOT를 쉬운 말로
  묶는다. 문장 SSOT는 `docs/content/hero.md`.
- 채용 카드 문장은 `docs/content/cards.md`. 회고를 요약으로 버리지 않는다.

## 현재 상태 (2026-08-16)

- [x] 저장소 생성, 목표를 이 파일에 고정
- [x] 2026 회고 1차 정리
- [x] 서브에이전트로 ssota / archive / GitHub / Notion / 26 H2 교차확인 → 2026 2차
- [x] 2025–2021 stub와 질문 목록
- [x] 테마 에세이 초안 (데이터 모델, 에이전틱 워크플로우)
- [x] Next.js 사이트 IA / 디자인
- [x] 구현 v1 (`apps/web`)
- [ ] 사용자가 2026 문서를 읽고 빠진 회고를 이어서 쏟아냄

탐색은 서브에이전트에 맡긴다. 부모는 결과만 `docs/`에 반영한다.

다음 턴에서 사용자가 연도 회고를 더 주면, 해당 `docs/years/`와 `apps/web/content`를 함께 고친다.
