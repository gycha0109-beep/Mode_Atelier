# Localization Matrix

| Market | Storefront locale | 목표 통화 | 콘텐츠 | 결제/배송 |
|---|---|---|---|---|
| Korea | ko | KRW | 기본 | 실제 merchant 설정 검증 필요 |
| Global / US | en | USD 후보 | 기본 | 실제 provider/market 설정 검증 필요 |
| Japan | ja | JPY 후보 | 기본 | 실제 provider/market 설정 검증 필요 |

## 현재 코드 범위

- `locales/en.default.json`
- `locales/ko.json`
- `locales/ja.json`
- UI 문자열의 하드코딩을 최소화
- HTML `lang`은 `request.locale.iso_code` 사용

## 실제 스토어 설정 단계

1. Shopify Markets에 대상 market 생성
2. market별 domain/subfolder 전략 결정
3. published language 연결
4. 통화 표시/가격 전략 결정
5. market별 배송 가능 국가/요율 연결
6. 결제수단 실제 노출 테스트
7. 정책/CS/반품 문구 현지화 검수

자동 번역을 법률/반품/결제 정책의 최종본으로 사용하지 않는다.
