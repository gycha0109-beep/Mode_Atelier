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
| R-019 | 실제 상품 이미지/메타필드 입력 | development store | 다음 단계 |
| R-020 | Predictive search | predictive-search section + Ajax API | 구현 |
| R-021 | Social sharing metadata | social-meta-tags | 구현 |
| R-022 | 최신 customer accounts 진입 | shopify-account component | 구현 |
| R-023 | Contact / collection index | page.contact + list-collections | 구현 |

## 완료 정의

코드 존재만으로 완료 처리하지 않는다. 각 기능은 Theme Check, development store 수동 smoke test, 모바일/데스크톱 검증 중 적용 가능한 검증을 통과해야 release-ready로 승격한다.
