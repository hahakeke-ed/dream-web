"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../app/data/site";

export default function SiteHeader() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (menuId: string, href: string) => {
    if (menuId === "home") {
      window.location.href = "/";
      return;
    }

    if (activeTooltip === menuId) {
      setActiveTooltip(null);
      return;
    }

    setActiveTooltip(menuId);

    if (href.startsWith("/#")) {
      const target = document.querySelector(href.replace("/", ""));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111927]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-4" onClick={() => setOpen(false)}>
            <div className="flex h-11 w-16 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-slate-950/70 shadow-sm">
              <div className="text-center leading-none">
                <div className="text-sm font-semibold tracking-[0.08em] text-slate-100">DREAM</div>
                <div className="mt-1 text-[9px] font-medium tracking-normal text-slate-400">심리상담센터</div>
              </div>
            </div>

            <div className="hidden min-w-0 flex-col sm:flex">
              <h1 className="truncate text-xl font-semibold leading-tight tracking-normal text-slate-100">
                드림심리상담센터
              </h1>
              <p className="mt-0.5 text-xs font-medium tracking-normal text-slate-400">전문심리상담기관</p>
            </div>
          </Link>

          <nav className="relative hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleMenuClick(item.id, item.href)}
                  className={`cursor-pointer whitespace-nowrap text-sm font-medium tracking-normal transition-colors hover:text-amber-300 ${
                    item.id === "home" ? "text-slate-100" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}

            <div className="relative">
              <Link
                href="/board"
                className="flex cursor-pointer items-center whitespace-nowrap text-sm font-medium tracking-normal text-slate-300 transition-colors hover:text-amber-300"
              >
                소식 및 칼럼
              </Link>
            </div>

            {activeTooltip && (
              <div className="absolute left-0 right-0 top-full z-50 mt-3">
                <div className="w-full rounded-xl border border-slate-600/70 bg-slate-800/95 p-5 text-white shadow-2xl backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-slate-200">
                    {navItems.find((item) => item.id === activeTooltip)?.description}
                  </p>
                </div>
              </div>
            )}
          </nav>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-100 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleMenuClick(item.id, item.href);
                  }}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-300"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/board"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-300"
              >
                소식 및 칼럼
              </Link>
            </nav>
          </div>
        )}
      </div>

      {activeTooltip && <div className="fixed inset-0 z-40" onClick={() => setActiveTooltip(null)} />}
    </header>
  );
}
