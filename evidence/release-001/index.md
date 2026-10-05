# Release 001 evidence index

Actual Shopify draft/Admin captures, reviewed 2026-10-05. Start with [scope and limitations](summary.md), [final QA receipt](qa/closeout-2026-10-05.json) and [source validation](theme-check/validation-ff5447d.json). Final source is ff5447d; b1df327 commerce implementation remains unchanged. No production payment/public deployment claim.

| Review step | Actual evidence |
|---|---|
| Editorial home / signed-in avatar | [Desktop](desktop/home-1440.jpg), [mobile](mobile/home-390.jpg), [tablet](mobile/home-768.jpg) |
| Synthetic brand/content | [Lookbook](desktop/lookbook-1440.jpg), [Journal](desktop/journal-1440.jpg), [article](desktop/article-1440.jpg) |
| Product discovery | [Filters](desktop/collection-filters-1440.jpg), [mobile filters](mobile/collection-filters-390.jpg), [empty facet](mobile/collection-empty-390.jpg) |
| PDP / changed variant / sold out | [Mobile PDP](mobile/pdp-390.jpg), [M price and URL](commerce/variant-m-price-url-1440.jpg), [L sold out](commerce/variant-l-sold-out-1440.jpg), [size guide](mobile/pdp-size-guide-390.jpg) |
| Ajax/cart | [Success notice](commerce/ajax-add-confirmation-1440.jpg), [localized network failure](commerce/ajax-network-error.jpg), [multiple items](commerce/cart-multiple-products-1440.jpg), [empty cart](mobile/cart-empty-390.jpg) |
| Search | [Results](desktop/search-1440.jpg), [predictive](desktop/predictive-search.jpg), [empty](mobile/search-empty-390.jpg) |
| Localization | [EN home](desktop/home-1440.jpg), [KO home](localization/home-ko-390.jpg), [JA home](localization/home-ja-1440.jpg), [Japan market/languages](localization/japan-market-languages.jpg) |
| Supporting pages | [Contact](desktop/contact-1440.jpg), [FAQ](desktop/faq-1440.jpg), [EN 404](localization/404-en-390.jpg), [KO 404](mobile/404-ko-390.jpg), [JA 404](localization/404-ja-390.jpg) |
| Customer account | [Signed-out entry](commerce/customer-account-entry-ko.jpg), [signed-in Orders](commerce/customer-orders-signed-in-ko.jpg), [Profile header only](commerce/customer-profile-header-ko.jpg) |
| Simulated checkout | [Test decline](commerce/test-payment-declined-ja.jpg), [test approval](commerce/test-payment-approved-ja.jpg), [Admin Test order #1001](commerce/test-order-admin.jpg) |
| Regression / editor | [Desktop sticky header/PDP](qa/sticky-header-pdp-1440.jpg), [mobile sticky header](qa/sticky-header-collection-390.jpg), [editor controls](qa/theme-editor-brand-controls.jpg), [size-guide setting](qa/theme-editor-size-guide.jpg), [Coming Soon Admin preview](qa/password-admin-preview.jpg) |

Older `pdp-ja-390.jpg`, initial checkout/permission/import captures and b18 validation establish historical configuration and are not current final storefront artwork. Offscreen lazy images need not have loaded in viewport captures. Screenshots never include OTP/tokens; Profile is cropped above private values. Test-order checkout data is synthetic and separate from the signed-in user's empty Orders page.
