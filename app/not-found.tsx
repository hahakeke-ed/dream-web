import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 text-center md:px-6">
      <div className="mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-[#14314a]">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          주소가 바뀌었거나 현재 제공하지 않는 페이지입니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#1f6f8b] px-5 text-sm font-bold text-white"
        >
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}
