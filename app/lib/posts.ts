export interface Post {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: '정신건강심리상담바우처(구 전국민 마음투자) 안내',
    date: '2026-01-25',
    thumbnail: '/voucher.png', 
    content: `
      2026년부터 '정신건강심리상담바우처'로 명칭이 변경되었습니다.
      드림 심리상담센터는 본 사업의 공식 서비스 제공 기관입니다.
      전문 자격증을 소지한 상담사들이 최상의 서비스를 제공합니다.
    `
  },
  {
    id: '2',
    title: '심리 상담을 시작하기 전 알아두면 좋은 것들',
    date: '2026-01-10',
    thumbnail: '/20250801_151941.png', 
    content: `
      상담은 자신을 만나는 소중한 시간입니다.
      전문적인 수퍼비전을 거치는 전문가와 함께하는 것이 중요합니다...
    `
  }
];
