# Launch Checklist

## Dev Store 포트폴리오 gate — 2026-10-05

- [x] 실제 unpublished theme 업로드 / 원본 합성 이미지와 catalog / 메뉴·페이지·Journal
- [x] EN/KO/JA, US/KR/JP의 KRW preview와 주요 커머스 smoke
- [x] 고객 계정 signed-in 진입, test gateway 승인/거절 증거
- [x] 정적 검증 / PR CI / 실제 viewport 캡처 / 인수인계 문서

위 gate는 문서화된 Dev Store 포트폴리오 검토 범위다. 아래 항목은 **실가맹점 production go-live** 체크이며 합성 데이터나 test payment로 대신 체크하지 않는다. [Release 001](../evidence/release-001/summary.md)의 미검증 범위도 함께 확인한다.

## 콘텐츠

- [ ] 실제 로고
- [ ] 상품명/설명/가격
- [ ] variant/재고
- [ ] 컬렉션
- [ ] 메뉴
- [ ] About / FAQ
- [ ] Shipping & Returns
- [ ] Privacy / Terms

## 글로벌

- [ ] Markets 확정
- [ ] 언어 publish
- [ ] 통화/가격 정책
- [ ] 배송 국가/요율
- [ ] 관부가세 안내
- [ ] 결제 provider 승인
- [ ] 결제수단별 실제 노출/거래 테스트

## 기술

- [ ] Theme Check PASS
- [ ] 주요 브라우저 smoke
- [ ] 모바일 smoke
- [ ] favicon/social image
- [ ] SEO title/description
- [ ] analytics consent 요구 확인
- [ ] 404 / redirects
- [ ] domain DNS
- [ ] SSL

## 운영

- [ ] 관리자 계정/권한
- [ ] 2FA
- [ ] order notification
- [ ] CS email
- [ ] refund/cancel SOP
- [ ] theme backup
- [ ] handover 완료

**Go-live 조건:** 외부 의존 항목을 포함한 모든 blocking 체크가 해소되고, 실제 merchant 계정에서 checkout smoke test가 완료되어야 한다.
