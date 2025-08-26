'use client';

import React, { useState } from 'react';

type SmsButtonProps = {
  children: React.ReactNode;
  body?: string;
  className?: string;
  phone?: string;
};

const PHONE_DEFAULT = '01075691282';

export default function SmsButton({
  children,
  body = '',
  className = '',
  phone = PHONE_DEFAULT,
}: SmsButtonProps) {
  const [copied, setCopied] = useState(false);
  const finalBody = encodeURIComponent(body);

  const handleClick = async () => {
    const isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
    const sep = isiOS ? '&' : '?';
    const scheme = `sms:${phone}${sep}body=${finalBody}`;

    // 모바일은 문자 앱 열기
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = scheme;
      return;
    }

    // 데스크톱은 복사
    try {
      await navigator.clipboard.writeText(`${phone}\n${decodeURIComponent(finalBody)}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // 복사 실패 시 문자 앱 시도
      window.location.href = scheme;
    }
  };

  // 통일된 주황색(amber) 버튼 스타일 고정
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold shadow-md border transition ' +
    'bg-amber-600 text-white border-amber-600 hover:bg-amber-500 hover:border-amber-500 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500';

  return (
    <button type="button" onClick={handleClick} className={`${base} ${className}`}>
      {copied ? '복사됨' : children}
    </button>
  );
}
