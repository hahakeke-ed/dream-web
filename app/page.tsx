'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="/20250801_151941.png"
            alt="드림심리상담센터 로고"
            className="h-12 md:h-14 w-auto block"
          />
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">홈</Link>
            <Link href="/counseling" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">심리상담</Link>
            <Link href="/test" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">심리검사</Link>
            <Link href="/support" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">전국민마음투자지원사업</Link>
            <Link href="/eap" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">EAP 기업심리상담</Link>
          </nav>
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

      {/* Services Overview */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">검증된 전문가 집단</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              한국심리학회 인증 전문가들이 석박사 학위와 전문 자격증을 바탕으로 최고 수준의 심리상담 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Professional Credentials */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">전문 자격 인증</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">상담심리사 1급, 2급 자격 소지</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">임상심리사 1급 전문가</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">한국심리학회 정회원</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">지속적인 전문성 개발 교육 이수</span>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">학문적 전문성</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">심리학 석사/박사 학위 소지</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">상담심리/임상심리 전공</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-slate-300">한국심리학회 수련감독 전문가로 구성</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Associations */}
          <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 p-8 rounded-2xl border border-slate-700 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">전문 학회 소속</h3>
              <p className="text-slate-400">엄격한 심사를 통해 인증받은 전문가들로 구성</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="https://krcpa.or.kr/user/new/index.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 p-6 bg-slate-700 rounded-xl border border-slate-600 hover:bg-slate-600 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100">한국상담심리학회</h4>
                  <p className="text-sm text-slate-400">상담심리사 자격 검증 기관</p>
                </div>
              </a>
              <a 
                href="https://www.kcp.or.kr/new/intro.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 p-6 bg-slate-700 rounded-xl border border-slate-600 hover:bg-slate-600 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100">한국임상심리학회</h4>
                  <p className="text-sm text-slate-400">임상심리사 자격 검증 기관</p>
                </div>
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Individual Counseling */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl hover:shadow-lg border border-slate-700 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-user-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">개인상담</h3>
              <div className="text-xs text-amber-400 mb-3 font-semibold">
                상담심리사 • 임상심리사
              </div>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• 우울/불안 상담</li>
                <li>• 스트레스 관리</li>
                <li>• 자존감 향상</li>
                <li>• 대인관계 개선</li>
              </ul>
            </div>

            {/* Couple Counseling */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl hover:shadow-lg border border-slate-700 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-heart-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">부부상담</h3>
              <div className="text-xs text-amber-400 mb-3 font-semibold">
                가족상담 전문가
              </div>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• 의사소통 개선</li>
                <li>• 갈등 해결</li>
                <li>• 친밀감 회복</li>
                <li>• 신뢰 구축</li>
              </ul>
            </div>

            {/* Family Counseling */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl hover:shadow-lg border border-slate-700 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-group-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">가족상담</h3>
              <div className="text-xs text-amber-400 mb-3 font-semibold">
                가족치료 전문가
              </div>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• 가족 갈등 중재</li>
                <li>• 세대 간 소통</li>
                <li>• 역할 재정립</li>
                <li>• 가족 유대감 강화</li>
              </ul>
            </div>

            {/* Child/Adolescent Counseling */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl hover:shadow-lg border border-slate-700 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-bear-smile-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">아동/청소년상담</h3>
              <div className="text-xs text-amber-400 mb-3 font-semibold">
                아동청소년 전문가
              </div>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• 학습/학교 적응</li>
                <li>• 또래 관계</li>
                <li>• 정서 조절</li>
                <li>• 행동 문제</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">상담 진행 과정</h2>
            <p className="text-lg text-slate-400">체계적이고 전문적인 상담 프로세스를 따릅니다</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <div className="hidden md:block absolute top-10 left-20 w-32 h-0.5 bg-slate-600"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">초기 상담</h3>
              <p className="text-slate-400">문제 파악 및 상담 목표 설정</p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <div className="hidden md:block absolute top-10 left-20 w-32 h-0.5 bg-slate-600"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">심층 분석</h3>
              <p className="text-slate-400">전문적 평가 및 상담 계획 수립</p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <div className="hidden md:block absolute top-10 left-20 w-32 h-0.5 bg-slate-600"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">집중 상담</h3>
              <p className="text-slate-400">맞춤형 상담 기법 적용</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">효과 평가</h3>
              <p className="text-slate-400">상담 성과 점검 및 지속 관리</p>
            </div>
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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Location Details */}
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-100">오시는 길</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    대구광역시 수성구 동대구로 346<br />
                    범 위해서 오피스텔
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-100">운영 시간</h3>
                  <p className="text-slate-400 text-sm">
                    평일 09:00 - 18:00<br />
                    토요일 09:00 - 13:00<br />
                    일요일/공휴일 휴무
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <i className="ri-heart-pulse-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-100">응급 상담</h3>
                  <p className="text-slate-400 text-sm">
                    위기 상황 시<br />
                    24시간 긴급 상담 가능
                  </p>
                </div>
              </div>

              {/* Naver Map */}
              <div className="w-full">
                <div className="bg-white rounded-xl p-4">
                  <iframe
                    src="https://naver.me/5gFZMeYR"
                    width="100%"
                    height="300"
                    style={{border: 0, borderRadius: '8px'}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="드림심리상담센터 위치"
                  ></iframe>
                  <div className="mt-3 text-center">
                    <a
                      href="https://map.naver.com/p/search/%EB%93%9C%EB%A6%BC%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0/place/38462793?c=15.00,0,0,0,dh&placePath=/home?entry=bmp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-800 font-medium cursor-pointer"
                    >
                      <i className="ri-external-link-line text-lg"></i>
                      <span>네이버지도에서 크게 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/20250801_151941.png"
              alt="드림심리상담센터 로고"
              className="h-12 md:h-14 w-auto block mx-auto"
            />
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
            <p className="text-slate-500">&copy; 2011 드림심리상담센터. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
