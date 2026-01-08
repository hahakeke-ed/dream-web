import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "드림심리상담센터",
  description: "대구 범어동 드림심리상담센터, 정신건강 심리상담 바우처, 아동/청소년/성인 상담",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-gray-900 font-sans flex flex-col min-h-screen">
        
        {/* [상단 메뉴바] 진한 남색 배경 + 원하시는 메뉴 순서 적용 */}
        <header className="bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              
              {/* 1. 로고 (왼쪽) */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-3 group">
                  {/* 로고 이미지 (흰색 박스 안에 넣어서 잘 보이게) */}
                  <div className="bg-white p-1.5 rounded-lg shadow-sm">
                     <Image 
                       src="/dream_logo.png" 
                       alt="드림심리상담센터 로고" 
                       width={45} 
                       height={45} 
                       className="object-contain"
                     />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-bold text-orange-400 leading-tight">드림심리상담센터</span>
                    <span className="text-xs text-gray-400 font-light">전문심리상담기관</span>
                  </div>
                </Link>
              </div>
              
              {/* 2. 메뉴 (오른쪽) - 사장님이 그려주신 순서대로 배치 */}
              <nav className="hidden xl:flex space-x-6 items-center text-[15px]">
                <Link href="/" className="text-white hover:text-orange-400 transition-colors font-medium">
                  홈
                </Link>
                
                {/* 추가됨: 센터소개 */}
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  센터소개
                </Link>

                <Link href="/counseling" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  심리상담
                </Link>
                
                <Link href="/test" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  심리검사
                </Link>

                {/* 이름 변경됨: 전국민마음투자 -> 정신건강 심리상담 바우처 */}
                <Link href="/program/voucher" className="text-orange-400 hover:text-orange-300 transition-colors font-bold">
                  정신건강 심리상담 바우처
                </Link>

                <Link href="/eap" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  EAP 기업심리상담
                </Link>
                
                {/* 추가됨: 공지사항 */}
                 <Link href="/notice" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  공지사항
                </Link>
              </nav>

              {/* 모바일 메뉴 버튼 (화면 작을 때만 보임) */}
              <div className="xl:hidden">
                <Link href="/about" className="p-2 text-gray-300 hover:text-white border border-gray-700 rounded-md">
                  MENU
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* [본문 영역] */}
        <main className="flex-grow">
          {children}
        </main>

        {/* [하단 푸터] 사장님이 선택하신 진한 배경 스타일 */}
        <footer className="bg-[#111827] text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            {/* 푸터 로고 */}
            <div className="bg-white p-2 rounded-lg mb-4 inline-block">
               <Image 
                 src="/dream_logo.png" 
                 alt="드림심리상담센터" 
                 width={40} 
                 height={40} 
               />
            </div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">드림심리상담센터</h2>
            <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
              전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다.<br/>
              (범어역 11번 출구 앞)
            </p>
            <p className="text-sm text-gray-600">
              © 2011 드림심리상담센터. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
