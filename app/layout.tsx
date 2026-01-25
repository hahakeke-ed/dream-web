// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // 링크 이동을 위해 추가
import { posts } from "./lib/posts"; // 게시물 데이터를 가져옴

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Study - 심리 상담 & 마음 성장 공간",
  description: "심리 분석, 치유, 자기성 자료를 제공하는 온라인 플랫폼",
  alternates: {
    canonical: "https://mind-study.co.kr",
  },
  openGraph: {
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description: "심리 분석, 치유, 자기성장 자료를 제공하는 온라인 플랫폼",
    url: "https://mind-study.co.kr",
    siteName: "Mind Study",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description: "심리 분석, 치유, 자기계발 자료를 제공하는 온라인 플랫폼",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  // 새 게시물이 있는지 확인 (오늘로부터 7일 이내의 글이 있으면 true)
  const hasNewPost = posts.some(post => {
    const postDate = new Date(post.date);
    const today = new Date();
    const diffTime = today.getTime() - postDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  });

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased font-sans`}
      >
        {/* 상단 네비게이션 바 추가 */}
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* 로고 (홈으로 이동) */}
            <Link href="/" className="text-xl font-bold text-[#002855]">
              드림 심리상담센터
            </Link>

            {/* 메뉴 영역 */}
            <div className="flex items-center gap-8">
              <Link href="/board" className="relative font-semibold text-gray-700 hover:text-blue-900 transition">
                소식 및 칼럼
                {hasNewPost && (
                  <span className="absolute -top-2 -right-7 flex h-4 w-7">
                    {/* 뒤에서 깜빡이며 퍼지는 빨간 원 */}
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    {/* "new" 글자 배지 */}
                    <span className="relative inline-flex items-center justify-center rounded-full h-4 w-7 bg-red-500 text-[10px] text-white font-bold">
                      new
                    </span>
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
