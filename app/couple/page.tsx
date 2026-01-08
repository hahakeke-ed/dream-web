
'use client';

import Link from 'next/link';

export default function CoupleCounseling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20psychology%20counseling%20center%20logo%20with%20brain%20and%20heart%20symbol%2C%20modern%20minimalist%20design%2C%20warm%20colors%20with%20blue%20and%20amber%20accents%2C%20mental%20health%20therapy%20icon%2C%20clean%20geometric%20style&width=60&height=60&seq=header-logo&orientation=squarish" 
                alt="드림심리상담센터 로고" 
                className="w-12 h-12 object-cover object-top rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-[\\\'Pacifico\\\'] text-amber-400 leading-tight">드림심리상담센터</h1>
                <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">홈</Link>
              <Link href="/individual" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">개인상담</Link>
              <Link href="/couple" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">부부상담</Link>
              <Link href="/family" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">가족상담</Link>
              <Link href="/child" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">아동청소년</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-800 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://readdy.ai/api/search-image?query=Happy%20couple%20sitting%20together%20in%20comfortable%20counseling%20office%20environment%2C%20warm%20and%20supportive%20atmosphere%20with%20professional%20therapist%2C%20relationship%20counseling%20session%20with%20soft%20lighting%20and%20peaceful%20setting&width=1200&height=600&seq=couple-hero&orientation=landscape" 
            alt="부부상담" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">부부상담</h1>
          <p className="text-xl mb-8 text-slate-300">
            서로를 이해하고 소통하며<br />
            더 깊고 건강한 관계를 만들어가세요
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-6">부부상담이란?</h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  부부상담은 두 사람이 함께 참여하여 관계의 어려움을 해결하고 
                  더 나은 관계를 만들어가는 전문적인 상담 서비스입니다. 
                  갈등을 건설적으로 해결하고 서로에 대한 이해와 사랑을 깊게 합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">중립적이고 안전한 소통 공간</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">체계적인 관계 개선 프로그램</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">전문 상담사의 객관적 중재</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20couple%20therapy%20session%20in%20modern%20counseling%20office%20with%20comfortable%20seating%20arrangement%2C%20warm%20atmosphere%2C%20therapist%20guiding%20conversation%20between%20married%20couple%2C%20peaceful%20and%20supportive%20environment&width=600&height=400&seq=couple-info&orientation=landscape" 
                  alt="부부상담 환경" 
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">주요 상담 영역</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-chat-4-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">의사소통 개선</h3>
                <p className="text-slate-400 mb-4">
                  서로의 마음을 제대로 전달하고 이해하는 건강한 소통 방법을 배웁니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 경청 기술 향상</li>
                  <li>• 감정 표현 방법</li>
                  <li>• 비판적 소통 개선</li>
                  <li>• 공감대 형성</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-scales-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">갈등 해결</h3>
                <p className="text-slate-400 mb-4">
                  반복되는 갈등의 패턴을 파악하고 건설적인 해결 방법을 찾습니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 갈등 원인 분석</li>
                  <li>• 협상 기술</li>
                  <li>• 타협점 찾기</li>
                  <li>• 화해와 용서</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-heart-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">친밀감 회복</h3>
                <p className="text-slate-400 mb-4">
                  감정적, 신체적 친밀감을 회복하고 더 깊은 유대감을 형성합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 감정적 연결 강화</li>
                  <li>• 로맨스 회복</li>
                  <li>• 신뢰 재구축</li>
                  <li>• 친密한 대화</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">신뢰 구축</h3>
                <p className="text-slate-400 mb-4">
                  깨진 신뢰를 회복하고 서로에 대한 믿음을 다시 쌓아갑니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 신뢰 손상 요인 분석</li>
                  <li>• 투명한 소통</li>
                  <li>• 약속 이행</li>
                  <li>• 관계 재정의</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-parent-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">육아 협력</h3>
                <p className="text-slate-400 mb-4">
                  자녀 양육에 대한 일관된 방향을 설정하고 협력하는 방법을 배웁니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 육아 방식 조율</li>
                  <li>• 역할 분담</li>
                  <li>• 교육관 통일</li>
                  <li>• 스트레스 분산</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">경제적 갈등</h3>
                <p className="text-slate-400 mb-4">
                  돈 문제로 인한 갈등을 해결하고 합리적인 재정 관리 방안을 모색합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 금전 가치관 조율</li>
                  <li>• 가계 관리 방법</li>
                  <li>• 소비 패턴 분석</li>
                  <li>• 미래 계획 수립</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20 bg-gradient-to-br from-slate-800 to-gray-800 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">부부상담 진행 과정</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-heart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">1단계: 관계 진단</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  현재 관계 상태를 파악하고 주요 문제점을 확인합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-road-map-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">2단계: 목표 설정</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  두 사람이 함께 원하는 관계의 모습을 명확히 합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-hammer-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">3단계: 관계 개선</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  체계적인 상담 기법으로 관계 개선 작업을 진행합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-hearts-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">4단계: 유지 강화</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  개선된 관계를 유지하고 지속 발전시키는 방법을 익힙니다
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">부부상담의 효과</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">단기 효과</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">갈등 상황에서의 감정 조절 능력 향상</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">서로의 관점을 이해하는 능력 개발</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">효과적인 의사소통 방법 습득</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">관계 스트레스 감소</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">장기 효과</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">안정적이고 만족스러운 관계 유지</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">안정적이고 만족스러운 관계 유지</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">미래 갈등 예방 능력</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">가족 전체의 행복감 증진</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800 text-white p-12 rounded-3xl border border-slate-600">
            <h2 className="text-3xl font-bold mb-6">부부상담 시작하기</h2>
            <p className="text-xl mb-8 text-slate-300">
              더 건강하고 행복한 관계를 위한 첫 걸음을 내딛어보세요
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-500 transition-colors cursor-pointer whitespace-nowrap">
                카카오채널 예약
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap">
                전화 예약 053-759-1282
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20psychology%20counseling%20center%20logo%20with%20brain%20and%20heart%20symbol%2C%20modern%20minimalist%20design%2C%20warm%20colors%20with%20blue%20and%20amber%20accents%2C%20mental%20health%20therapy%20icon%2C%20clean%20geometric%20style&width=60&height=60&seq=footer-logo&orientation=squarish" 
              alt="드림심리상담센터 로고" 
              className="w-10 h-10 object-cover object-top rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-[\\\'Pacifico\\\'] text-amber-400 leading-tight">드림심리상담센터</h3>
              <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
            </div>
          </div>
          <p className="text-slate-400 mb-8">전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다.</p>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">&copy; 2024 드림심리상담센터. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
