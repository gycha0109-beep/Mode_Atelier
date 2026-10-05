# Release 001 — Dev Store portfolio handover

Status: **VERIFIED for the documented Dev Store portfolio smoke scope; ready for portfolio review and handover**. Production go-live remains BLOCKED_EXTERNAL. Optional audits and unexercised platform paths below are not PASS claims.

- Date: 2026-10-05 (Asia/Seoul)
- Theme source SHA: `ff5447df6850212f769c9e8ee3955a0c0cc7a41d`; later documentation/evidence commits do not change the uploaded source. The final source adds one CSS rule to keep the Shopify header section wrapper sticky; earlier commerce receipts use b1df327, whose commerce code is unchanged.
- Store: `mode-atelier-fluhoiwk.myshopify.com`
- Unpublished theme: Mode Atelier Dev / `188330770750`
- [Preview](https://mode-atelier-fluhoiwk.myshopify.com?preview_theme_id=188330770750)
- [Editor](https://mode-atelier-fluhoiwk.myshopify.com/admin/themes/188330770750/editor)
- [PR #1](https://github.com/gycha0109-beep/Mode_Atelier/pull/1), branch `feat/shopify-foundation`; main unmerged, Live Horizon preserved.
- Strict push succeeded with role unpublished. Local Theme Check `[]`, locale key/interpolation parity and Ajax unit contracts passed. Latest hosted CI is in PR checks; the previous b18cd5b CI receipt is historical.

## Confirmed store configuration

Six synthetic active products / fourteen variants / nine original synthetic image Files; actual CDN URLs and source are in fixtures. Five intended collections exist (New Arrivals 6, Outerwear 2, Knitwear 1, Bottoms 1, Accessories 2). Four product metafield definitions; jacket and knit values checked in actual PDP.

Main/footer menus and About, Lookbook, FAQ, Shipping & Returns, Contact, Size Guide, portfolio Privacy/Terms saved. Lookbook renders three original images; FAQ renders five native details. These use the default page template. Unpublished custom FAQ/Lookbook remain unassigned while Horizon is live: avoid duplicate existing HTML when assigning later. Portfolio notices do not replace merchant-reviewed legal policies.

Three visible original Journal posts with images, index/article/previous/next checked; comments disabled. Material Note author is Mode Atelier Studio; the other two retain the Admin account alias. Seed author is intended editorial credit, not a uniform runtime claim.

Search & Discovery installed with explicit permissions: Availability, Price, Product type, Size configured. Optional Color not configured. EN default, KO and JA published; US/Korea/Japan Markets active, all KRW. Korea/Japan Admin explicitly show English/Korean/Japanese inherited. Translate & Adapt's contrary visibility warning persists; actual preview routes work. Public Dev Store remains password protected.

KO/JA free auto translation completed with explicit terms consent; draft Home/announcement translated manually, knit name and menu New/About/Journal corrected. Further editorial review remains; no approved merchant policy claim. Korea/Japan synthetic shipping rate is 5,000 KRW, no real carrier contract. Hosted accounts/sign-in links enabled; actual KO login dialog/Orders/Profile links render.

## Runtime results

| Scenario | Actual observation | Status |
|---|---|---|
| Variant | S 328,000 / M 338,000; URL updates; EN→KO→JA retains M | VERIFIED |
| Sold out | Jacket L disables Add and accelerated checkout | VERIFIED |
| Ajax success | Native add, live badge, accessible success notice, consistent cart | VERIFIED |
| Network error | Only cart/add.js blocked with CDP; localized Japanese error, unchanged badge, busy cleared, button restored; block removed | VERIFIED |
| Partial-stock 422 | Unit fixture refreshes badge after partial mutation; live Dev Store did not return 422 | IMPLEMENTED_UNVERIFIED in live runtime |
| Inventory | S stock 8; native add 9 accepted; after checkout entry cart returns S×8 / 2,624,000 KRW | VERIFIED for reconciliation; add semantics unresolved |
| Cart | Quantity/update/remove/empty, multiple products and distinct variants | VERIFIED |
| Test payment | Test value 2 rejected, retry 1 approved: #1001 / Test order / Paid | VERIFIED, simulated only |
| Checkout | Japanese/Japan; Tote 298,000 + shipping 5,000 = 303,000 KRW | VERIFIED |
| Filters | Outerwear+M+price, facet removal, empty/clear, One Size; sorting retains filter | VERIFIED for tested combinations |
| Search | wool product/page/article, Outerwear→one jacket; query preserved on sort/locale switch | VERIFIED |
| Predictive | wool product, about page, outer collection, empty result, ESC and input focus | VERIFIED; query-suggestion content not returned in sampled queries |
| Keyboard | Skip link to main, menu Enter, FAQ Space, filter summary/checkbox/Apply/Clear | VERIFIED for smoke scope |
| Predictive keyboard | Input → Tab to Search button → Tab to returned product link → Enter opens actual PDP; ESC closes from input | VERIFIED for this flow; full ARIA/arrow-key audit not claimed |
| Sticky/grid regression | 1440 PDP scrollY 500: header top 0 / product info top 110; 390 collection scrollY 450: header top 0. Collection four desktop / two mobile columns | VERIFIED on final source |
| Responsive | Home/collection/PDP/cart/search/Lookbook/Journal/article/FAQ/Contact: 390/768/1440 captures, no observed overflow | VERIFIED for retained captures only |
| SEO | Native ProductGroup/Article JSON-LD, canonical/description; article type and HTTPS/alt image metadata | VERIFIED for sampled PDP/article |
| 404 | KO/EN/JA missing-page headings and home recovery; EN/JA retain localized route after switch | VERIFIED |
| Password | Custom Coming Soon in authenticated Theme Editor | VERIFIED, Admin preview only |
| Theme Editor | Hero editable dirty state restored; announcement/menus/collection/lookbook/story/newsletter/footer, width/radii, size guide; unused FAQ controls | VERIFIED |
| Contact/newsletter | Required-field validation; no inquiry/subscription sent | Validation checked, submissions NOT_TESTED |
| Signed-in account | User completed email/OTP; avatar, hosted Orders and Profile loaded; returned to draft storefront still signed in | VERIFIED; authentication values and profile data excluded from evidence |
| Lighthouse/axe | Not executed; no scores or full accessibility PASS claimed | NOT_TESTED |

Inventory cleanup: Jacket S restored to 8; temporary S lines removed. Test order #1001 remains unfulfilled as evidence; it consumed one tote stock. Do not fulfill, purchase labels or send real customer messages for this order.

## Evidence boundaries / next gate

All screenshots are actual draft preview/Admin captures. Permission/translation/editor images establish configuration, not final storefront appearance. Earlier captures can predate content translations/payment-icon changes. Current localized Home captures and current draft are authoritative. Responsive JSON records captured paths/dimensions/lazy image observations; last observation per file is the retained capture. Metafield-definitions image predates import and its zero counts are historical. No credential or OTP is recorded.

Customer-account authentication gate is closed. Orders is empty for the user's own account; synthetic test order #1001 belongs to the separate QA customer and is not asserted to appear there. Profile evidence is cropped above personal field values. No account/profile setting was changed.

Portfolio closeout includes actual evidence review, signed-in account verification, final variant/404/sticky captures, updated requirements/QA/handover and PR checks. Predictive query-suggestion content was not returned in sampled queries. Pagination is implemented but not exercised with six products and a minimum page size of eight. Optional Lighthouse/axe, all-browser certification, inquiry/subscription delivery and full editorial/legal translation approval remain untested. Real PG, merchant country/eligibility, USD/JPY, DNS and production publish are external dependencies. No main merge or Live theme publish.

See [final closeout receipt](qa/closeout-2026-10-05.json), [final source validation](theme-check/validation-ff5447d.json) and [curated evidence index](index.md). Historical captures/receipts remain labeled; final portfolio views in the index contain actual synthetic imagery rather than placeholder artwork.
