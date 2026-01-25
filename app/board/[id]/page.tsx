// app/board/[id]/page.tsx
import { posts } from '../../lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link'; // 딱 한 번만 있어야 합니다.

export default function PostDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> | { id: string } 
}) {
  // Next.js 15 버전의 최신 규칙에 맞춰 params를 처리합니다.
  const resolvedParams = 'then' in params ? (params as any) : params;
  const post = posts.find((p) => p.id === resolvedParams.id);
  
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {/* 목록으로 돌아가는 버튼 */}
      <Link href="/board" className="text-blue-600 hover:text-blue-900 mb-8 inline-block transition">
        ← 전체 목록으로 돌아가기
      </Link>
      
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        <p className="text-gray-400 mt-4 border-b pb-6">{post.date} | 드림 심리상담센터</p>
      </header>
      
      {/* 이미지가 있을 경우에만 보여줌 */}
      {post.thumbnail && (
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          className="w-full rounded-2xl mb-12 shadow-sm border border-gray-100" 
        />
      )}
      
      {/* 칼럼 본문 */}
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
        {post.content}
      </div>
    </div>
  );
}
