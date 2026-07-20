import Link from "next/link";

export const metadata = {
  title: "게시판 관리 안내",
};

export default function BoardWriteGuidePage() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">Google Board</p>
        <h1 className="mt-4 text-3xl font-bold text-[#14314a]">게시글은 Google Sheets와 Docs에서 관리합니다</h1>
        <p className="mt-5 text-base leading-8 text-slate-700">
          이 페이지에는 더 이상 비밀번호 입력형 글쓰기 기능을 두지 않습니다. 공지 목록은 Google Sheets에서
          수정하고, 본문은 Google Docs에서 작성한 뒤 웹에 게시한 링크를 연결합니다.
        </p>
        <Link
          href="/board"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#1f6f8b] px-5 text-sm font-bold text-white"
        >
          소식 목록으로 이동
        </Link>
      </div>
    </section>
  );
}
