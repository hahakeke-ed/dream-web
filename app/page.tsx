'use client';

import Link from 'next/link';
import Image from 'next/image'; // 이미지 최적화를 위해 추가
import SmsButton from '../components/SmsButton';
import { SHOW_MIND_SERVICE } from './lib/siteFlags';

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      
      {/* 1. Hero Section (메인 배너) */}
      <section 
        className="relative py-32 px-4 min-h-[600px] flex items-center justify-center"
      >
        {/* 배경 이미지 (Next.js Image 활용 권장하나 기존 방식 유지) */}
        <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
                backgroundImage: `url('/images/counseling_room.jpg')`, // 사장님 사진으로 교체
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        
        {/* 배너 텍스트 */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">마음을 치유하는 전문기관</h1>
          <p className="text-xl mb-8 text-slate-100 drop-shadow-md">
            전문적이고 따뜻한 심리상담으로<br />
            당신의 마음을 보살펴 드립니다
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/about"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all shadow-lg"
            >
              센터 소개
            </Link>
            <Link 
              href="/program/voucher"
              className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all shadow-lg"
            >
              바우처 안내
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Professional Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">검증된 전문가와 함께 합니다</h2>
            <p className="text-lg text-slate-400">한국심리학회 전문가 자격을 보유한 상담사가 전문적인 서비스를 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 자격 정보 */}
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
                  <span className="text-slate-300">한국심리학회 임상심리전문가</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">보건복지부 정신건강임상심리사 1급</span>
                </div>
              </div>
            </div>

            {/* 특징 */}
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

            {/* 학회 링크 */}
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">한국심리학회의 검증된 전문가</h3>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://krcpa.or.kr/user/new/index.asp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  한국상담심리학회
                </a>
                <a 
                  href="http://www.kcp.or.kr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-500 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  한국임상심리학회
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">상담 서비스</h2>
            <p className="text-lg text-slate-400">개인적 필요에 맞는 전문적인 심리상담을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 개인상담 */}
            <Link href="/counseling" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-amber-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">개인상담</h3>
              <p className="text-slate-400 mb-4">개인적인 고민과 심리적 어려움을 전문적으로 상담합니다</p>
            </Link>

            {/* 부부상담 */}
            <Link href="/counseling" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-rose-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">부부상담</h3>
              <p className="text-slate-400 mb-4">더 건강하고 행복한 부부 관계를 위한 전문 상담입니다</p>
            </Link>

            {/* 가족상담 */}
            <Link href="/counseling" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-emerald-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">가족상담</h3>
              <p className="text-slate-400 mb-4">화목한 가정을 위한 가족 구성원 간의 관계 개선 상담</p>
            </Link>

            {/* 아동/청소년상담 */}
            <Link href="/counseling" className="bg-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <span className="text-3xl">🧸</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">아동/청소년상담</h3>
              <p className="text-slate-400 mb-4">성장기 아이들의 건강한 발달을 위한 전문상담</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 전국민마음투자지원사업 (내용 유지) */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">전국민마음투자지원사업</h2>
            <p className="text-lg text-slate-400">-정부 지원 사업으로 부담없이 전문 심리상담을 받으실 수 있습니다</p>
          </div>
          {/* ... (이하 동일한 내용으로 구성됨, 코드 길이상 생략된 부분 없이 복구했습니다) ... */}
           <div className="bg-slate-800/50 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative h-64 md:h-full min-h-[300px]">
                  {/* 바우처 이미지 (사장님이 올리신 파일로 교체) */}
                  <Image 
                    src="/images/voucher.jpg" 
                    alt="바우처 안내" 
                    fill 
                    className="object-contain"
                  />
               </div>
               <div className="space-y-6">
                 <h3 className="text-3xl font-bold text-slate-100">정부 지원 심리상담 서비스</h3>
                 <p className="text-lg text-slate-300">
                   드림심리상담센터는 <span className="text-blue-400 font-semibold">전국민마음투자지원사업 수행기관</span>으로 
                   우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공합니다.
                 </p>
                 <Link href="/program/voucher" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                   자세히 보기
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Mind Magnifier (마음돋보기) 섹션 복구 */}
      {SHOW_MIND_SERVICE && (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-4xl font-bold text-slate-100">마음돋보기 서비스 실시</h2>
                <div className="relative">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-red-600 bg-yellow-400 animate-pulse shadow-lg border-2 border-yellow-300">
                    NEW
                  </span>
                </div>
              </div>
              <p className="text-lg text-slate-400">임상심리전문가 종합심리검사(Full Battery) 검사 및 상담심리전문가의 해석상담</p>
            </div>
             
             {/* 마음돋보기 내용 카드 */}
            <div className="bg-slate-800/50 p-12 rounded-3xl border border-slate-600 backdrop-blur-sm">
                <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-slate-100">전문 종합심리검사 서비스</h3>
                    <p className="text-slate-300">
                        <span className="text-purple-400 font-semibold">2025년 8월부터</span> 새롭게 종합심리검사를 실시합니다.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                            <h4 className="font-bold text-purple-400 mb-2">종합심리검사</h4>
                            <p className="text-sm text-slate-300">지능, 정서, 심리 요인 평가</p>
                        </div>
                         <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                            <h4 className="font-bold text-pink-400 mb-2">임상심리전문가</h4>
                            <p className="text-sm text-slate-300">직접 검사 실시</p>
                        </div>
                         <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                            <h4 className="font-bold text-indigo-400 mb-2">해석상담</h4>
                            <p className="text-sm text-slate-300">상담심리전문가 해석</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. 이용절차 및 예약 (내용 유지) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-8">상담 예약 및 문의</h2>
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600">
                     <h3 className="text-xl font-bold text-amber-400 mb-4">전화/문자 예약</h3>
                     <p className="text-2xl font-bold text-white mb-2">053-759-1282</p>
                     <p className="text-slate-400 text-sm">상담 중일 경우 문자를 남겨주세요.</p>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600">
                     <h3 className="text-xl font-bold text-green-400 mb-4">오시는 길</h3>
                     <p className="text-slate-300 mb-4">대구 수성구 달구벌대로 (범어역 11번 출구)</p>
                     <a href="https://map.naver.com" target="_blank" className="text-sm text-slate-400 underline">네이버 지도 보기</a>
                 </div>
             </div>
        </div>
      </section>

    </div>
  );
}
