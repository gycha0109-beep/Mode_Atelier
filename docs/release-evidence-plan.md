# Release Evidence Plan

포트폴리오에서 "구현했다"가 아니라 "검증했다"를 보여주기 위한 증거 규격이다.

## release-001 필수 증거

| ID | 화면/결과 | 뷰포트 | 합격 조건 |
|---|---|---|---|
| E-001 | Home | Desktop 1440 | hero / collection / lookbook / story / newsletter 정상 |
| E-002 | Home | Mobile 390 | overflow 없음, nav 정상 |
| E-003 | Collection | Desktop | filter/sort + product grid 정상 |
| E-004 | PDP | Desktop | variant 변경 시 가격/CTA 갱신 |
| E-005 | PDP | Mobile | gallery/info single column |
| E-006 | Cart | Desktop | quantity/update/remove |
| E-007 | Search | Desktop | query + filter |
| E-008 | Locale KO | Desktop | 핵심 UI 한국어 |
| E-009 | Locale EN | Desktop | 핵심 UI 영어 |
| E-010 | Locale JA | Desktop | 핵심 UI 일본어 |
| E-011 | Market selector | Desktop | country/context 변경 가능 |
| E-012 | Checkout entry | Desktop | 실제 Shopify checkout 진입 |
| E-013 | Theme Check | CI | PASS |
| E-014 | Accessibility smoke | Keyboard | 메뉴/필터/form focus 확인 |

## 저장 구조

```text
evidence/release-001/
  desktop/
  mobile/
  localization/
  commerce/
  qa/
  summary.md
```

## summary.md 필수 필드

- commit SHA
- Shopify theme ID 또는 development theme 식별자
- 검증 날짜
- 테스트한 market/language
- PASS/FAIL
- known limitations
- payment provider 상태
- 실제 결제를 수행했는지 여부

## 금지

- development store가 없는 상태에서 checkout PASS 스크린샷을 합성하지 않는다.
- PG가 승인되지 않았는데 payment integration complete로 표시하지 않는다.
- placeholder 화면을 production evidence로 사용하지 않는다.
