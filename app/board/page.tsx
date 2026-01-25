'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function BoardPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 relative">
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-[#002855] font-bold transition">
          <span className="bg-gray-100 p-2 rounded-full mr-2">🏠</span> 홈으로
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10 text-[#002855]">소식 및 칼럼</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={`/board/${post.id}`} key={post.id} className="group flex flex-col md:flex-row gap-6 p-5 rounded-xl border border-gray-100 hover:shadow-lg transition bg-white">
            <div className="w-full md:w-48 h-32 bg-gray-100 overflow-hidden rounded-lg flex-shrink-0">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-2">{new Date(post.created_at).toLocaleDateString()}</p>
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition leading-snug">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
