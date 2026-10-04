# Synthetic Catalog Seed

Mode Atelier development store에서 사용할 합성 카탈로그 기준입니다.

## 컬렉션

| Collection | 역할 |
|---|---|
| New Arrivals | 홈 Featured Collection 및 기본 진입 |
| Outerwear | 자켓/코트 |
| Knitwear | 니트 |
| Bottoms | 팬츠 |
| Accessories | 가방/액세서리 |

## 샘플 상품

| Handle | Product | Type | Color | Size | KRW 기준가 |
|---|---|---|---|---|---:|
| architectural-wool-jacket | Architectural Wool Jacket | Outerwear | Charcoal | S/M/L | 328,000 |
| transit-nylon-shell | Transit Nylon Shell | Outerwear | Black | S/M/L | 248,000 |
| soft-structure-knit | Soft Structure Knit | Knitwear | Stone | S/M/L | 168,000 |
| column-wide-trouser | Column Wide Trouser | Bottoms | Ink | S/M/L | 188,000 |
| atelier-leather-tote | Atelier Leather Tote | Accessories | Black | One Size | 298,000 |
| folded-crescent-bag | Folded Crescent Bag | Accessories | Ash | One Size | 218,000 |

## 권장 상품 metafield

실제 development store의 **Settings → Custom data → Products**에서 아래 정의를 만든다.

| Name | Namespace/key | Type | 사용 |
|---|---|---|---|
| Materials | custom.materials | multi-line text | 소재 정보 |
| Care | custom.care | multi-line text | 관리 방법 |
| Fit note | custom.fit_note | single-line text | 핏 설명 |
| Model info | custom.model_info | single-line text | 모델 착용 정보 |

Variant metafield는 CSV import 대상이 아니므로 필요한 경우 Admin bulk editor에서 별도 관리한다.

## Search & Discovery 필터

최소 다음을 활성화한다.

- Availability
- Product type
- Size variant option
- Price

상품 색상 체계를 taxonomy/metafield에 연결할 경우 Color도 필터로 승격한다.

## 가져오기

`fixtures/mode-atelier-products.csv`는 synthetic development store 초기 입력용이다. Shopify의 현재 제품 CSV 형식에 맞춘 핵심 열만 사용한다.

실제 스토어에서 처음 import한 뒤에는 export 백업을 먼저 만든 후 overwrite 작업을 수행한다.
