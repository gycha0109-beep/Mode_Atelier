# Release 001 — in progress

Status: **BLOCKED_EXTERNAL (browser file upload permission)**. This is a progress record, not a release-ready claim.

- Date: 2026-10-04 (Asia/Seoul)
- Baseline source commit: `697d4768083efe9eb1449b5412aaec335cba1a5d`
- Store: `mode-atelier-fluhoiwk.myshopify.com`
- Theme: Mode Atelier Dev, ID `188330770750`, unpublished
- Preview: https://mode-atelier-fluhoiwk.myshopify.com?preview_theme_id=188330770750
- Editor: https://mode-atelier-fluhoiwk.myshopify.com/admin/themes/188330770750/editor
- PR: https://github.com/gycha0109-beep/Mode_Atelier/pull/1

## Confirmed runtime actions

- Initial strict unpublished theme push succeeded; theme list confirmed its ID and unpublished role.
- The revised product section and locale files were pushed successfully to that same unpublished theme. Local Theme Check and locale key/interpolation checks passed; details are in `theme-check/local-validation.json`. Catalog structure validation passed locally; Admin import remains NOT_TESTED.
- Store currency changed to KRW. Business entity and store-address country remain US.
- Four product metafield definitions created: `custom.materials` and `custom.care` (multi-line), `custom.fit_note` and `custom.model_info` (single-line).
- `qa/metafield-definitions.jpg` is an actual Admin screenshot cropped to the settings content to exclude account contact data. The zero-product counts reflect the current unimported catalog.
- EN/KO/JA published in Admin; US/Korea/Japan Markets active. These are setup observations, not storefront locale QA results.
- Customer-account sign-in links are enabled; Admin exposes current hosted customer-account configuration. Signed-in customer flow is NOT_TESTED.

## Not yet verified

Catalog import, final image assignment, navigation/pages/journal, Search & Discovery filters, Theme Editor controls, product/variant/Ajax/cart/checkout flows, localized storefront routes, responsive/accessibility/performance/SEO QA remain pending. No placeholder storefront screenshots are included as portfolio evidence.

## Dependencies and next gate

1. Enable Chrome ChatGPT extension's **Allow access to file URLs** (upload was rejected by the browser capability).
2. Upload the prepared nine synthetic JPEGs; obtain actual Shopify CDN URLs; enrich and preview the CSV import.
3. Configure content and synthetic test shipping, then run runtime QA and capture release evidence.

Payment: **MERCHANT_ONBOARDING_REQUIRED** for real providers; test payments NOT_TESTED. USD/JPY customization requires Shopify Payments onboarding. Korea/Japan currently have no shipping rates and cannot complete checkout. Do not change merchant country to work around these limitations.
