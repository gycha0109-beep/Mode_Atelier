# Mode Atelier

Shopify 기반 글로벌 패션 D2C 쇼핑몰 구축 포트폴리오입니다.

> **Synthetic project**  
> 실제 클라이언트 소스·상품·결제 계정을 사용하지 않습니다. 글로벌 패션 브랜드 런칭 외주를 가정해 요구사항 분석 → 테마 구축 → 글로벌 커머스 설계 → QA → 런칭/인수인계까지 재현합니다.

## 목표

- Shopify Online Store 2.0 구조를 사용한 브랜드형 스토어프런트
- 패션 브랜드에 맞는 editorial / minimal UI
- PC·모바일 반응형
- 상품, 컬렉션, 검색, 장바구니, 계정 진입점
- 한국어 / 영어 / 일본어 locale 기반
- 결제수단을 "구현 완료"로 과장하지 않고 merchant country, PG 심사, buyer location에 따른 의존성을 명시
- Theme Check 기반 CI와 체크리스트로 회귀 검증 가능하게 구성

## 현재 구현

- 홈: editorial hero, featured collection, brand story, newsletter
- 상품 상세: 미디어 갤러리, variant 선택, 수량, add-to-cart, accelerated checkout 영역
- 컬렉션: 상품 그리드, 정렬, pagination
- 검색: 상품/페이지/콘텐츠 검색
- 장바구니: 수량 수정, 삭제, subtotal, checkout
- 공통: announcement, sticky header, mobile navigation, footer/payment icons
- locales: `en`, `ko`, `ja`
- 문서: 요구사항, sitemap, payment matrix, localization matrix, QA, launch, handover, case study

## 구조

```text
assets/
config/
layout/
locales/
sections/
snippets/
templates/
docs/
.github/workflows/
```

Shopify 권장 방식에 맞춰 JSON templates와 section groups를 사용하고, 실제 HTML/Liquid는 sections에 둡니다.

## 로컬 검증

Shopify CLI가 설치된 환경에서:

```bash
shopify theme check
shopify theme dev --store <development-store>
```

CI에서도 Shopify Theme Check를 실행합니다.

## 범위 경계

이 저장소는 storefront/theme 코드와 런칭 설계를 증명합니다. 실제 결제 승인, 실가맹점 PG 계약, 도메인 소유권 확인, 실배송사 계약, 세금/관부가세 정책 확정은 실제 merchant 계정과 사업자 정보가 있어야 완료할 수 있으므로 코드상 완료로 표시하지 않습니다.

자세한 범위와 증거 기준은 `docs/`를 참고하세요.
