# Development Store Setup

이 문서는 실제 Shopify development store를 연결할 때 사용하는 실행 순서다.

## 1. 사전 준비

- Shopify Partner/개발 스토어 또는 테스트 가능한 Shopify store
- 해당 store에 theme 관리 권한
- Shopify CLI 최신 버전
- Node.js는 Shopify CLI가 지원하는 버전 사용
- 저장소 clone

## 2. CLI 연결

```bash
shopify version
shopify theme dev --store <store-domain.myshopify.com>
```

브라우저 인증 후 현재 브랜치의 theme를 development theme로 실행한다.

## 3. Synthetic catalog

Admin → Products → Import에서:

```text
fixtures/mode-atelier-products.csv
```

를 가져온다.

주의:

- 최초 import 전에 현재 Shopify 제품 CSV 화면의 필드/미리보기 결과를 확인한다.
- CSV에는 실제 Shopify Files의 합성 상품 이미지 URL 6개가 포함되어 있다. 9개 전체 합성 에셋의 실제 URL/출처는 `fixtures/visuals/shopify-files.json`과 `fixtures/visuals/`에서 확인한다.
- 다중 location inventory를 사용하는 경우 inventory CSV/API 흐름을 별도로 사용한다.

## 4. Collections

최소:

- New Arrivals
- Outerwear
- Knitwear
- Bottoms
- Accessories

fixture의 Collection 열은 각 상품을 한 collection에 넣는 초기 seed 역할만 한다. 필요한 추가 collection은 Admin에서 자동 collection 또는 수동 collection으로 구성한다.

## 5. Search & Discovery

Shopify Search & Discovery에서 storefront filters를 활성화한다.

- Availability
- Product type
- Size
- Price

테마는 `collection.filters`와 `search.filters`를 사용하므로 Admin에서 필터를 만들지 않으면 storefront에 필터 UI가 표시되지 않는다.

## 6. Product metafields

`docs/catalog-seed.md`의 custom metafield를 생성한다.

- custom.materials
- custom.care
- custom.fit_note
- custom.model_info

샘플 상품 2~3개에 값을 입력해 PDP accordion을 검증한다.

## 7. Theme editor

- Hero image
- Featured collection = New Arrivals
- Lookbook image 3장 이상
- Brand story image
- Size guide page
- Main navigation / footer navigation

을 연결한다.

## 8. Markets / languages

- KO / EN / JA publish
- 대상 market 생성
- market별 currency/pricing 전략 확인
- footer country/language selector 동작 확인

## 9. Smoke test

`docs/qa-checklist.md` 순서대로 수행한다.

특히:

1. collection filter
2. PDP variant
3. cart update/remove
4. related products lazy load
5. KO/EN/JA switch
6. country/currency context
7. checkout 진입

을 우선 검증한다.

## 10. 증거 고정

검증 결과는 `docs/release-evidence-plan.md` 기준으로 `evidence/release-001/`에 저장한다.

## 현재 연결 (2026-10-05)

- Store: `mode-atelier-fluhoiwk.myshopify.com`; CLI 4.8.4로 검증.
- Draft theme: `188330770750` / Mode Atelier Dev. 재업로드: `shopify theme push --theme 188330770750 --store mode-atelier-fluhoiwk.myshopify.com --strict`.
- Admin 콘텐츠는 `fixtures/content-seed.json`, `fixtures/journal-seed.json`, `fixtures/home-localization-seed.json`에서 인수인계한다. 실제 QA 상태는 `evidence/release-001/summary.md` 참조.
- Live Horizon 유지. unpublished push 성공은 공개 런칭이 아니다.
