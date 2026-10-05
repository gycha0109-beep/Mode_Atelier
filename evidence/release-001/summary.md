# Release 001 — in progress

Status: **IMPLEMENTED, partial runtime verification**. This is a progress record, not a release-ready claim. File-upload permission is resolved.

- Updated: 2026-10-05 (Asia/Seoul)
- Source baseline: `ac69d1075eb845a159ece70b25c479cb7200b488`; visual assignments after this commit were pushed to the same unpublished theme and used for the observations below.
- Store: `mode-atelier-fluhoiwk.myshopify.com`
- Theme: Mode Atelier Dev, ID `188330770750`, unpublished
- Preview: https://mode-atelier-fluhoiwk.myshopify.com?preview_theme_id=188330770750
- Editor: https://mode-atelier-fluhoiwk.myshopify.com/admin/themes/188330770750/editor
- PR: https://github.com/gycha0109-beep/Mode_Atelier/pull/1

## Confirmed runtime actions

- Initial strict unpublished theme push succeeded; theme list confirmed its ID and unpublished role.
- The revised product section, locale files and actual visual assignments were pushed successfully to that same unpublished theme. Current local Theme Check and locale key/interpolation checks passed. Baseline CI passed at https://github.com/gycha0109-beep/Mode_Atelier/actions/runs/37203448170 for `ac69d10`; current changes require a new CI run.
- Nine synthetic images uploaded to Files; actual CDN URLs recorded in `fixtures/visuals/shopify-files.json`. CSV import confirmed 6 active products / 14 variants with images, Online Store only. See `qa/catalog-import-preview.jpg` and `qa/catalog-import-result.jpg`.
- New Arrivals (6), Outerwear (2), Knitwear (1), Bottoms (1), Accessories (2) confirmed in Admin. Four type-based collections were created on Online Store only. See `qa/collections-admin.jpg`. The existing Home page collection was preserved.
- Store currency changed to KRW. Business entity and store-address country remain US.
- Four product metafield definitions created: `custom.materials` and `custom.care` (multi-line), `custom.fit_note` and `custom.model_info` (single-line).
- `qa/metafield-definitions.jpg` is a historical Admin capture before import; its zero counts reflect that earlier stage. Jacket values confirmed in Admin; materials and model/sizing expanded in the actual PDP.
- EN/KO/JA published in Admin; US/Korea/Japan Markets active. All Markets currently inherit KRW.
- Korea/Japan synthetic test shipping zone with `Standard — portfolio test` at 5,000 KRW saved. Korean storefront all-sold-out state resolved after this configuration. This does not establish a carrier contract.
- Customer-account sign-in links are enabled; Admin exposes current hosted customer-account configuration. Signed-in customer flow is NOT_TESTED.

## Not yet verified

Navigation/journal, Search & Discovery product-type/size filters, Theme Editor controls, remaining cart/error/account paths, all localized routes/content, responsive/accessibility/performance/SEO QA remain pending. No placeholder storefront screenshots are used as final evidence.

About, Lookbook and FAQ creation/content were confirmed in Admin. Shipping & Returns and Size Guide content were saved and confirmed by reloading the actual pages. The original title-input failure was worked around using Shopify's content tool for About and the normal page duplicate dialog for the remaining pages. The HTML editor requires initialization and a completed transition to the visual editor before saving; an early save retained the previous body, which was corrected and rechecked. These Admin checks do not replace storefront page QA. `fixtures/content-seed.json` contains the exact synthetic page source; portfolio notices do not replace merchant-reviewed legal policies.

## Runtime smoke results

| Scenario | Observation | Status |
|---|---|---|
| Jacket variant | S 328,000 → M 338,000 KRW; variant URL updated | PASS |
| Sold-out variant | L disables Add to bag and accelerated button | PASS |
| Ajax cart | M × 2, header count 2, cart subtotal 676,000 KRW | PASS |
| Cart quantity update | M × 1, header count 1, subtotal 338,000 KRW | PASS |
| Recommendations | Four actual product cards returned | PASS |
| Cart localization | EN → KO → JA retains M × 1 | PASS |
| Country switch | JA cart Korea → Japan retains cart | PASS |
| Checkout entry | Japanese checkout contains M × 1, Japan selected | PASS (entry only) |
| Payment submission | No gateway; payment button disabled | NOT_TESTED |
| Predictive search | `wool` suggests jacket; ESC collapses suggestions | PASS for this scenario |
| Full search | `wool` returns one jacket | PASS for this scenario |

Actual screenshots are under `commerce/`, `localization/`, `desktop/` and `qa/`. Captures use authenticated draft preview; public development-store access remains password protected. Checkout capture has empty contact/address fields. No tokens or credentials are recorded.

## Dependencies and next gate

1. Complete content/navigation and Search & Discovery configuration.
2. Complete targeted runtime, responsive, keyboard/accessibility, rendered SEO and performance QA.
3. Verify supported test-payment success/failure if available without merchant onboarding, then finish handover and final evidence review.

Payment: **MERCHANT_ONBOARDING_REQUIRED** for real providers; test transactions NOT_TESTED. Checkout entry is verified separately. USD/JPY customization requires Shopify Payments onboarding. Merchant country is not changed to work around eligibility.
