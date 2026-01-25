import { posts } from '../../lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Link href="/board" className="text-gray-400 hover:text-blue-900 mb-8 inline-block transition">← 전체 목록</Link>
      
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        <p className="text-gray-400 mt-4 border-b pb-6">{post.date} | 드림 심리상담센터</p>
      </header>
      
      {post.thumbnail && (
        <img src={post.thumbnail} alt={post.title} className="w-full rounded-2xl mb-12 shadow-sm" />
      )}
      
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
        {post.content}
      </div>
    </div>
  );
}
