import Link from 'next/link';

// 공지사항 데이터
const notices = [
  {
    id: 1,
    title: '드림심리상담센터 홈페이지 오픈 안내',
    date: '2026-01-08',
    content: '안녕하세요. 드림심리상담센터 홈페이지가 새롭게 오픈되었습니다. 많은 이용 부탁드립니다.'
  },
  {
    id: 2,
    title: '상담 예약 및 운영 시간 안내',
    date: '2026-01-09',
    content: '평일 오전 10시부터 오후 7시까지 운영합니다. 주말 상담은 사전 예약 필수입니다.'
  },
];

export default function NoticePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">공지사항</h1>
        <p className="text-gray-600">센터의 새로운 소식들을 전해드립니다.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {notices.map((notice) => (
            <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {notice.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {notice.date}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {notice.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
