# QA Checklist — Release 001

2026-10-05 / final theme source ff5447d / unpublished theme 188330770750. Checked items mean the recorded smoke scenario passed, not exhaustive certification. Detailed observations and limitations: [release summary](../evidence/release-001/summary.md).

## 자동 검증

- [x] Theme Check / JSON template/schema
- [x] Locale key / interpolation parity
- [x] Ajax cart unit contracts
- [x] PR CI (exact final evidence commit and run are recorded in PR checks)

## Desktop / mobile

- [x] Home / collection / PDP / cart / search / Lookbook / Journal / article / FAQ / Contact at 390 / 768 / 1440
- [x] Sticky header actual scroll at 1440 / 390; PDP info top 110 at scrollY 500
- [x] Collection four desktop / two mobile columns; mobile PDP single column
- [x] Mobile menu toggle, search entry and header touch targets
- [x] No observed overflow in retained viewport captures
- [x] Variant price / URL / sold-out state
- [x] Ajax success / live badge / localized network failure
- [x] Cart quantity >1 / update / remove / empty / multiple products and variants
- [x] Search results and empty search/cart
- [x] Native filters apply / multiple / remove chip / clear / price / empty / sort
- [x] Native ProductGroup / Article metadata and EN / KO / JA 404

## Locale / account / keyboard

- [x] EN / KO / JA header/footer, PDP CTA, cart, search and 404 samples
- [x] Country / language switches; selected PDP variant, cart and search query preserved
- [x] User-completed hosted account login; avatar / Orders / Profile / storefront return
- [x] Skip link, mobile menu Enter, FAQ Space, filter summary/checkbox/Apply/Clear
- [x] Predictive Tab/Enter result entry and input Escape closure
- [x] Contact/newsletter empty required-field validation (no messages sent)

## Simulated commerce / editor

- [x] Japanese/Japan checkout with KRW and synthetic shipping
- [x] Test Payment Gateway decline then approval; #1001 Test order / Paid / Unfulfilled
- [x] Inventory reconciliation after checkout entry (9 requested → 8 in cart); probe cleanup
- [x] Theme Editor hero / announcement / navigation / collection / lookbook / story / newsletter / footer / width / radii / size-guide settings
- [x] Custom password page in authenticated Admin preview

## Explicitly untested or external

- [ ] Full axe / Lighthouse / screen-reader / arrow-key audit / all-browser certification
- [ ] Live stock 422 response (unit fixture PASS only)
- [ ] Pagination runtime (six products; smallest section page size eight)
- [ ] Query-suggestion content (not returned by sampled API responses)
- [ ] Contact/newsletter delivery, refund/cancel and extra gateway error code
- [ ] Real PG / multi-currency / merchant legal and tax approval / DNS / production publish

Keep these unchecked; they are not represented as PASS. See [evidence index](../evidence/release-001/index.md) and [production launch gate](launch-checklist.md).
