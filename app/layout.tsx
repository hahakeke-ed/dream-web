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
        
        {/* [상단 메뉴바] 진한 남색 배경 + 사장님 요청 메뉴 순서 */}
        <header className="bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              
              {/* 1. 로고 (왼쪽) */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="bg-white p-1.5 rounded-lg shadow-sm">
                     {/* 로고 파일이 있으면 표시, 없으면 텍스트 대체 */}
                     <Image 
                       src="/dream_logo.png" 
                       alt="드림심리상담센터" 
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
              
              {/* 2. 메뉴 (오른쪽) */}
              <nav className="hidden xl:flex space-x-6 items-center text-[15px]">
                <Link href="/" className="text-white hover:text-orange-400 transition-colors font-medium">
                  홈
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  센터소개
                </Link>
                <Link href="/counseling" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  심리상담
                </Link>
                <Link href="/test" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  심리검사
                </Link>
                <Link href="/program/voucher" className="text-orange-400 hover:text-orange-300 transition-colors font-bold">
                  정신건강 심리상담 바우처
                </Link>
                <Link href="/eap" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  EAP 기업심리상담
                </Link>
                 <Link href="/notice" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  공지사항
                </Link>
              </nav>

              {/* 모바일 메뉴 버튼 */}
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

        {/* [하단 푸터] */}
        <footer className="bg-[#111827] text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
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
