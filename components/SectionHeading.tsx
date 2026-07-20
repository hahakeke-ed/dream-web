type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#1f6f8b]">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-normal text-[#14314a] md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  );
}
