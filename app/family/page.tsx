
'use client';

import Link from 'next/link';

export default function FamilyCounseling() {
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
                <h1 className="text-2xl font-[\\\'Pacifico\\\''] text-amber-400 leading-tight">드림심리상담센터</h1>
                <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">홈</Link>
              <Link href="/individual" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">개인상담</Link>
              <Link href="/couple" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">부부상담</Link>
              <Link href="/family" className="text-slate-100 font-medium hover:text-amber-400 transition-colors cursor-pointer">가족상담</Link>
              <Link href="/child" className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">아동청소년</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-800 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://readdy.ai/api/search-image?query=Happy%20multi-generational%20family%20sitting%20together%20in%20comfortable%20family%20therapy%20session%2C%20professional%20counselor%20facilitating%20conversation%2C%20warm%20and%20welcoming%20therapy%20office%20with%20family-friendly%20atmosphere&width=1200&height=600&seq=family-hero&orientation=landscape" 
            alt="가족상담" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">가족상담</h1>
          <p className="text-xl mb-8 text-slate-300">
            가족 구성원 모두가 함께<br />
            화목하고 행복한 가정을 만들어가세요
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
                <h2 className="text-3xl font-bold text-slate-100 mb-6">가족상담이란?</h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  가족상담은 가족 구성원 전체 또는 일부가 참여하여 가족 내의 갈등을 해결하고 
                  건강한 가족 관계를 구축하는 전문적인 상담 서비스입니다. 
                  세대 간의 이해를 돕고 가족의 유대감을 강화합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">전체 가족 시스템 접근</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">세대 간 소통 개선</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-300">가족 규칙과 역할 재정립</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20family%20therapy%20session%20in%20comfortable%20counseling%20room%2C%20therapist%20working%20with%20parents%20and%20children%20together%2C%20warm%20atmosphere%20with%20circular%20seating%20arrangement%2C%20family-oriented%20therapy%20environment&width=600&height=400&seq=family-info&orientation=landscape" 
                  alt="가족상담 환경" 
                  className="w-full rounded-2xl shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Types of Family Counseling */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">가족상담 유형</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-group-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">전체 가족상담</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  가족 구성원 모두가 참여하여 전반적인 가족 관계와 소통을 개선하는 상담입니다.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <div className="font-semibold text-emerald-400 mb-2">대상</div>
                    <ul className="text-slate-300 space-y-1">
                      <li>• 부모와 자녀</li>
                      <li>• 확대가족</li>
                      <li>• 모든 구성원</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <div className="font-semibold text-emerald-400 mb-2">효과</div>
                    <ul className="text-slate-300 space-y-1">
                      <li>• 전체적 이해</li>
                      <li>• 시스템 변화</li>
                      <li>• 역할 명확화</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-parent-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">부분 가족상담</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  특정 구성원들 간의 관계 개선에 집중하여 진행하는 맞춤형 상담입니다.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <div className="font-semibold text-blue-400 mb-2">대상</div>
                    <ul className="text-slate-300 space-y-1">
                      <li>• 부모-자녀</li>
                      <li>• 형제자매</li>
                      <li>• 조부모-손자</li>
                    </ul>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <div className="font-semibold text-blue-400 mb-2">효과</div>
                    <ul className="text-slate-300 space-y-1">
                      <li>• 집중적 해결</li>
                      <li>• 깊이 있는 상담</li>
                      <li>• 단계적 확장</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">주요 상담 영역</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-sword-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">가족 갈등</h3>
                <p className="text-slate-400 mb-4">
                  가족 구성원 간의 갈등을 중재하고 평화로운 해결책을 찾습니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 부모-자녀 갈등</li>
                  <li>• 형제자매 갈등</li>
                  <li>• 세대 갈등</li>
                  <li>• 가치관 차이</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-message-3-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">의사소통 문제</h3>
                <p className="text-slate-400 mb-4">
                  가족 간의 건강한 소통 방법을 익히고 대화 문화를 개선합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 대화 부족</li>
                  <li>• 감정 표현 어려움</li>
                  <li>• 세대 간 소통 격차</li>
                  <li>• 비난과 비판</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-user-settings-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">역할과 경계</h3>
                <p className="text-slate-400 mb-4">
                  가족 내 역할을 명확히 하고 건강한 경계를 설정합니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 역할 혼란</li>
                  <li>• 경계 침범</li>
                  <li>• 책임 분담</li>
                  <li>• 자율성 존중</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-seedling-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">자녀 양육</h3>
                <p className="text-slate-400 mb-4">
                  일관된 양육 방식을 설정하고 자녀의 건강한 성장을 돕습니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 양육 방식 통일</li>
                  <li>• 훈육 방법</li>
                  <li>• 학습 지도</li>
                  <li>• 진로 고민</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-refresh-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">생활 변화 적응</h3>
                <p className="text-slate-400 mb-4">
                  가족의 변화나 위기 상황에 건강하게 적응하도록 돕습니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 이사, 이직</li>
                  <li>• 질병, 상실</li>
                  <li>• 결혼, 출산</li>
                  <li>• 은퇴, 독립</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all">
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-hearts-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">유대감 강화</h3>
                <p className="text-slate-400 mb-4">
                  가족의 정서적 유대감을 깊게 하고 소속감을 증진시킵니다.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• 가족 시간 늘리기</li>
                  <li>• 전통과 의례</li>
                  <li>• 감정적 지지</li>
                  <li>• 공동 목표 설정</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20 bg-gradient-to-br from-slate-800 to-gray-800 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">가족상담 진행 과정</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">가족 평가</h3>
                <p className="text-slate-400 text-sm">가족 구조와 역학 관계를 종합적으로 평가</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">문제 확인</h3>
                <p className="text-slate-400 text-sm">핵심 문제와 개선 목표를 함께 설정</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">개입 계획</h3>
                <p className="text-slate-400 text-sm">가족 특성에 맞는 상담 전략 수립</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">변화 실행</h3>
                <p className="text-slate-400 text-sm">체계적인 개입을 통한 관계 개선</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">5</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">유지 관리</h3>
                <p className="text-slate-400 text-sm">지속적인 변화와 성장 지원</p>
              </div>
            </div>
          </div>

          {/* Age-specific Approaches */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">연령별 접근법</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-600">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-bear-smile-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">유아기 가족 (0-6세)</h3>
                <p className="text-slate-400 mb-4">
                  놀이를 통한 상호작용과 애착 관계 형성에 중점을 둡니다.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>• 놀이 치료 활용</li>
                  <li>• 부모-자녀 상호작용</li>
                  <li>• 애착 관계 강화</li>
                  <li>• 기본 규칙 설정</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-600">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-book-open-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">학령기 가족 (7-12세)</h3>
                <p className="text-slate-400 mb-4">
                  학교 적응과 학습, 친구 관계 등에 대한 지원을 제공합니다.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>• 학습 동기 부여</li>
                  <li>• 또래 관계 지원</li>
                  <li>• 책임감 학습</li>
                  <li>• 감정 표현 교육</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-600">
                <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-user-star-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">청소년기 가족 (13-18세)</h3>
                <p className="text-slate-400 mb-4">
                  독립성과 정체성 형성을 지원하며 세대 간 이해를 돕습니다.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>• 자율성 존중</li>
                  <li>• 진로 탐색 지원</li>
                  <li>• 갈등 조정</li>
                  <li>• 미래 계획 수립</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800 text-white p-12 rounded-3xl border border-slate-600">
            <h2 className="text-3xl font-bold mb-6">가족상담 시작하기</h2>
            <p className="text-xl mb-8 text-slate-300">
              화목하고 행복한 가정을 만들기 위한 여정을 함께 시작해보세요
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors cursor-pointer whitespace-nowrap">
                카카오채널 예약
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap">
                전화 상담 053-759-1282
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
              <h3 className="text-2xl font-[\\\'Pacifico\\\''] text-amber-400 leading-tight">드림심리상담센터</h3>
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
