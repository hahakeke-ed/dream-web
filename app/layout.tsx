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
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {/* 기존의 중복 헤더를 제거했습니다. 본문 내용만 출력됩니다. */}
        {children}
      </body>
    </html>
  );
}
