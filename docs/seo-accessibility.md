# SEO & Accessibility Baseline

## SEO

현재 theme layout에:

- title
- meta description
- canonical URL
- product/article schema.org structured data

를 포함한다.

상품 구조화 데이터는 Shopify의 `structured_data` Liquid filter를 사용하여 variant를 포함한 플랫폼 데이터를 기준으로 생성한다.

## Accessibility

현재 baseline:

- skip link
- semantic main/nav/header/footer
- form label + unique id
- aria-live for variant/cart state
- keyboard-operable details/summary filters
- explicit focus-visible state
- reduced-motion preference 대응
- image_tag 기반 alt 출력

## Development store에서 추가 검증

- keyboard-only navigation
- focus order
- zoom 200%
- color contrast
- screen reader field names
- validation/error announcement
- mobile tap target

정적 Theme Check 통과는 접근성 완료 판정이 아니다. 브라우저 수동 smoke와 자동 접근성 검사 결과를 release evidence에 별도로 남긴다.
