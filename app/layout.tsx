import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mind-study.co.kr"),
  title: {
    default: "드림심리상담센터",
    template: "%s | 드림심리상담센터",
  },
  description:
    "대구 수성구 범어동의 예약제 전문심리상담센터. 개인상담, 부부상담, 가족상담, 아동·청소년상담, 정신건강심리상담바우처 안내.",
  alternates: {
    canonical: "https://mind-study.co.kr",
  },
  openGraph: {
    title: "드림심리상담센터",
    description: "예약제 전문심리상담기관. 비밀보장과 독립된 상담 공간을 바탕으로 상담합니다.",
    url: "https://mind-study.co.kr",
    siteName: "드림심리상담센터",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "드림심리상담센터",
    description: "대구 수성구 범어동 전문심리상담센터",
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
      <body className={`${notoSansKr.variable} bg-[#f7faf8] text-slate-900 antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
