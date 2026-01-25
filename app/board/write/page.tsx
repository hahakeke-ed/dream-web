// app/board/write/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WritePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // 입력 필드 상태들
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageName, setImageName] = useState(''); // 이미지 파일명 입력칸 추가
  
  const [generatedCode, setGeneratedCode] = useState('');

  // 비밀번호 확인
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0808!@#') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  // 코드 생성 로직
  const handleGenerate = () => {
    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const id = Date.now().toString();

    // 이미지 파일명이 없으면 기본 로고 사용, 있으면 앞에 슬래시 붙여서 경로 완성
    const thumbnailPath = imageName.trim() 
      ? `/${imageName.trim()}` 
      : '/dream_logo.png';

    // 작은따옴표(')가 내용에 있을 경우 에러 방지를 위해 처리
    const safeTitle = title.replace(/'/g, "\\'");
    // 줄바꿈이 있는 본문 내용을 그대로 코드에 넣기 위해 백틱(`) 사용
    
    const code = `
  {
    id: '${id}',
    title: '${safeTitle}',
    date: '${today}',
    thumbnail: '${thumbnailPath}',
    content: \`
${content}
    \`
  },`;
    
    setGeneratedCode(code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('코드가 복사되었습니다! 깃허브의 app/lib/posts.ts 파일에 붙여넣으세요.');
  };

  // 1. 로그인 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#002855]">관리자 접속</h1>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-[#002855] text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
            접속하기
          </button>
          <Link href="/board" className="block text-center mt-4 text-gray-500 hover:underline">
            ← 게시판으로 돌아가기
          </Link>
        </form>
      </div>
    );
  }

  // 2. 글쓰기 화면
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#002855]">새 글 작성기</h1>
        <Link href="/board" className="text-gray-500 hover:text-blue-600">
          나가기
        </Link>
      </div>
      
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        
        {/* 제목 입력 */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">제목</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="예: 2026년 심리바우처 이용 안내"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 이미지 파일명 입력 */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            이미지 파일명 <span className="text-xs font-normal text-orange-500">(깃허브 public 폴더에 올린 파일명)</span>
          </label>
          <div className="flex gap-2">
            <span className="p-3 bg-gray-100 border border-r-0 rounded-l-lg text-gray-500">/</span>
            <input
              type="text"
              className="w-full p-3 border rounded-r-lg focus:outline-none focus:border-blue-500"
              placeholder="예: mind-01.jpg (비워두면 로고가 나옵니다)"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />
          </div>
        </div>

        {/* 내용 입력 */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">내용</label>
          <textarea
            className="w-full p-3 border rounded-lg h-64 focus:outline-none focus:border-blue-500"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button 
          onClick={handleGenerate}
          className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-md"
        >
          코드 생성하기
        </button>
      </div>

      {/* 결과창 */}
      {generatedCode && (
        <div className="mt-10 animate-fade-in-up">
          <div className="bg-gray-800 rounded-t-xl p-4 flex justify-between items-center">
            <span className="text-green-400 font-bold">🎉 코드 생성 완료!</span>
            <button 
              onClick={handleCopy}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition"
            >
              복사하기
            </button>
          </div>
          <div className="bg-black p-6 rounded-b-xl overflow-x-auto">
            <p className="text-gray-400 text-sm mb-4 border-b border-gray-700 pb-2">
              1. 위 <b>[복사하기]</b> 버튼을 누르세요.<br/>
              2. 깃허브 <b>app/lib/posts.ts</b> 파일로 가서 <b>posts</b> 목록의 맨 윗줄에 붙여넣으세요.
            </p>
            <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
              {generatedCode}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
