# Handover Guide

## 운영자가 Theme Editor에서 바꿀 수 있는 것

- Announcement 문구/링크
- Header/Footer 메뉴
- Home hero 이미지/카피/CTA
- Featured collection 및 노출 상품 수
- Editorial image/text
- Newsletter 문구
- 전역 브랜드 색상

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
