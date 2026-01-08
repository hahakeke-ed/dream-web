드림웹(Netlify) 하드닝 패치 안내

이 ZIP에는 다음 파일이 포함되어 있습니다.
1) netlify.toml        — 보안 헤더, CSP, 캐시 헤더 포함 (루트에 교체)
2) .gitignore          — 불필요 파일 커밋 방지 (루트에 추가/교체)
3) tailwind.config.js  — content 경로 오타 수정(libs→lib) (루트에 교체)

적용 방법
1. GitHub 레포 루트에 위 3개 파일을 그대로 복사/덮어쓰기 합니다.
2. 아래 미사용 항목은 레포에서 삭제하거나 이동하세요.
   - 루트 미사용 이미지: 20250801_151941.png, map.png, dream_logo.png, 약도.png
   - next-sitemap.config.js (이미 app/sitemap.ts 사용 중이면 삭제)
3. (선택) 패키지 정리
   npm remove @react-google-maps/api recharts
4. 커밋/푸시 후 Netlify에서 Deploy 실행
   - 필요 시 "Clear cache and deploy site"를 한 번 실행하여 헤더/CSP 반영을 확실히 합니다.

주의
- CSP를 더 강하게 적용하고 싶다면 외부 이미지/폰트를 /public으로 옮긴 뒤
  Content-Security-Policy의 허용 도메인을 축소하세요.
- 사이트가 HTTPS와 인증서가 완비된 도메인에서 서비스되는지 확인 후
  Strict-Transport-Security 헤더를 유지하세요.

문의
- 적용 중 오류나 경고가 있으면 배포 로그 첫 5줄을 공유해 주세요.
