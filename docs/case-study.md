# Case Study

## 문제

신규 글로벌 패션 브랜드는 브랜드 에셋만 있고 IA, UI, 다국어, 결제/배송 정책이 확정되지 않았다. 일정이 짧은 상황에서 디자인과 개발뿐 아니라 "무엇이 외부 승인에 의존하는지"까지 분리해야 한다.

## 접근

1. Shopify Online Store 2.0의 JSON template + section 구조로 운영자 편집성을 확보
2. fashion editorial UI를 custom section으로 구현
3. 상품/컬렉션/검색/장바구니를 Shopify native object/form에 연결
4. KO/EN/JA locale 분리
5. payment matrix로 storefront 구현과 merchant/PG 승인을 분리
6. Theme Check + QA checklist + launch gate로 완료 기준 명문화

## 핵심 산출물

- 실제 Shopify theme source
- 모바일/데스크톱 responsive UI
- 글로벌 결제/현지화 dependency matrix
- QA 및 런칭 체크리스트
- 운영자 handover guide

## 포트폴리오에서 보여줄 증거

최종 단계에서 아래 증거를 추가한다.

- Home desktop/mobile
- Collection
- PDP variant/add-to-cart
- Cart
- KO/EN/JA
- Theme Check PASS
- test checkout 진입
- release checklist

## 현재 한계

development store의 실상품과 실제 merchant payment account가 아직 연결되지 않은 synthetic repository 단계다. 따라서 checkout provider의 실승인/실거래는 완료로 주장하지 않는다.
