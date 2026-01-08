import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // 로고 이미지를 쓰기 위해 필요
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
      <body className="antialiased bg-white text-gray-900 font-sans">
        
        {/* 통합된 최상단 네비게이션 (남색 스타일) */}
        <header className="bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* 1. 로고 영역 (기존 스타일 복원) */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                  {/* 로고 이미지가 있다면 사용, 없으면 텍스트 대체 */}
                  <div className="bg-white p-1 rounded-md">
                     <Image 
                       src="/dream_logo.png" 
                       alt="드림심리상담센터 로고" 
                       width={40} 
                       height={40} 
                       className="object-contain"
                     />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-bold text-orange-400 leading-tight">드림심리상담센터</span>
                    <span className="text-xs text-gray-400">전문심리상담기관</span>
                  </div>
                </Link>
              </div>
              
              {/* 2. 메뉴 영역 (요청하신 순서대로 배치) */}
              <nav className="hidden md:flex space-x-6 items-center">
                <Link href="/" className="hover:text-orange-400 transition-colors font-medium">
                  홈
                </Link>
                
                {/* 요청 1: 홈과 심리상담 사이에 '센터소개' 배치 */}
                <Link href="/about" className="hover:text-orange-400 transition-colors font-medium">
                  센터소개
                </Link>

                {/* 기존 메뉴들 (페이지가 아직 없다면 링크만 걸어둠) */}
                <Link href="/counseling" className="hover:text-orange-400 transition-colors font-medium">
                  심리상담
                </Link>
                
                <Link href="/test" className="hover:text-orange-400 transition-colors font-medium">
                  심리검사
                </Link>

                {/* 요청 2: 이름 변경 및 바우처 페이지 연결 */}
                <Link href="/program/voucher" className="hover:text-orange-400 transition-colors font-medium">
                  정신건강 심리상담 바우처
                </Link>

                <Link href="/eap" className="hover:text-orange-400 transition-colors font-medium">
                  EAP 기업심리상담
                </Link>
                
                 <Link href="/notice" className="hover:text-orange-400 transition-colors font-medium">
                  공지사항
                </Link>
              </nav>

              {/* 모바일 메뉴 버튼 (화면 작을 때) */}
              <div className="md:hidden">
                <Link href="/about" className="text-gray-300 hover:text-white">
                  MENU
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* 메인 컨텐츠 영역 */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 하단 푸터 */}
        <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p className="font-bold text-gray-700 mb-2">드림심리상담센터</p>
            <p>대구광역시 수성구 달구벌대로 (범어역 11번 출구)</p>
            <p className="mt-2">© 2026 Dream Counseling Center. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
