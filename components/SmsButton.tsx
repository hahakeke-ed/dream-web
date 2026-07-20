"use client";

import React, { useState } from "react";
import { site } from "../app/data/site";

type SmsButtonProps = {
  children: React.ReactNode;
  body?: string;
  className?: string;
  phone?: string;
};

export default function SmsButton({
  children,
  body = "안녕하세요. 상담 예약 문의드립니다. 이름/희망시간/상담유형을 남깁니다.",
  className = "",
  phone = site.smsPhone,
}: SmsButtonProps) {
  const [copied, setCopied] = useState(false);
  const finalBody = encodeURIComponent(body);

  const handleClick = async () => {
    const isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
    const sep = isiOS ? "&" : "?";
    const scheme = `sms:${phone}${sep}body=${finalBody}`;

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = scheme;
      return;
    }

    try {
      await navigator.clipboard.writeText(`${phone}\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = scheme;
    }
  };

  const base =
    "inline-flex items-center justify-center rounded-lg border border-[#1f6f8b] bg-[#1f6f8b] px-6 py-3 font-bold text-white shadow-sm transition hover:border-[#185a70] hover:bg-[#185a70] focus:outline-none focus:ring-2 focus:ring-[#8cc3d1] focus:ring-offset-2";

  return (
    <button type="button" onClick={handleClick} className={`${base} ${className}`}>
      {copied ? "복사 완료" : children}
    </button>
  );
}
