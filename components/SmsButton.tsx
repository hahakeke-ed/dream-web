"use client";

import { useMemo, useState } from "react";

type Props = {
  /** 휴대폰 번호. 예) "01075691282" 또는 "+821075691282" */
  phone?: string;
  /** 미리 채워둘 문자 내용 */
  body?: string;
  className?: string;
  children?: React.ReactNode; // 버튼 라벨
};

function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(
    navigator.userAgent
  );
}

function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function normalizeKR(number: string) {
  // "+82" 또는 "0"으로 시작하는 한국 번호를 E.164로 정리
  let n = number.replace(/[^\d+]/g, "");
  if (n.startsWith("+")) return n;
  if (n.startsWith("0")) return "+82" + n.substring(1);
  return n;
}

function buildSmsHref(number: string, body?: string) {
  const to = normalizeKR(number);
  if (!body) return `sms:${to}`;
  const encoded = encodeURIComponent(body);
  // iOS는 &body, Android는 ?body 사용이 호환성 좋음
  const sep = isIOS() ? "&" : "?";
  return `sms:${to}${sep}body=${encoded}`;
}

export default function SmsButton({
  phone = "01075691282", // ← 요청하신 기본 번호
  body = "안녕하세요. 상담 문의드립니다. [이름/희망시간/상담유형] 남깁니다.",
  className = "",
  children = "문자 보내기",
}: Props) {
  const [copied, setCopied] = useState(false);
  const href = useMemo(() => buildSmsHref(phone, body), [phone, body]);
  const mobile = useMemo(() => isMobileUA(), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${phone}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  if (mobile) {
    // 모바일: 문자 앱 열기
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold border border-slate-600 bg-slate-800 hover:border-amber-400 transition ${className}`}
        aria-label="문자 앱 열기"
      >
        {children}
      </a>
    );
  }

  // 데스크톱: 번호+내용 복사로 폴백
  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold border border-slate-600 bg-slate-800 hover:border-amber-400 transition ${className}`}
      title="PC에서는 문자 앱이 열리지 않아요. 번호와 내용을 복사했습니다. 휴대폰에서 보내주세요."
    >
      {copied ? "복사됨!" : children}
    </button>
  );
}

