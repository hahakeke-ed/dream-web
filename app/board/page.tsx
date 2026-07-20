import Link from "next/link";
import { getBoardPosts } from "../lib/googleBoard";

export const metadata = {
  title: "소식 및 칼럼",
  description: "드림심리상담센터의 공지와 칼럼을 확인할 수 있습니다.",
};

export default async function BoardPage() {
  const posts = await getBoardPosts();

  return (
    <>
      <section className="bg-[#f7faf8] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">Notice & Column</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-[#14314a] md:text-5xl">소식 및 칼럼</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            간단한 공지와 칼럼은 Google Sheets 목록과 Google Docs 본문으로 관리됩니다.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          {posts.length > 0 ? (
            <div className="grid gap-5">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/${post.id}`}
                  className="rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-[#e5f3f4] px-3 py-1 text-xs font-bold text-[#1f6f8b]">
                          {post.category}
                        </span>
                        {post.pinned && (
                          <span className="rounded-lg bg-[#fff4d8] px-3 py-1 text-xs font-bold text-[#87651d]">
                            상단 고정
                          </span>
                        )}
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-8 text-[#14314a]">{post.title}</h2>
                      <p className="mt-3 text-base leading-7 text-slate-600">{post.summary}</p>
                    </div>
                    <p className="shrink-0 text-sm text-slate-500">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-xl font-bold text-[#14314a]">게시판 연결 준비 중입니다</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Netlify 환경변수에 Google Sheets CSV 주소를 넣으면 이곳에 공지와 칼럼이 표시됩니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
