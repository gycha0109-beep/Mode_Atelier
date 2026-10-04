# Customer Accounts

## 현재 Shopify 기준

Mode Atelier은 legacy customer account template를 구현하지 않는다.

최신 Shopify customer accounts는 theme와 독립적으로 동작하고, theme header에는 `<shopify-account>` component를 배치한다.

현재 header:

```liquid
{% if shop.customer_accounts_enabled %}
  <shopify-account menu="{{ section.settings.customer_account_menu }}"></shopify-account>
{% endif %}
```

기본 메뉴는 `customer-account-main-menu`를 사용한다.

## merchant 설정

Admin에서:

1. Settings → Customer accounts
2. Sign-in links 활성화
3. checkout/accounts editor에서 branding 설정
4. 필요 시 Google/Facebook/Apple 등 지원 sign-in provider 설정
5. customer account menu 구성

## 검증

- signed-out 상태에서 account component 노출
- 로그인 sheet 또는 로그인 흐름 진입
- signed-in 상태 avatar 표시
- Orders/Profile 접근
- 모바일 header에서도 접근 가능

customer account 화면 자체를 legacy theme template로 복제해 포트폴리오 완료 처리하지 않는다.
