// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

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
  description:
    "심리 분석, 치유, 자기성 자료를 제공하는 온라인 플랫폼",
  alternates: {
    canonical: "https://mind-study.co.kr",
  },
  openGraph: {
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description:
      "심리 분석, 치유, 자기성장 자료를 제공하는 온라인 플랫폼",
    url: "https://mind-study.co.kr",
    siteName: "Mind Study",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description:
      "심리 분석, 치유, 자기계발 자료를 제공하는 온라인 플랫폼",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 네이버 소유확인 메타태그 */}
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />

        {/* 구글 서치 콘솔 소유확인 메타태그 */}
        <meta
          name="google-site-verification"
          content="google8597533b73bb418d.html"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
