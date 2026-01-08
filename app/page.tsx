import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* 1. 메인 배너 섹션 (시티뷰 배경) */}
      <div className="relative h-[600px] w-full bg-gray-900">
        {/* 배경 이미지 */}
        <Image
          src="/images/counseling_room.jpg"
          alt="드림심리상담센터 전경"
          fill
          className="object-cover opacity-50"
          priority
        />
        
        {/* 배너 텍스트 */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            마음이 쉬어가는 곳, <br/>
            <span className="text-orange-400">드림심리상담센터</span>입니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow-md">
            전문성과 따뜻함으로 당신의 마음에 귀 기울이겠습니다.<br/>
            한국상담심리학회 1급 전문가가 함께합니다.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="/about"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              센터 소개
            </Link>
            <Link 
              href="/program/voucher"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              바우처 안내
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 주요 프로그램 요약 */}
      <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">전문 심리상담 프로그램</h2>
          <p className="text-gray-600 mt-3">나에게 꼭 필요한 상담 서비스를 확인해보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 카드 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧑‍⚕️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">개인 심리상담</h3>
            <p className="text-gray-600 mb-6">
              우울, 불안, 대인관계 등 마음의 어려움을<br/>전문가와 1:1로 나눕니다.
            </p>
            <Link href="/counseling" className="text-blue-600 font-medium hover:underline">자세히 보기 →</Link>
          </div>

          {/* 카드 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">아동/청소년 상담</h3>
            <p className="text-gray-600 mb-6">
              놀이치료와 청소년 상담을 통해<br/>아이들의 건강한 성장을 돕습니다.
            </p>
            <Link href="/counseling" className="text-orange-500 font-medium hover:underline">자세히 보기 →</Link>
          </div>

          {/* 카드 3 (바우처) */}
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all text-center group">
             <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">지원사업</div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💳</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">정신건강 바우처</h3>
            <p className="text-gray-600 mb-6">
              정부 지원으로 부담 없이<br/>전문 상담 서비스를 받아보세요.
            </p>
            <Link href="/program/voucher" className="text-red-500 font-medium hover:underline">자세히 보기 →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
