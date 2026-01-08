import type { Metadata } from "next";
import Link from "next/link";
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
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {/* 상단 네비게이션 바 */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* 로고 (홈으로 이동) */}
              <div className="flex-shrink-0">
                <Link href="/" className="font-bold text-xl text-blue-600">
                  드림심리상담센터
                </Link>
              </div>
              
              {/* 메뉴 메뉴 */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  센터소개
                </Link>
                <Link href="/program/voucher" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  바우처 안내
                </Link>
                <Link href="/notice" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  공지사항
                </Link>
              </nav>

              {/* 모바일 메뉴 버튼 (화면 작을 때만 보임) */}
              <div className="md:hidden">
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                  메뉴보기
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
        <footer className="bg-white border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p>© 2026 드림심리상담센터. All rights reserved.</p>
            <p className="mt-2">대구광역시 수성구 달구벌대로 (범어역 11번 출구)</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
