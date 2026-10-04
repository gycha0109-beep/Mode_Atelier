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

## 2026-10-04 실제 Dev Store 상태

- EN(default), KO, JA 모두 Admin에서 Published를 확인했다. Shopify Translate & Adapt가 언어 추가 흐름에서 자동 설치되었다.
- United States, Korea(South Korea), Japan Market이 Active다. 세 언어는 기본 myshopify.com 도메인에 연결되어 있다.
- 스토어 기본 통화는 KRW로 변경했다. merchant business entity와 store address country는 미국 기본값을 유지한다.
- Japan의 통화 customization UI는 Shopify Payments 계정 설정 완료를 요구한다. USD/JPY 구매 통화는 **MERCHANT_ONBOARDING_REQUIRED**이며 현재 모든 Market은 KRW를 상속한다.
- Korea/Japan은 아직 배송 요금이 없다. Admin은 해당 주소로 checkout이 불가능함을 명시했다. 테스트 배송 구역/요금을 구성하고 checkout QA를 수행해야 한다.
- 테마 UI의 KO/EN/JA 번역 파일과 Admin의 상품/페이지/섹션 콘텐츠 번역은 별도다. Admin 콘텐츠는 아직 번역하지 않았다. 게시 상태만으로 storefront localization QA PASS를 선언하지 않는다.
