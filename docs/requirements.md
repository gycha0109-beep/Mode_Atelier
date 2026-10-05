# Requirements

| ID | 요구사항 | 구현 위치 | 상태 |
|---|---|---|---|
| R-001 | Shopify 기반 반응형 스토어프런트 | layout, assets, sections | 구현 |
| R-002 | 패션 브랜드형 홈 | index + hero/collection/lookbook/editorial/newsletter | 구현 |
| R-003 | 상품 상세/variant/장바구니 담기 | main-product | 구현 |
| R-004 | 컬렉션/정렬/pagination | main-collection | 구현 |
| R-005 | 장바구니 수정/삭제/checkout 진입 | main-cart | 구현 |
| R-006 | 검색 | main-search | 구현 |
| R-007 | 일반 콘텐츠/404 | page, 404 | 구현 |
| R-008 | KO/EN/JA locale | locales | 구현 |
| R-009 | 관리자에서 재배치 가능한 구조 | JSON templates + sections | 구현 |
| R-010 | 글로벌 결제 요구사항 정의 | payment-matrix | 설계 완료 |
| R-011 | 실제 PG 활성화 | Shopify Admin / merchant 계약 | 외부 의존 |
| R-012 | Markets/통화/가격 정책 | localization-matrix | 설계 완료 |
| R-013 | 실제 도메인 연결 | Shopify Admin / DNS | 외부 의존 |
| R-014 | QA/런칭/인수인계 | docs | 구현 |
| R-015 | Storefront filtering | facets + collection/search | 구현 |
| R-016 | 관련상품 추천 | Product Recommendations API | 구현 |
| R-017 | 패션 lookbook | lookbook-grid + page.lookbook | 구현 |
| R-018 | synthetic 상품 입력 | fixtures + catalog-seed | 구현 |
| R-019 | 합성 상품 이미지/메타필드 입력 | development store + fixtures | VERIFIED: 원본 이미지 9개, 정의 4개, PDP 샘플 검증 |
| R-020 | Predictive search | predictive-search section + Ajax API | 구현 |
| R-021 | Social sharing metadata | social-meta-tags | 구현 |
| R-022 | 최신 customer accounts 진입 | shopify-account component | 구현 |
| R-023 | Contact / collection index | page.contact + list-collections | 구현 |
| R-024 | Ajax add-to-cart + live cart count | theme.js + cart notification | 구현 |
| R-025 | Theme editor design controls / FAQ | settings + page.faq | 구현 |
| R-026 | Journal / article content | blog + article templates | 구현 |
| R-027 | Coming soon / private access | password layout + template | 구현 |

## 완료 정의

코드 존재만으로 완료 처리하지 않는다. 각 기능은 Theme Check, development store 수동 smoke test, 모바일/데스크톱 검증 중 적용 가능한 검증을 통과해야 release-ready로 승격한다.

## Release 001 실제 검증 상태

R-001~009, R-015~018, R-020~027은 실제 draft smoke 범위에서 VERIFIED다. 예외 범위: R-004 pagination은 여섯 상품으로 페이지 크기(최소 8)를 넘지 않아 IMPLEMENTED_UNVERIFIED이며, R-020 query-suggestion 콘텐츠는 sampled 응답에 없었다. FAQ/Lookbook 실제 기본 page HTML은 검증했고 custom draft 템플릿은 Live Horizon을 보존하기 위해 미할당이다.

R-012는 US/KR/JP Markets와 EN/KO/JA 게시 및 실제 KRW 전환을 검증했다. USD/JPY와 merchant eligibility는 외부 의존이다. R-010은 결제 매트릭스와 Bogus 테스트 승인/거절 증거를 포함한다. R-011/R-013 실제 PG/DNS는 BLOCKED_EXTERNAL이다. R-014의 QA/evidence/handover는 [Release 001](../evidence/release-001/summary.md)에 완료 범위와 미검증 항목을 기록했다. production go-live는 [launch checklist](launch-checklist.md)의 별도 gate다.
