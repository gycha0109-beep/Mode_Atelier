# QA Checklist

## 자동 검증

- [ ] Shopify Theme Check PASS
- [ ] JSON template/schema 오류 없음
- [ ] locale key 누락 없음
- [ ] pull request CI PASS

## Desktop

- [ ] 1440px 홈 레이아웃
- [ ] header sticky 동작
- [ ] collection 4-column layout
- [ ] product media + sticky info
- [ ] variant 변경
- [ ] add to cart
- [ ] cart 수량 update/remove
- [ ] search results
- [ ] empty search/cart
- [ ] 404

## Mobile

- [ ] 390px navigation toggle
- [ ] hero text overflow 없음
- [ ] 2-column product grid
- [ ] PDP single-column 전환
- [ ] tap target / form control
- [ ] cart layout
- [ ] newsletter form

## Locale

각 KO / EN / JA에 대해:

- [ ] header/footer
- [ ] PDP CTA
- [ ] cart
- [ ] search
- [ ] 404
- [ ] 잘림/overflow

## Commerce smoke test

development store에서:

- [ ] in-stock variant 장바구니 추가
- [ ] sold-out variant CTA 비활성
- [ ] quantity 2 이상
- [ ] cart update
- [ ] item remove
- [ ] checkout 진입
- [ ] test mode 가능한 provider의 성공/실패 시나리오

## 증거

검증 스크린샷/리포트는 `evidence/`에 release 단위로 보관한다.
