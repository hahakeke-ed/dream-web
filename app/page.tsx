'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import SmsButton from '../components/SmsButton';
import { SHOW_MIND_SERVICE } from './lib/siteFlags';
import { posts } from './lib/posts'; // 새 글 확인을 위해 추가

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // 새 게시물이 있는지 확인 (오늘로부터 7일 이내의 글이 있으면 true)
  const hasNewPost = posts.some(post => {
    const postDate = new Date(post.date);
    const today = new Date();
    const diffTime = today.getTime() - postDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  });

  const menuItems = [
    {
      id: 'home',
      name: '홈',
      href: '/',
      description: '드림심리상담센터 메인 페이지입니다. 전체적인 서비스 소개와 상담 프로그램을 확인할 수 있습니다.'
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
      description: '임상심리전문가(한국심리학회 임상심리전문가)가 직접 시행하는 종합심리검사(full battery 검사)를 통해 개인의 강점과 특성, 위험요인을 정확히 발견합니다.'
    },
    {
      id: 'national-support',
      name: '정신건강심리상담바우처',
      href: '/national-support',
      description: '우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공하는 정부 사업입니다.'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 font-sans">
      {/* Header */}
      <header className="bg-slate-900 shadow-lg border-b border-slate-700 relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/dream_logo.png" 
                alt="드림심리상담센터 로고" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-['Pacifico'] text-amber-400 leading-tight">드림심리상담센터</h1>
                <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
              </div>
            </div>
            
            {/* 네비게이션 영역 */}
            <nav className="hidden md:flex items-center space-x-8 relative" ref={navRef}>
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

              {/* 추가된 소식 및 칼럼 버튼 */}
              <div className="relative">
                <Link 
                  href="/board" 
                  className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap font-medium flex items-center"
                >
                  소식 및 칼럼
                  {hasNewPost && (
                    <span className="absolute -top-3 -right-6 flex h-4 w-7">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex items-center justify-center rounded-full h-4 w-7 bg-red-500 text-[10px] text-white font-bold">
                        new
                      </span>
                    </span>
                  )}
                </Link>
              </div>

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

        {activeTooltip && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setActiveTooltip(null)}
          ></div>
        )}
      </header>

      {/* Hero Section 및 나머지 내용은 기존과 동일합니다... */}
      <section 
        className="relative py-32 px-4 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20psychology%20counseling%20center%20interior&width=1200&height=600&seq=main-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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

      {/* 기존 나머지 섹션들(Professional Features, Services, Support Program 등) 생략... 
          하지만 실제 파일에는 기존 내용을 그대로 남겨두시면 됩니다. */}
      
      {/* ... (생략된 기존 코드들 그대로 유지) ... */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/dream_logo.png" 
              alt="드림심리상담센터 로고" 
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-['Pacifico'] text-amber-400 leading-tight">드림심리상담센터</h3>
              <p className="text-sm text-slate-400 font-medium">전문심리상담기관</p>
            </div>
          </div>
          <p className="text-slate-400 mb-8">전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다.</p>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">&copy; 2011 드림심리상담센터. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
