import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 1. 페이지 헤더 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">센터 소개</h1>
        <p className="text-lg text-gray-600">
          전문성과 윤리성을 갖춘 드림심리상담센터입니다.
        </p>
      </div>

      {/* 2. 센터장 인사말 */}
      <section className="mb-24 flex flex-col md:flex-row gap-10 items-start">
        {/* 인사말 텍스트 */}
        <div className="flex-1 bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></span>
            센터장 인사말
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              안녕하십니까? <strong>드림심리상담센터</strong>입니다.
            </p>
            <p>
              우리 센터는 2011년 개원하여 현재까지 지역의 심리상담전문기관으로 성장하고 있습니다.
              기관의 외형을 키우기보다는 <strong>상담 전문성</strong>과 <strong>상담 윤리성</strong>을 지키며,
              내원하는 모든 내담자의 성장과 회복을 돕고자 합니다.
            </p>
            <p>
              이를 위해 모든 상담자는 <strong>한국상담심리학회의 1, 2급 전문가</strong>로만 상담을 진행합니다.
              또한 한국상담심리학회 수련감독기관으로서 상담전문가의 성장과 수련을 돕고 있습니다.
            </p>
            <p>
              앞으로도 지역사회에서 전문성과 윤리성을 모두 갖춘 좋은 심리 상담 기관이 되겠습니다.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="font-bold text-gray-900 text-right">
                센터장 이00 <br/>
                <span className="text-sm text-gray-600 font-normal">
                  (한국상담심리학회 상담심리사 1급(수퍼바이저) / 국가 청소년상담사 1급)
                </span>
              </p>
            </div>
          </div>
        </div>
        
        {/* 우측 이미지 (상담실 입구) */}
        <div className="w-full md:w-1/3">
           <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
             {/* 이미지가 없을 경우를 대비해 alt 텍스트가 표시됩니다 */}
             <Image 
               src="/images/entry.jpg" 
               alt="상담실 입구" 
               fill 
               className="object-cover"
             />
           </div>
           <p className="text-center text-gray-500 mt-2 text-sm">편안한 상담실 입구</p>
        </div>
      </section>

      {/* 3. 센터 내부 모습 (갤러리) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="w-2 h-8 bg-green-500 mr-3 rounded-full"></span>
          센터 둘러보기
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 사진 1: 대기실 */}
          <div className="group relative h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <Image 
              src="/images/lounge.jpg" 
              alt="대기실" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white text-center">
              아늑한 대기실
            </div>
          </div>

          {/* 사진 2: 뷰가 좋은 상담실 */}
          <div className="group relative h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <Image 
              src="/images/counseling_room.jpg" 
              alt="상담실" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white text-center">
              탁 트인 전망의 상담실
            </div>
          </div>

          {/* 사진 3: 놀이치료실 */}
          <div className="group relative h-72 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <Image 
              src="/images/play_room.jpg" 
              alt="놀이치료실" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
             <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white text-center">
              아이들을 위한 놀이치료실
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
