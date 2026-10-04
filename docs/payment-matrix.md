# Payment Matrix

## 원칙

결제수단은 테마 코드만으로 보장할 수 없다. 판매자 소재 국가, Shopify Payments 지원 여부, 활성화 가능한 타사 provider, provider 심사, 구매자 위치/기기, 통화와 상품 유형에 따라 실제 노출 가능 여부가 달라진다.

Shopify Admin의 **Settings → Payments** 및 국가별 payment gateway 목록을 런칭 시점의 source of truth로 사용한다.

| 결제 요구 | 테마/스토어 역할 | 외부 의존 | 포트폴리오 상태 |
|---|---|---|---|
| Visa / Mastercard | checkout 진입, enabled payment icon 노출 | 카드 provider 승인 | 준비됨 / 승인 필요 |
| PayPal | checkout/payment 설정 | PayPal merchant 연결 및 자격 | 설정 필요 |
| Apple Pay | accelerated checkout 호환 영역 | 지원 provider, SSL, 구매자 기기/브라우저 등 | 조건 검증 필요 |
| WeChat Pay | 시장별 payment method 후보 | 해당 merchant 국가에서 사용 가능한 provider | 조건 검증 필요 |
| LINE Pay | 시장별 payment method 후보 | 해당 merchant 국가/provider의 현재 지원 여부 | 조건 검증 필요 |
| 국내 카드 | Shopify에서 활성화 가능한 국내/타사 PG | 사업자/PG 계약 및 심사 | 조건 검증 필요 |

## 런칭 게이트

- [ ] merchant의 법인/사업자 소재 국가 확정
- [ ] Shopify Payments 지원 여부 확인
- [ ] Admin에서 현재 활성화 가능한 payment providers 확인
- [ ] 실제 계약 가능한 provider 선정
- [ ] 카드/PayPal/지갑별 테스트 결제 시나리오 작성
- [ ] 성공/실패/취소/환불 플로우 검증
- [ ] 통화 및 정산 통화 확인
- [ ] third-party transaction fee 포함 비용 확인

## 하지 않는 주장

이 저장소만으로 "PayPal/Apple Pay/WeChat Pay/LINE Pay 연동 완료"라고 주장하지 않는다. 실제 merchant 계정에서 활성화와 테스트 거래 증거가 생긴 뒤 상태를 변경한다.
