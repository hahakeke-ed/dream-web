import Link from "next/link";
import { serviceDetails, services, site } from "../app/data/site";

type ServiceSlug = keyof typeof serviceDetails;

const accentClass: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-600/10 text-blue-300",
  rose: "border-rose-500/30 bg-rose-600/10 text-rose-300",
  green: "border-emerald-500/30 bg-emerald-600/10 text-emerald-300",
  amber: "border-amber-500/30 bg-amber-600/10 text-amber-300",
};

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const detail = serviceDetails[slug];
  const service = services.find((item) => item.slug === slug);
  const accent = service ? accentClass[service.accent] : accentClass.blue;

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link href="/#services" className="text-sm font-bold text-amber-400 hover:text-amber-300">
            상담 서비스로 돌아가기
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
                {service?.eyebrow ?? "Counseling"}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-normal text-slate-100 md:text-5xl">{detail.title}</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">{detail.subtitle}</p>
            </div>
            <div className={`rounded-lg border p-6 ${accent}`}>
              <p className="text-sm font-bold">예약제 상담</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                상담 유형과 가능한 시간을 먼저 확인한 뒤 예약을 확정합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1fr]">
          <aside className="rounded-2xl border border-slate-600 bg-slate-800 p-6">
            <h2 className="text-xl font-bold text-slate-100">상담 안내</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
              <p>전화: {site.phone}</p>
              <p>운영: 사전 예약제</p>
              <p>원칙: 비밀보장과 독립된 상담 공간</p>
            </div>
          </aside>

          <div>
            <p className="text-lg leading-9 text-slate-300">{detail.intro}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {detail.sections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-slate-600 bg-slate-800 p-6">
                  <h2 className="text-xl font-bold text-slate-100">{section.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
