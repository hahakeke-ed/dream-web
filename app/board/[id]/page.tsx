import Link from "next/link";
import { notFound } from "next/navigation";
import { getBoardPost, getBoardPosts } from "../../lib/googleBoard";

export async function generateStaticParams() {
  const posts = await getBoardPosts();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBoardPost(id);
  if (!post) return { title: "소식 및 칼럼" };
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BoardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBoardPost(id);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#f7faf8] px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/board" className="text-sm font-bold text-[#1f6f8b] hover:text-[#14314a]">
            소식 목록으로 돌아가기
          </Link>
          <p className="mt-8 text-sm font-bold text-[#1f6f8b]">{post.category}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-[#14314a] md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-slate-500">{post.date} · 드림심리상담센터</p>
          <p className="mt-6 text-lg leading-8 text-slate-700">{post.summary}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="prose-doc mx-auto max-w-4xl">
          {post.embedUrl ? (
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <iframe title={post.title} src={post.embedUrl} />
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
              <h2 className="text-xl font-bold text-[#14314a]">본문 문서가 연결되지 않았습니다</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Google Sheets의 문서URL 또는 임베드URL 항목을 확인해 주세요.
              </p>
            </div>
          )}

          {post.docUrl && (
            <div className="mt-6 text-center">
              <a
                href={post.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#cddde2] bg-white px-5 text-sm font-bold text-[#14314a] transition hover:border-[#1f6f8b] hover:text-[#1f6f8b]"
              >
                문서 새 창으로 열기
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
