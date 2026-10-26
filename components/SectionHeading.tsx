export default function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`mb-8 max-w-2xl ${light ? "text-white" : ""}`}><p className="eyebrow mb-3">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className={`mt-3 max-w-xl text-[15px] leading-7 ${light ? "text-gray-300" : "text-gray-600"}`}>{description}</p>}</div>;
}
