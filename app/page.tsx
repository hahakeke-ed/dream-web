
'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      id: 'home',
      name: '홈',
      href: '/',
      description: '드림심리상담센터 메인 페이지입니다. 전체적인 서비스紹介와 상담 프로그램을 확인할 수 있습니다.'
    },
    {
      id: 'counseling',
      name: '심리상담',
      href: '/counseling',
      description: '심리상담전문가(한국심리학회 상담심리사1급)와 1:1 심리상담을 통해 심리적 적응과 성장을 돕습니다.'
    },
    {
      id: 'psychological-test',
      name: '심리검사',
      href: '/psychological-test',
      description: '임상심리전문가(한국심리학회 임상심리사 1급)가 직접 시행하는 종합심리검사(full battery 검사)를 통해 개인의 강점과 특성, 위험요인을 정확히 발견합니다. 임상 장면과 동일한 자격자가 동일한 검사를 시행하며 충분한 해석상담을 받을 수 있습니다.'
    },
    {
      id: 'national-support',
      name: '전국민마음투자지원사업',
      href: '/national-support',
      description: '우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공하는 정부 사업입니다. 학교나 정신건강복지센터, 청소년상담복지센터, 병의원 의뢰서 등을 통해신청할 수 있습니다.'
    },
    {
      id: 'eap',
      name: 'EAP 기업심리상담',
      href: '/eap',
      description: '본 기관과 연계된 기업체 임직원 및 가족에 대한 심리상담 서비스를 제공합니다.'
    }
  ];

  const handleMenuClick = (menuId: string, href: string) => {
    if (menuId === 'home') {
      window.location.reload();
      return;
    }

    if (activeTooltip === menuId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(menuId);
    }
  };

  const getTooltipArrowPosition = (menuId: string) => {
    const menuIndex = menuItems.findIndex(item => item.id === menuId);
    if (menuIndex === -1) return 'left-8';

    // 各メニュー別に位置を計算
    const positions = ['left-6', 'left-28', 'left-56', 'left-96', 'left-[140px]'];
    return positions[menuIndex] || 'left-6';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700 relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20psychology%20counseling%20center%20logo%20with%20brain%20and%20heart%20symbol%2C%20modern%20minimalist%20design%2C%20warm%20colors%20with%20blue%20and%20amber%20accents%2C%20mental%20health%20therapy%20icon%2C%20clean%20geometric%20style&width=60&height=60&seq=header-logo&orientation=squarish" 
                alt="드림심리상담센터 로고" 
                className="w-12 h-12 object-cover object-top rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-[\'Pacifico\'] text-amber-400 leading-tight">드림심리상담센터</h1>
                <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 relative" ref={navRef}>
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleMenuClick(item.id, item.href)}
                    className={`${item.id === 'home' ? 'text-slate-100 font-medium' : 'text-slate-300'} hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap`}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
              {/* Tooltip - positioned relative to entire nav */}
              {activeTooltip && (
                <div className="absolute top-full left-0 right-0 mt-3 z-50">
                  <div className="bg-slate-600/80 backdrop-blur-sm text-white p-6 rounded-2xl shadow-2xl border border-slate-500/50 w-full">
                    <p className="text-sm leading-relaxed">
                      {menuItems.find(item => item.id === activeTooltip)?.description}
                    </p>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Overlay to close tooltips */}
        {activeTooltip && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setActiveTooltip(null)}
          ></div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 text-white min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20psychology%20counseling%20center%20interior%20with%20comfortable%20seating%20area%2C%20warm%20lighting%20with%20soft%20neutral%20tones%2C%20therapy%20office%20with%20calming%20ambiance%20for%20mental%20health%20services%2C%20modern%20design%20with%20comfortable%20chairs%20and%20plants%2C%20peaceful%20atmosphere%20with%20warm%20natural%20lighting&width=1200&height=600&seq=main-hero-v26&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">마음을 치유하는 전문기관</h1>
          <p className="text-xl mb-8 text-slate-200">
            전문적이고 따뜻한 심리상담으로<br />
            당신의 마음을 보살펴 드립니다
          </p>
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">검증된 전문가와 함께 합니다</h2>
            <p className="text-lg text-slate-400">한국심리학회 전문가 자격을 보유한 상담사가 전문적인 서비스를 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Professional Info */}
            <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <i className="ri-user-star-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-100">심리상담 전문가 자격</h3>
                  <p className="text-slate-400">Korean Psychology Association</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">한국심리학회 상담심리사 1급, 2급</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">한국심리학회 임상심리사 1급</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">보건복지부 정신건강임상심리사 1급</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-100"> 특징 및 장점</h3>
                  <p className="text-slate-400">Professional Counseling Features</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">개인별 맞춤형 상담 프로그램</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">철저한 개인정보 보호</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">편안하고 안전한 상담 환경</span>
                </div>
              </div>
            </div>

            {/* Association Links */}
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">한국심리학회의 검증된 전문가</h3>
                <p className="text-slate-400 text-sm">Professional Association Membership</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-sm text-slate-300 mb-4">
                  한국심리학회는 가장 엄격한 자격검증 기준(학위, 임상 수련등)으로 전문성을 확보하고 널리 공인받고 있습니다.<br />
                  (하단: 지역별 상담심리사 검색 서비스 제공중)
                </p>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://krcpa.or.kr/user/new/index.asp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  한국상담심리학회
                </a>
                <a 
                  href="http://www.kcp.or.kr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-500 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  한국임상심리학회
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">상담 서비스</h2>
            <p className="text-lg text-slate-400">개인적 필요에 맞는 전문적인 심리상담을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/individual" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-amber-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <i className="ri-user-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">개인상담</h3>
              <p className="text-slate-400 mb-4">
                개인적인 고민과 심리적 어려움을 전문적으로 상담합니다
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 우울, 불안 상담</li>
                <li>• 스트레스 관리</li>
                <li>• 자존감 향상</li>
                <li>• 대인관계 개선</li>
              </ul>
            </Link>

            <Link href="/couple" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-rose-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors">
                <i className="ri-heart-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">부부상담</h3>
              <p className="text-slate-400 mb-4">
                더 건강하고 행복한 부부 관계를 위한 전문 상담입니다
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 의사소통 개선</li>
                <li>• 갈등 해결</li>
                <li>• 친밀감 회복</li>
                <li>• 신뢰 구축</li>
              </ul>
            </Link>

            <Link href="/family" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-emerald-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <i className="ri-group-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">가족상담</h3>
              <p className="text-slate-400 mb-4">
                화목한 가정을 위한 가족 구성원 간의 관계 개선 상담
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 가족 갈등 </li>
                <li>• 세대 간 소통</li>
                <li>• 자녀 양육 상담</li>
                <li>• 가족 유대감 강화</li>
              </ul>
            </Link>

            <Link href="/child" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <i className="ri-user-star-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">아동/청소년상담</h3>
              <p className="text-slate-400 mb-4">
                성장기 아이들의 건강한 발달을 위한 전문상담
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 놀이치료</li>
                <li>• 학습 문제</li>
                <li>• 행동 수정</li>
                <li>• 정서 발달</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* National Mind Investment Support Program Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">전국민마음투자지원사업</h2>
            <p className="text-lg text-slate-400">-정부 지원 사업으로 부담없이 전문 심리상담을 받으실 수 있습니다</p>
          </div>

          <div className="bg-slate-800/50 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://static.readdy.ai/image/7b8785b3350666cb22c8ef9ed87331b2/2cb60c42fc8d3c54ec27f2a879dd86e0.png"
                  alt="전국민마음투자支持사업 안내"
                  className="w-full h-auto rounded-2xl object-cover object-top shadow-2xl border border-slate-700"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-6">정부 지원 심리상담 서비스</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    드림심리상담센터는 <span className="text-blue-400 font-semibold">전국민마음투자지원사업 수행기관</span>으로 
                    우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공합니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-government-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">정부 지원 프로그램</h4>
                      <p className="text-slate-400">보건복지부에서 시행함</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-shield-check-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">전문가 자격 보장</h4>
                      <p className="text-slate-400">국가자격 및 한국심리학회, 한국상담학회 자격을 보유한 심리사만이 상담서비스 제공</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-price-tag-3-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">경제적 부담 완화</h4>
                      <p className="text-slate-400">정부 지원을 통해 합리적인 비용으로 전문적인 상담 이용 가능</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-700">
                    {/* 상단 영역 -신청 방법 안내 */}
                    <div className="mb-6">
                      <p className="text-slate-400 leading-relaxed">
                        학교, 정신건강복지센터, 청소년상담복지센터, 병의원 의뢰서 등을 통해 신청하거나 
                        직접 센터로 문의하시면 자세한 안내를 받으실 수 있습니다.
                      </p>
                    </div>
                    {/* 하단 영역 - 2개 섹션으로 분할 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* 좌측 - 서비스 유형 안내 */}
                      <div>
                        <p className="text-slate-300 font-semibold border border-slate-600 bg-slate-700/50 p-4 rounded-xl">
                          본 센터는 1급, 2급 유형의 서비스를 제공함
                        </p>
                      </div>
                      {/* 우측 - 카카오톡 문의 */}
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <a 
                          href="https://pf.kakao.com/_NxbxnRn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black w-20 h-20 rounded-2xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg flex flex-col items-center justify-center cursor-pointer"
                        >
                          <i className="ri-chat-3-fill text-xl mb-1"></i>
                          <div className="text-xs font-medium text-center leading-tight">
                            전용 문의
                          </div>
                        </a>
                        <p className="text-xs text-slate-400 text-center">
                          전국민마음투자지원사업 전용 문의
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mind Magnifier Service Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl font-bold text-slate-100">마음돋보기 서비스 실시</h2>
              <div className="relative">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-red-600 bg-yellow-400 animate-pulse shadow-lg border-2 border-yellow-300">
                  NEW
                </span>
                <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"></div>
              </div>
            </div>
            <p className="text-lg text-slate-400">임상심리전문가 종합심리검사(Full Battery) 검사 및 상담심리전문가의 해석상담</p>
          </div>

          <div className="bg-slate-800/50 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://static.readdy.ai/image/7b8785b3350666cb22c8ef9ed87331b2/94b9cbb5362f130df9e3438a643cfa6c.png"
                  alt="마음돋보기 서비스 안내"
                  className="w-full h-auto rounded-2xl object-cover object-top shadow-2xl border border-slate-700"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-6">전문 종합심리검사 서비스</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    <span className="text-purple-400 font-semibold">2025년 8월부터</span> 새롭게 종합심리검사를 실시합니다. 
                    임상심리전문가가 직접 종합심리검사(지능, 정서, 심리 요인등)를 시행하고, 
                    상담심리전문가의 해석 상담이 진행됩니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-brain-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">종합심리검사 실시</h4>
                      <p className="text-slate-400">지능, 정서, 심리 요인 등을 종합적으로 평가하는 전문 검사</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-user-star-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">임상심리전문가 직접 실시</h4>
                      <p className="text-slate-400">지역대학병원의 임상심리전문가가 직접 검사 진행</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-chat-heart-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-200 mb-2">상담심리전문가의 해석상담 제공</h4>
                      <p className="text-slate-400">상담심리전문가의 전문적인 해석상담으로 결과 설명</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-700 grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        <i className="ri-calendar-line text-purple-400 mr-2"></i>
                        검사 일정
                      </h4>
                      <p className="text-slate-300">매주 토요일</p>
                      <p className="text-slate-400 text-sm mt-1">하루 2명만 가능</p>
                    </div>
                    <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        <i className="ri-time-line text-pink-400 mr-2"></i>
                        소요 시간
                      </h4>
                      <p className="text-slate-300">검사시행 3~4시간</p>
                      <p className="text-slate-300">해석상담 1시간 (검사 1~2주 후)</p>
                      <p className="text-pink-300 text-sm mt-2 font-medium">예약 필수</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">서비스 이용절차</h2>
            <p className="text-lg text-slate-400">1:1 예약서비스로 체계적이고 전문적인 상담을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Step 1: Service Application */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">서비스 신청</h3>
                  <p className="text-slate-300 mb-6">
                    현재 1:1 예약서비스이므로 반드시 전화나 카카오톡채널을 통해 예약해야 합니다
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                        <i className="ri-phone-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-300">전화 예약: 053-759-1282</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                        <i className="ri-chat-3-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-300">카카오톡: @드림심리상담센터</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Service Utilization */}
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">서비스 이용</h3>
                  <p className="text-slate-300 mb-6">
                    상담 유형에 따라 소요시간이 다릅니다
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-user-3-line text-white text-sm"></i>
                      </div>
                      <div>
                        <span className="text-slate-300 font-medium">개인상담</span>
                        <p className="text-slate-400 text-sm">50분 기준</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-group-line text-white text-sm"></i>
                      </div>
                      <div>
                        <span className="text-slate-300 font-medium">부부상담, 가족상담</span>
                        <p className="text-slate-400 text-sm">90분 기준</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-clipboard-line text-white text-sm"></i>
                      </div>
                      <div>
                        <span className="text-slate-300 font-medium">종합심리검사 (Full Battery)</span>
                        <p className="text-slate-400 text-sm">검사시행 3~4시간(임상심리전문가)<br />해석상담 1시간(상담심리전문가)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">상담 예약</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">전화 예약</h3>
              <p className="text-slate-400 mb-4">직접 전화를 통한 상담 예약 및 문의</p>
              <p className="text-2xl font-bold text-amber-400">053-759-1282</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-3-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">카카오채널 예약</h3>
              <p className="text-slate-400 mb-4">카카오 채널 예약 문의</p>
              <p className="text-xl font-bold text-yellow-400">@드림심리상담센터</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">찾아오시는 길</h3>
              <p className="text-slate-400 mb-4">
                대구광역시 수성구 동대구로 346<br />
                범어서한포레스트 오피스텔
              </p>
              <a 
                href="https://map.naver.com/v5/search/%EB%93%9C%EB%A6%BC%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                네이버 지도 보기
              </a>
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
              <h3 className="text-2xl font-[\'Pacifico\'] text-amber-400 leading-tight">드림심리상담센터</h3>
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
