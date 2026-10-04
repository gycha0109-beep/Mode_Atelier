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

실제 development store의 **Settings → Metafields and metaobjects → Products**에서 아래 정의를 만든다.

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

## 2026-10-04 준비 및 실제 Admin 상태

- 현재 Shopify 공식 [제품 CSV 규격](https://help.shopify.com/en/manual/products/import-export/using-csv)을 확인했다. 현재 헤더, variant 옵션, 단일 재고 위치, `Fulfillment service=manual`, 제품 metafield 열을 사용한다.
- CSV는 6개 상품 / 14개 variant다. 자켓 M은 338,000원으로 S와 가격이 다르고 L은 재고 0이다. 가격 갱신과 품절 상태 QA용 합성 데이터다.
- `fixtures/product-details.json`은 제품별 소재, 관리, 핏, 모델/사이즈 참고 값의 원본이다. 조성, 치수, 가격, 재고 모두 포트폴리오용 허구이며 실제 상품 사양이 아니다.
- 네 개의 metafield definition은 실제 Admin에 생성했다. 현재 제품 연결 수는 0이다.
- `fixtures/visuals/`의 9개 이미지는 OpenAI imagegen으로 만든 합성 이미지다. 프롬프트, 원본 파일명, 파생 파일 SHA-256 및 압축 내역은 `provenance.json`에 기록한다. 외부 브랜드나 클라이언트 에셋을 사용하지 않았다.
- 원본 PNG는 로컬 생성 이미지 폴더에 보존하고, 업로드 파일은 JPEG 품질 85로 인코딩했다. 파일당 약 87–251KB다.
- **아직 CSV를 가져오지 않았다.** Chrome 확장의 파일 URL 접근 설정에서 이미지 업로드가 차단되었다. 실제 Shopify CDN URL을 확보한 뒤 이미지 열을 추가하고 Admin import 미리보기 및 결과를 검증한다.
- CSV 규격 검토를 실제 import PASS로 간주하지 않는다. 재수입 때는 먼저 Admin export 백업을 만든다.
