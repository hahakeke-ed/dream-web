import Image from 'next/image';

export default function VoucherPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-10 rounded-r-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          정신건강 심리상담 바우처
        </h1>
        <p className="text-orange-700 font-medium">
          (구) 전국민 마음투자 지원사업이 새로운 이름으로 함께합니다.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        {/* 포스터 이미지 영역 */}
        <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[800px] bg-gray-50">
          <Image
            src="/images/voucher.jpg"
            alt="정신건강 심리상담 바우처 안내 포스터"
            fill
            className="object-contain"
          />
        </div>

        {/* 텍스트 안내 영역 */}
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">📢 지원 내용 안내</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>
                <strong>지원 대상:</strong> 정신건강복지센터, 정신의료기관 등에서 심리상담이 필요하다고 인정하는 자 등
              </li>
              <li>
                <strong>지원 내용:</strong> 전문 심리상담 서비스 총 8회 제공 (회당 50분 이상)
              </li>
              <li>
                <strong>지원 금액:</strong> <span className="text-red-500 font-bold">최대 64만원</span> ~ 최소 28만원 지원 (소득별 차등)
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-center font-semibold text-gray-700">
              신청 기간: 2026.01.01 ~ 12.31 (예산 소진 시 마감) <br/>
              신청 방법: 읍/면/동 행정복지센터 방문 또는 복지로 온라인 신청
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
