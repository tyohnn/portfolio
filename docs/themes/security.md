# 테마: 서버 권한과 defense in depth

> 채용 포폴의 보안 축. 사용자 회고(2026-08-16) + ssota 코드.

## 한 줄

외부 입력은 받지 않는다. 복잡한 RLS로 정책을 흩뿌리지 않고, **RLS deny-all을 마지막 자물쇠**로 둔 뒤 권한은 서버와 미들웨어에서 결정한다.

## 판단

1. **신뢰 경계는 서버다.** 클라이언트·에이전트·MCP 호출은 모두 외부 요청이다. Zod(또는 동등한 스키마)로 형태를 먼저 닫고, 그다음 권한을 본다.
2. **RLS는 정책 엔진이 아니라 실패 시 안전망이다.** 세밀한 RLS는 우회·중복·디버깅 비용을 만든다. 테이블은 `USING (false)`로 잠그고, 서버만 admin 커넥션으로 연다 (`[SEC-01]`).
3. **미들웨어 / 포트가 책임 단위다.** org 멤버십, teamspace, `account_id` 파티션, 엣지 domain/range는 `GraphWritePort`와 MCP `resolveProjectAccess`에 모은다. UI는 CRUD를 직접 하지 않는다 (`[GRAPH-02]`).

## 코드 근거 (ssota)

- RLS deny-all: `supabase/migrations/20250611000004_enable_rls_deny_all.sql` 및 pages 등 후속
- 쓰기 포트: `packages/adapter-postgres/src/ports/graph-write-port.ts` (org mismatch, domain/range, end-user writable row)
- 노드 속성: use-case + Zod `validateNodeProperties`. 엣지 속성은 아직 pass-through — 한계로 적는다
- MCP: 툴마다 `orgSlug`+`teamspaceSlug`, 멤버십 재검증

## 같은 판단의 다른 해

- 2023 Veclix: 툴마다 `api_key_required` / `api_owner`를 계약에 넣음. 서버 권한 층의 초기형. RLS 철학은 아직 없음.
- 2025 크날 MadeAct: public true가 auth RLS를 우회한 메모. “RLS만 믿으면 뚫린다”의 현장 근거가 될 수 있음. 내 기여 범위는 미확인.
- 2026 holiday-cfo (포폴 미포함): 에이전트는 영수증을 읽고 잔액은 CLI 불변식. 같은 “모델/에이전트를 신뢰하지 않는다”.

## 채용 면접에서 말할 한 단락 (초안)

> 에이전트가 SoR을 쓰게 되면 클라이언트 RLS에 정책을 흩뿌리는 게 더 위험하다. 나는 입력을 Zod로 거절하고, 권한은 서버 포트와 미들웨어에서만 통과시키고, Postgres RLS는 전부 deny로 잠가 두었다. 실수가 나더라도 데이터가 새지 않게 하는 게 마지막 층이다.

## 아직 모름

- 이 문장을 대표 에세이로 둘지, 2026 카드 안의 한 절로 둘지.
- 크날 RLS 메모를 내 이야기로 쓸지.
