import Link from "next/link";
import SmsButton from "../components/SmsButton";
import { services, site } from "./data/site";
import { getBoardPosts } from "./lib/googleBoard";

const accentClass: Record<string, string> = {
  blue: "hover:border-amber-500",
  rose: "hover:border-rose-500",
  green: "hover:border-emerald-500",
  amber: "hover:border-purple-500",
};

export default async function Home() {
  const posts = (await getBoardPosts()).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <section
        className="relative flex min-h-screen items-center px-4 py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('${site.heroImage}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold">마음을 치유하는 전문기관</h1>
          <p className="mb-8 text-xl text-slate-200">
            전문적이고 따뜻한 심리상담으로
            <br />
            당신의 마음을 보살펴 드립니다
          </p>
        </div>
      </section>

      <section id="expertise" className="bg-gradient-to-br from-slate-800 to-gray-800 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-100">검증된 전문가와 함께 합니다</h2>
            <p className="text-lg text-slate-400">
              한국심리학회 상담심리사 자격을 보유한 상담자의 상담이 진행됩니다.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-600 bg-slate-700/50 p-8">
              <div className="mb-6 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-xl text-white">
                  ♙
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-100">심리상담 전문가 자격</h3>
                  <p className="text-slate-400">Korean Psychology Association</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-slate-300">한국심리학회 상담심리사 1급, 2급</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-slate-300">국가 청소년 상담사 1급</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-600 bg-slate-700/50 p-8">
              <div className="mb-6 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl text-white">
                  ✓
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-100">특징 및 장점</h3>
                  <p className="text-slate-400">Professional Counseling Features</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">개인별 맞춤형 상담 프로그램</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">철저한 개인정보 보호</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">편안하고 안전한 상담 환경</span>
                </div>
              </div>
              <div className="mt-10 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-center text-base font-bold leading-7 text-emerald-200">
                  상담사를 지도하는 ‘수퍼바이저’ 전문가
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                  ▣
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-100">한국심리학회의 검증된 전문가</h3>
                <p className="text-sm text-slate-400">Professional Association Membership</p>
              </div>
              <div className="mb-6 text-center">
                <p className="text-sm leading-6 text-slate-300">
                  한국심리학회는 가장 엄격한 자격검증 기준(학위, 임상 수련등)으로 전문성을 확보하고 널리
                  공인받고 있습니다.
                  <br />
                  (하단: 지역별 상담심리사 검색 서비스 제공중)
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://krcpa.or.kr/user/new/index.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                >
                  한국상담심리학회
                </a>
                <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 text-center text-sm font-bold leading-6 text-blue-100">
                  한국상담심리학회 수련감독 기관
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-100">상담 서비스</h2>
            <p className="text-lg text-slate-400">개인적 필요에 맞는 전문적인 심리상담을 제공합니다</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`group cursor-pointer rounded-2xl border border-slate-600 bg-slate-800 p-8 transition-all ${accentClass[service.accent]}`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-600 text-2xl text-white transition-colors group-hover:bg-amber-500">
                  ●
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-100">{service.title}</h3>
                <p className="mb-4 text-slate-400">{service.summary}</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="voucher" className="bg-gradient-to-br from-blue-900/20 to-indigo-900/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-100">정신건강심리상담바우처</h2>
            <p className="text-lg text-slate-400">-정부 지원 사업으로 부담없이 전문 심리상담을 받을 수 있습니다</p>
          </div>

          <div className="rounded-3xl border border-slate-600 bg-slate-800/50 p-8 backdrop-blur-sm md:p-12">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <img
                  src="/voucher.png"
                  alt="정신건강심리상담바우처 안내 포스터"
                  className="h-auto w-full rounded-2xl border border-slate-700 object-cover object-top shadow-2xl"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-3xl font-bold text-slate-100">정부 지원 심리상담 서비스</h3>
                  <p className="mb-8 text-lg leading-relaxed text-slate-300">
                    드림심리상담센터는 <span className="font-semibold text-blue-400">정신건강심리상담바우처 수행기관</span>으로
                    우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공합니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                      1
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold text-slate-200">정부 지원 프로그램</h4>
                      <p className="text-slate-400">보건복지부에서 시행</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm text-white">
                      2
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold text-slate-200">전문가 자격 보장</h4>
                      <p className="text-slate-400">
                        국가 자격 및 한국심리학회, 한국상담심리학회 자격을 보유한 심리사만이 상담서비스 제공
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm text-white">
                      3
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold text-slate-200">경제적 부담 완화</h4>
                      <p className="text-slate-400">정부 지원을 통해 합리적인 비용으로 전문적인 상담 이용 가능</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-8">
                    <p className="mb-6 leading-relaxed text-slate-400">
                      학교, 정신건강복지센터, 청소년상담복지센터, 병의원 의뢰서 등을 통해 신청하거나 직접 센터로 문의하시면 자세한 안내를 받을 수 있습니다.
                    </p>
                    <a
                      href={site.kakaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-yellow-400 px-6 text-sm font-bold text-black transition hover:bg-yellow-300"
                    >
                      정신건강심리상담바우처 전용 문의
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-gradient-to-br from-gray-900 to-slate-900 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-100">서비스 이용절차</h2>
            <p className="text-lg text-slate-400">1:1 예약서비스로 체계적이고 전문적인 상담을 제공합니다</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-gray-800 p-8">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-600">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-slate-100">서비스 신청</h3>
                  <p className="mb-6 text-slate-300">
                    현재 1:1 예약서비스이므로 반드시 문자 예약을 통해 신청해 주세요.
                  </p>
                  <div className="space-y-4">
                    <SmsButton className="h-12">문자 예약</SmsButton>
                    <p className="text-xs text-slate-500">
                      PC에서는 번호와 내용을 복사합니다. 휴대폰에 전송해 주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-gray-800 p-8">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-600">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-slate-100">서비스 이용</h3>
                  <p className="mb-6 text-slate-300">상담 유형에 따라 소요시간이 다릅니다</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm text-white">
                        •
                      </div>
                      <div>
                        <span className="font-medium text-slate-300">개인상담</span>
                        <p className="text-sm text-slate-400">50분 기준</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm text-white">
                        •
                      </div>
                      <div>
                        <span className="font-medium text-slate-300">부부상담, 가족상담</span>
                        <p className="text-sm text-slate-400">90분 기준</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-100">소식 및 칼럼</h2>
              <p className="mt-3 text-slate-400">간단한 공지와 칼럼을 확인할 수 있습니다</p>
            </div>
            <Link href="/board" className="text-sm font-bold text-amber-400 hover:text-amber-300">
              전체 보기
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/${post.id}`}
                  className="rounded-2xl border border-slate-600 bg-slate-800 p-6 transition hover:border-amber-500"
                >
                  <p className="text-sm font-bold text-amber-400">{post.category || "소식"}</p>
                  <h3 className="mt-3 text-xl font-bold leading-7 text-slate-100">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{post.summary}</p>
                  <p className="mt-5 text-xs text-slate-500">{post.date}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-600 bg-slate-800 p-8 text-center text-slate-400">
              게시판은 Google Sheets 연결 후 표시됩니다.
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="bg-[#102435] px-4 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8cc3d1]">Contact</p>
            <h2 className="mt-4 text-4xl font-bold tracking-normal">상담 예약 및 오시는 길</h2>
            <p className="mt-6 text-xl leading-8 text-slate-300">{site.address}</p>
            <div className="mt-8">
              <a
                href={site.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-white/30 px-8 text-lg font-bold text-white transition hover:border-white"
              >
                네이버 지도 보기
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white p-5">
            <h3 className="mb-4 text-xl font-bold text-[#102435]">프라이빗 상담 공간</h3>
            <img src="/map.png" alt="드림심리상담센터 약도" className="w-full rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
