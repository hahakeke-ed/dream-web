import { posts } from '../lib/posts';

export default function BoardPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* 로고의 블루 컬러 톤 적용 */}
      <h1 className="text-3xl font-bold text-center mb-10 text-[#002855]">소식 및 칼럼</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={`/board/${post.id}`} key={post.id} className="group flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-gray-100 hover:shadow-md transition bg-white">
            <div className="w-full md:w-40 h-28 bg-gray-200 overflow-hidden rounded-lg">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
