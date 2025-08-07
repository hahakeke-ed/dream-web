'use client';

import Link from 'next/link';

export default function IndividualCounseling() {
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
                <h1 className="text-2xl font-[\\\\\\\'Pacifico\\\\\\\'] text-amber-400 leading-tight">드림심리상담센터</h1>
                <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">홈</Link>
              <Link href="/individual" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">개인상담</Link>
              <Link href="/couple" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">부부상담</Link>
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
            src="https://readdy.ai/api/search-image?query=Individual%20therapy%20session%20with%20professional%20therapist%20and%20client%20sitting%20in%20comfortable%20chairs%20facing%20each%20other%20in%20modern%20counseling%20office%2C%20calm%20atmosphere%2C%20warm%20lighting%2C%20plants%20and%20books%2C%20professional%20setting%20with%20gentle%20conversation&width=1200&height=600&seq=individual-hero&orientation=landscape" 
            alt="개인 咨询" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">개인 상담</h1>
          <p className="text-xl mb-8 text-slate-300">
            당신 혼자를 위한 맞춤형 심리상담으로<br />
            마음의 어려움을 함께 해결해나갑니다
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
                <h2 className="text-3xl font-bold text-slate-100 mb-6">개인상담이란?</h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  개인상담은 일대일 상담을 통해 개인이 경험하는 심리적, 정서적 어려움을 
                  전문적으로 도와드리는 서비스입니다. 안전하고 따뜻한 상담 공간에서 
                  자신의 마음을 깊이 탐색하고 건강한 변화를 만들어갑니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">개인 맞춤형 상담 계획</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">완전한 비밀보장</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">전문 상담사의 체계적 접근</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20female%20therapist%20in%20modern%20counseling%20office%20with%20warm%20lighting%2C%20comfortable%20seating%20area%20with%20soft%20cushions%2C%20plants%2C%20bookshelves%2C%20peaceful%20atmosphere%2C%20individual%20therapy%20setting%20with%20gentle%20ambiance&width=600&height=400&seq=individual-info&orientation=landscape" 
                  alt="상담실 환경" 
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">주요 상담 영역</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-emotion-sad-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">우울증 상담</h3>
                <p className="text-slate-400 mb-4">
                  지속되는 우울감, 무기력감, 절망감 등의 우울 증상을 전문적으로 상담합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 기분 장애 개선</li>
                  <li>• 생활 의욕 회복</li>
                  <li>• 긍정적 사고 훈련</li>
                  <li>• 일상 리듬 회복</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-alarm-warning-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">불안장애 상담</h3>
                <p className="text-slate-400 mb-4">
                  과도한 걱정, 공황발작, 사회불안 등 다양한 불안 증상을 다룹니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 불안 증상 완화</li>
                  <li>• 이완 기법 습득</li>
                  <li>• 인지 재구성</li>
                  <li>• 두려움 극복</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-flashlight-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">스트레스 관리</h3>
                <p className="text-slate-400 mb-4">
                  업무, 학업, 대인관계로 인한 스트레스를 효과적으로 관리하는 방법을 배웁니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 스트레스 원인 분석</li>
                  <li>• 대처 방법 학습</li>
                  <li>• 감정 조절 훈련</li>
                  <li>• 번아웃 예방</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-heart-add-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">자존감 향상</h3>
                <p className="text-slate-400 mb-4">
                  낮은 자존감, 자신감 부족, 열등감 등을 극복하고 건강한 자아상을 형성합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 자기 수용 능력 향상</li>
                  <li>• 긍정적 자아상 구축</li>
                  <li>• 자신감 회복</li>
                  <li>• 자기 주장 훈련</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-group-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">대인관계 개선</h3>
                <p className="text-slate-400 mb-4">
                  타인과의 건강한 관계 형성과 유지, 소통 능력 향상을 위한 상담을 제공합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 의사소통 기술 향상</li>
                  <li>• 갈등 해결 능력</li>
                  <li>• 경계 설정</li>
                  <li>• 친밀감 형성</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">자기계발</h3>
                <p className="text-slate-400 mb-4">
                  개인의 성장과 발전을 위한 목표 설정, 동기 부여, 라이프 코칭을 제공합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 목표 설정 및 달성</li>
                  <li>• 동기 부여</li>
                  <li>• 습관 개선</li>
                  <li>• 잠재력 개발</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20 bg-gradient-to-br from-slate-800 to-gray-800 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">개인상담 진행 과정</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-chat-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">1단계: 초기 면담</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  현재 상황과 어려움을 파악하고 상담 목표를 함께 설정합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-search-eye-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">2단계: 심층 탐색</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  문제의 근본 원인을 탐색하고 개인의 특성을 깊이 이해합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-tools-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">3단계: 해결 작업</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  맞춤형 상담 기법을 적용하여 구체적인變化 작업을 진행합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-trophy-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">4단계: 통합 정리</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  상담 성과를 정리하고 지속적인 성장을 위한 계획을 세웁니다
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800 text-white p-12 rounded-3xl border border-slate-600">
            <h2 className="text-3xl font-bold mb-6">개인상담 시작하기</h2>
            <p className="text-xl mb-8 text-slate-300">
              전문 상담사와 함께 마음의 치유 여정을 시작해보세요
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-colors cursor-pointer whitespace-nowrap">
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
              <h3 className="text-2xl font-[\\\\\\\'Pacifico\\\\\\\'] text-amber-400 leading-tight">드림심리상담센터</h3>
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
