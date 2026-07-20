# 드림심리상담센터 웹사이트

Next.js와 Netlify로 배포하는 드림심리상담센터 웹사이트입니다. 현재 버전은 기존 히어로 이미지를 유지하면서 밝고 차분한 색감, 공통 헤더/푸터, Google Sheets/Docs 기반 게시판으로 정리했습니다.

## 주요 변경

- 전체 사이트를 밝은 톤의 공통 레이아웃으로 정리
- 상담 서비스 하위 페이지를 공통 템플릿으로 통일
- Supabase 게시판과 비밀번호형 글쓰기 기능 제거
- Google Sheets 목록 + Google Docs 본문 방식의 게시판 추가
- Netlify CSP에 Google Docs 게시 문서 임베드 허용 추가
- 불필요한 패키지 의존성 정리

## 게시판 운영 방법

게시판은 Google Sheets 한 장과 Google Docs 문서들로 관리합니다.

### 1. Google Sheets 만들기

아래 열 이름으로 시트를 만듭니다. 첫 줄은 반드시 헤더로 사용하세요.

```csv
id,제목,날짜,분류,요약,문서URL,공개,고정
```

예시는 `BOARD_SHEET_TEMPLATE.csv` 파일을 참고하면 됩니다.

`id`는 비워도 됩니다. 비워두면 날짜와 제목으로 자동 생성됩니다. 하지만 글 주소를 오래 유지하고 싶다면 `voucher-2026`, `column-001`처럼 직접 넣는 것이 좋습니다.

### 2. Google Docs 본문 작성

각 글의 본문은 Google Docs에서 작성합니다.

1. Google Docs에서 글을 작성합니다.
2. `파일 > 공유 > 웹에 게시`를 선택합니다.
3. 게시된 문서 URL을 복사합니다.
4. Google Sheets의 `문서URL` 열에 붙여넣습니다.

Google Docs 문서는 공개 게시된 문서만 웹사이트 상세 페이지에 표시됩니다.

### 3. Google Sheets를 CSV로 게시

1. Google Sheets에서 `파일 > 공유 > 웹에 게시`를 선택합니다.
2. 게시 형식을 `쉼표로 구분된 값(.csv)`로 선택합니다.
3. 생성된 CSV URL을 복사합니다.

### 4. Netlify 환경변수 설정

Netlify 사이트 설정에서 아래 환경변수를 추가합니다.

```bash
GOOGLE_SHEET_CSV_URL=복사한_Google_Sheets_CSV_URL
```

환경변수 저장 후 Netlify에서 다시 배포하면 `/board`에 게시글이 표시됩니다. 게시글 목록은 약 5분 단위로 새로 반영되도록 설정되어 있습니다.

## 개발 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 배포

GitHub에 파일을 업로드한 뒤 Netlify가 연결되어 있으면 자동 배포됩니다. 환경변수 변경 후에는 `Clear cache and deploy site`로 다시 배포하는 것이 안전합니다.
