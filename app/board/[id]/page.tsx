'use client';

import { useEffect, useState, use } from 'react';
import { supabase } from '../../lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();
      
      if (data) setPost(data);
      setLoading(false);
    }
    fetchPost();
  }, [resolvedParams.id]);

  if (loading) return <div className="py-20 text-center">불러오는 중...</div>;
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Link href="/board" className="text-blue-600 hover:underline mb-8 inline-block">← 전체 목록</Link>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        <p className="text-gray-400 mt-4 border-b pb-6">{new Date(post.created_at).toLocaleDateString()} | 드림 심리상담센터</p>
      </header>
      <img src={post.thumbnail} className="w-full rounded-2xl mb-12 shadow-sm border" />
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
        {post.content}
      </div>
    </div>
  );
}
