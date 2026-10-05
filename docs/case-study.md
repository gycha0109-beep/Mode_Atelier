# Case Study

## 문제

글로벌 패션 브랜드 신규 쇼핑몰 구축 공고의 요구사항을 일반화한 합성 프로젝트다. 실제 클라이언트 소스·상품·브랜드 이미지는 사용하지 않고 MODE ATELIER의 catalog와 원본 synthetic visual을 만들었다. IA, 다국어, 관리자 편집성, 탐색부터 checkout까지 연결하고 외부 승인이 필요한 결제·배송·법률 정책을 구분하는 것이 과제였다.

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

실제 캡처와 관찰 기록은 [Release 001 evidence index](../evidence/release-001/index.md)에 있다.

- Home desktop/mobile
- Collection
- PDP variant/add-to-cart
- Cart
- KO/EN/JA
- Theme Check PASS
- test checkout 거절 후 승인 / Admin Test order #1001
- 사용자 직접 인증 후 hosted account Orders/Profile
- release checklist

## 현재 한계

실제 Dev Store에 6상품/14variants/9원본 합성 이미지, 5컬렉션, 4메타필드 정의, 메뉴·페이지·3Journal을 입력했다. Search & Discovery 필터와 EN/KO/JA, US/KR/JP를 실제 preview에서 검증했으며 통화는 모두 KRW다. 커머스와 모바일 smoke에서 발견한 네트워크 오류 현지화·재고 부분 성공 후 배지 처리·상품 가격 표시·sticky header 문제를 수정했다.

Test Payment Gateway의 거절/승인을 검증했으나 실가맹점 PG 계약·실거래는 완료로 주장하지 않는다. Dev Store는 password protected/unpublished이고 main과 Live Horizon은 보존됐다. Lighthouse/axe, 문의·구독 전송, 여섯 상품으로 발생하지 않는 pagination, live stock 422 등 미검증 항목과 market 경고 불일치는 [release summary](../evidence/release-001/summary.md)에 남겼다. 포트폴리오 검토·인수인계와 실제 production go-live는 별도 상태다.
