import Link from "next/link";
import { site } from "../app/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111927] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="flex h-11 w-16 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-slate-950/70 shadow-sm">
            <div className="text-center leading-none">
              <div className="text-sm font-semibold tracking-[0.08em] text-slate-100">DREAM</div>
              <div className="mt-1 text-[9px] font-medium tracking-normal text-slate-400">심리상담센터</div>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <h3 className="text-xl font-semibold leading-tight tracking-normal text-slate-100">{site.name}</h3>
            <p className="mt-0.5 text-xs font-medium tracking-normal text-slate-400">{site.tagline}</p>
          </div>
        </div>

        <p className="mb-8 text-sm leading-7 text-slate-400">
          전문적이고 따뜻한 심리상담으로 당신의 마음을 돌봅니다.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <Link href="/#services" className="font-medium text-slate-400 transition-colors hover:text-amber-300">
            상담 서비스
          </Link>
          <Link href="/#voucher" className="font-medium text-slate-400 transition-colors hover:text-amber-300">
            정신건강심리상담바우처
          </Link>
          <Link href="/board" className="font-medium text-slate-400 transition-colors hover:text-amber-300">
            소식 및 칼럼
          </Link>
          <Link href="/#contact" className="font-medium text-slate-400 transition-colors hover:text-amber-300">
            오시는 길
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500">&copy; 2011 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
