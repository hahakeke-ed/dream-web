
'use client';

import Link from 'next/link';

export default function ChildCounseling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
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
              <Link href="/couple" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">부부상담</Link>
              <Link href="/family" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">가족상담</Link>
              <Link href="/child" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">아동청소년</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://readdy.ai/api/search-image?query=Child%20and%20adolescent%20therapy%20session%20with%20professional%20child%20psychologist%2C%20colorful%20and%20child-friendly%20counseling%20room%20with%20toys%2C%20books%2C%20and%20comfortable%20seating%2C%20warm%20and%20safe%20environment%20for%20young%20clients&width=1200&height=600&seq=child-hero&orientation=landscape" 
            alt="아동청소년상담" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">아동/청소년 상담</h1>
          <p className="text-xl mb-8 text-purple-100">
            성장기 아이들의 마음을 이해하고<br />
            건강한 발달을 위한 전문적인 도움을 제공합니다
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
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">아동/청소년 상담이란?</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  아동과 청소년의 발달 단계에 맞는 전문적인 상담으로 정서적, 행동적, 
                  인지적 어려움을 해결하고 건강한 성장을 돕는 서비스입니다. 
                  놀이치료, 미술치료 등 다양한 기법을 활용합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">발달 단계별 맞춤 접근</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">다양한 치료 기법 활용</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">부모 협력 상담 병행</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Child-friendly%20therapy%20room%20with%20colorful%20decorations%2C%20toys%2C%20art%20supplies%2C%20comfortable%20play%20area%2C%20professional%20child%20counselor%20working%20with%20young%20client%20in%20safe%20and%20welcoming%20environment&width=600&height=400&seq=child-info&orientation=landscape" 
                  alt="아동상담 환경" 
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Age Groups */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">연령별 상담 프로그램</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                    <i className="ri-bear-smile-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-900">아동상담 (3-12세)</h3>
                    <p className="text-gray-600">놀이와 창의적 활동을 통한 치료</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">주요 특징</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 놀이치료 중심 접근</li>
                      <li>• 미술, 음악치료 활용</li>
                      <li>• 구체적이고 직관적 소통</li>
                      <li>• 부모 상담 병행</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">상담 영역</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 분리불안, 학교 적응</li>
                      <li>• 주의집중력 문제</li>
                      <li>• 사회성 발달</li>
                      <li>• 행동 문제</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <i className="ri-user-star-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-900">청소년상담 (13-18세)</h3>
                    <p className="text-gray-600">정체성 형성과 자립 준비 지원</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">주요 특징</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 대화 중심 상담</li>
                      <li>• 인지행동치료 적용</li>
                      <li>• 자율성과 독립성 존중</li>
                      <li>• 진로 탐색 지원</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">상담 영역</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 학습 부진, 진로 고민</li>
                      <li>• 또래 관계, 이성 문제</li>
                      <li>• 우울, 불안 증상</li>
                      <li>• 가족 갈등</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">주요 상담 영역</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-book-read-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">학습/학교 문제</h3>
                <p className="text-gray-600 mb-4">
                  학습 부진, 학교 적응, 시험 불안 등 학업과 관련된 어려움을 해결합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 학습 동기 부족</li>
                  <li>• 주의집중력 저하</li>
                  <li>• 시험 불안</li>
                  <li>• 등교 거부</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-group-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">또래 관계</h3>
                <p className="text-gray-600 mb-4">
                  친구 관계의 어려움, 따돌림, 사회성 부족 등을 개선하도록 돕습니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 친구 사귀기 어려움</li>
                  <li>• 왕따, 괴롭힘</li>
                  <li>• 사회성 부족</li>
                  <li>• 갈등 해결 능력</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-emotion-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">정서 조절</h3>
                <p className="text-gray-600 mb-4">
                  감정 표현과 조절 능력을 길러 정서적 안정감을 찾도록 지원합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 화 조절 어려움</li>
                  <li>• 우울감, 위축</li>
                  <li>• 불안, 두려움</li>
                  <li>• 감정 표현 부족</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-run-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">행동 문제</h3>
                <p className="text-gray-600 mb-4">
                  공격성, 충동성, 반항적 행동 등의 문제 행동을 개선합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• ADHD 관련 행동</li>
                  <li>• 공격적 행동</li>
                  <li>• 거짓말, 도벽</li>
                  <li>• 반항적 태도</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-compass-3-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">진로/정체성</h3>
                <p className="text-gray-600 mb-4">
                  자아 정체성 형성과 미래 진로 탐색을 위한 상담을 제공합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 진로 탐색</li>
                  <li>• 자아 정체성</li>
                  <li>• 목표 설정</li>
                  <li>• 자존감 향상</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-home-heart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-4">가족 관계</h3>
                <p className="text-gray-600 mb-4">
                  부모와 형제자매와의 관계 개선을 통해 가족 내 갈등을 해결합니다.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 부모와의 갈등</li>
                  <li>• 형제자매 경쟁</li>
                  <li>• 가족 규칙 적응</li>
                  <li>• 독립성 발달</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Therapy Methods */}
          <div className="mb-20 bg-gradient-to-br from-purple-50 to-violet-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">치료 기법</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-gamepad-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">놀이치료</h3>
                <p className="text-gray-600 text-sm">
                  아이들의 자연스러운 언어인 놀이를 통해 감정을 표현하고 치유합니다
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-palette-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">미술치료</h3>
                <p className="text-gray-600 text-sm">
                  그림과 만들기 활동을 통해 내면의 감정과 생각을 표현하고 탐색합니다
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-chat-3-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">인지행동치료</h3>
                <p className="text-gray-600 text-sm">
                  부정적인 사고와 행동 패턴을 인식하고 건강한 방향으로 변화시킵니다
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-parent-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">부모상담</h3>
                <p className="text-gray-600 text-sm">
                  부모님께 자녀 이해와 양육 방법에 대한 전문적인 조언을 제공합니다
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">아동/청소년 상담 진행 과정</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-parent-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">1단계: 부모 면담</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  부모님과의 상담을 통해 자녀의 상황을 자세히 파악합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-smile-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">2단계: 아동 평가</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  아이와의 만남을 통해 심리 상태와 발달 수준을 평가합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-add-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">3단계: 치료 진행</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  아이에게 맞는 치료 기법으로 꾸준한 상담을 진행합니다
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-trophy-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">4단계: 성과 공유</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  부모님과 상담 진행 상황을 공유하고 가정에서의 지원 방안을 논의합니다
                </p>
              </div>
            </div>
          </div>

          {/* Parent Guidelines */}
          <div className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">부모님을 위한 안내</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-6">상담 전 준비사항</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">아이의 문제 상황을 구체적으로 기록해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">아이에게 상담에 대해 긍정적으로 설명해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">가족력이나 발달 과정에 대한 정보를 준비해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">상담에 대한 기대와 목표를 명확히 해주세요</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-6">상담 중 협력방안</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">정기적인 부모 상담에 적극적으로 참여해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">가정에서의 변화나 특이사항을 공유해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">상담사의 조언을 가정에서도 꾸준히 적용해주세요</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">아이의 변화를 인정하고 격려해주세요</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-indigo-900 text-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">아동/청소년 상담 시작하기</h2>
            <p className="text-xl mb-8 text-indigo-200">
              우리 아이의 건강한 성장을 위한 전문적인 도움을 받아보세요
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400 transition-colors cursor-pointer whitespace-nowrap">
                카카오채널 예약 예약
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-900 transition-colors cursor-pointer whitespace-nowrap">
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
