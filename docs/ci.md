# CI

## Theme Check

PR → main 및 main push에서 Shopify Theme Check를 실행한다.

현재 추가 게이트:

- recommended Theme Check rules
- CSS asset <= 100 KB
- JavaScript asset <= 10 KB
- pagination max size 250

## Locale parity

`scripts/check-locales.mjs`가 `en.default.json`을 기준으로 KO/JA storefront locale을 검증한다.

실패 조건:

- default locale에 있는데 번역 locale에 없는 key
- 번역 locale에만 존재하는 extra key
- `{{ count }}`, `{{ terms }}` 등 interpolation placeholder가 언어별로 달라짐

실행:

```bash
node scripts/check-locales.mjs
```

## CI 원칙

feature branch push와 PR 이벤트의 동일 검사를 중복 실행하지 않는다.

- feature 변경: PR 1회
- main merge/push: main 1회
- 필요 시 workflow_dispatch 수동 실행

정적 CI PASS는 development store의 실제 브라우저/checkout QA를 대체하지 않는다.
