'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <i className="ri-heart-3-line text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100">드림심리상담센터</h1>
                <p className="text-sm text-amber-400">전문 심리상담 서비스</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">홈</Link>
              <Link href="/counseling" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">심리상담</Link>
              <Link href="/test" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">심리검사</Link>
              <Link href="/support" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">전국민마음투자지원사업</Link>
              <Link href="/eap" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">EAP 기업심리상담</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://readdy.ai/api/search-image?query=Peaceful%20therapy%20office%20environment%2C%20comfortable%20seating%2C%20warm%20lighting%2C%20plants%2C%20and%20calming%20atmosphere%2C%20professional%20counseling%20space%20with%20modern%20interior%20design%2C%20soft%20pastel%20colors%2C%20minimalist%20zen-like%20setting%20with%20natural%20elements&width=1200&height=600&seq=hero-bg&orientation=landscape" 
            alt="상담 환경" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            마음의 치유, <br />
            <span className="text-amber-400">새로운 시작</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
            전문적이고 따뜻한 심리상담으로 <br />
            당신의 마음을 돌봅니다
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-colors cursor-pointer whitespace-nowrap">
              상담 문의하기
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap">
              서비스 둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">상담 문의 및 예약</h2>
          <p className="text-xl mb-12 text-slate-300">
            전문 상담사와 함께 마음의 치유 여정을 시작해보세요
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* KakaoTalk */}
            <div className="bg-amber-500 text-gray-900 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">카카오톡 상담</h3>
              <p className="mb-6 text-gray-800">
                24시간 언제든지 편리하게 <br />
                상담 문의 및 예약을 하실 수 있습니다
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                @드림심리상담센터
              </button>
            </div>
            {/* Phone */}
            <div className="bg-slate-700 text-white p-8 rounded-2xl border border-slate-600">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">전화 상담</h3>
              <p className="mb-6 text-slate-300">
                직접 통화를 통해 <br />
                상세한 상담 안내를 받으실 수 있습니다
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
                053-759-1282
              </button>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-12 p-8 bg-slate-900 rounded-xl border border-slate-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Location Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">오시는 길</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  대구광역시 수성구 동대구로 346<br />
                  범 위해서 오피스텔
                </p>
                <div className="mt-4">
                  <a
                    href="https://map.naver.com/p/search/%EB%93%9C%EB%A6%BC%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0/place/38462793?c=15.00,0,0,0,dh&placePath=/home?entry=bmp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://ssl.pstatic.net/static/maps/m/p_static_map_200_200.png"
                      alt="네이버지도"
                      className="w-48 h-32 object-cover rounded-lg mx-auto md:mx-0 cursor-pointer border border-amber-600 hover:opacity-90"
                    />
                  </a>
                  <p className="mt-2 text-sm text-amber-400">클릭하면 네이버지도로 이동</p>
                </div>
                <div className="mt-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-100">운영 시간</h3>
                  <p className="text-slate-400 text-sm">1:1 예약 문의</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <i className="ri-heart-3-line text-white text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">드림심리상담센터</h3>
          </div>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다. <br />
            건강한 마음, 행복한 삶을 위한 동반자가 되겠습니다.
          </p>
          <div className="text-slate-400 mb-8">
            <p>대구광역시 수성구 동대구로 346 범 위해서 오피스텔</p>
            <p>전화: 053-759-1282</p>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">&copy; 2024 드림심리상담센터. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
