# Handover Guide

## 운영자가 Theme Editor에서 바꿀 수 있는 것

- Announcement 문구/링크
- Header/Footer 메뉴
- Home hero 이미지/카피/CTA
- Featured collection 및 노출 상품 수
- Editorial image/text
- Newsletter 문구
- 전역 브랜드 색상
- Page width / Button radius / Media radius
- PDP Size Guide page / Header customer account menu
- Footer `Show verified payment methods` (기본 false, 실제 provider 검증 후 사용)

## Shopify Admin에서 관리할 것

- Products / variants / inventory
- Collections
- Navigation
- Pages
- Markets / languages
- Shipping
- Payments
- Domains
- Customer accounts
- Legal policies

## 배포 원칙

1. production theme를 직접 편집하지 않는다.
2. Git branch에서 변경한다.
3. Theme Check를 통과시킨다.
4. development/unpublished theme에서 smoke test한다.
5. 승인 후 publish한다.
6. 직전 production theme를 rollback 후보로 보존한다.

## 인수인계 산출물

- GitHub 저장소
- Theme ZIP 또는 store에 업로드된 unpublished theme
- 관리자 권한 목록
- 환경/외부 서비스 목록
- payment/provider 상태
- DNS 상태
- QA 결과
- launch checklist

## 실제 Dev Store 인수인계 (2026-10-05)

`mode-atelier-fluhoiwk.myshopify.com`의 Mode Atelier Dev(`188330770750`)는 unpublished다. Live Horizon과 main을 보존했다. strict push 성공과 전체 release-ready 판정은 구분한다.

- 6 상품 / 14 variants / 9 원본 합성 이미지. 실제 CDN과 CSV는 fixtures에 있다.
- 페이지/메뉴/Journal 저장 완료. FAQ/Lookbook은 기본 페이지의 실제 HTML을 사용한다. 커스텀 템플릿을 나중에 할당할 때 기존 HTML과 섹션의 중복을 먼저 해소한다. 이를 위해 Live theme를 임의 publish하지 않는다.
- EN/KO/JA 및 US/Korea/Japan, 실제 통화는 KRW. Home 수동 카피는 `fixtures/home-localization-seed.json`. 메뉴 New/About/Journal은 KO 신상품/브랜드 소개/저널, JA 新着/ブランドについて/ジャーナル로 검수했다.
- 테스트 제공자만 활성화. #1001은 합성 Test order이며 배송하지 않는다. 실제 PG 계약, merchant country, DNS, production publish는 외부 작업이다.
- 자켓 S 재고 8개에 native add 9는 접수됐지만 checkout 진입 후 cart가 8로 조정됐다. 422 부분 추가/배지 동기화는 unit contract로 확인, 실제 Shopify 422는 재현하지 못했다. 품절 L과 네트워크 오류 알림은 실제 검증했다.
- hosted account의 KO 로그인/Orders/Profile 진입 확인. 사용자 이메일/OTP 직접 완료 후 signed-in 검증 가능. 인증코드는 문서/채팅에 기록하지 않는다.

기준점과 개별 검증/미검증 범위는 `evidence/release-001/summary.md`를 사용한다. CI green이 모든 실제 UI/PG/접근성 검증 완료를 의미하지 않는다.
