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
- Korea/Japan 합성 테스트 배송 구역을 만들고 `Standard — portfolio test` 5,000 KRW 요금을 저장했다. 설정 전 한국에서 모든 상품이 품절로 보이던 현상은 설정 후 실제 storefront에서 해소됐다. 실물 배송 계약을 의미하지 않는다.
- 테마 UI의 KO/EN/JA 번역 파일과 Admin 콘텐츠 번역은 별도다. 2026-10-05 사용자 고지·약관 승인 후 KO/JA 무료 자동 번역 완료. Draft Home/announcement는 수동 번역, knit 이름/메뉴는 검수했다. 게시 상태만으로 전체 localization QA PASS를 선언하지 않는다.

## 2026-10-05 확인한 storefront 경로

- EN → KO → JA 장바구니 UI 전환: 동일한 자켓 M / 수량 1 / 338,000 KRW 유지.
- JA 상태에서 Korea → Japan 국가 전환: 장바구니 유지, 일본어 checkout 진입 및 Japan 선택 확인.
- 초기 provider 미설정 화면은 과거 상태다. 이후 Test Payment Gateway를 활성화하여 일본어 테스트 거절/승인을 확인했다. #1001은 실결제가 아닌 Test order다.
- Home KO/JA 카피, EN→KO→JA PDP variant M URL, 검색 쿼리와 장바구니 유지를 확인했다. 모든 번역의 전문가 검수는 완료하지 않았다.
- Korea/Japan Market의 실제 Domain / language는 English/Korean/Japanese 3개 상속을 표시한다. Translate & Adapt의 market 미연결 경고는 여전히 표시된다. 이 충돌과 공개 Dev Store password 제한을 기록한다.
- 모든 시장의 실제 통화는 KRW. USD/JPY는 merchant onboarding 외부 의존이다.
