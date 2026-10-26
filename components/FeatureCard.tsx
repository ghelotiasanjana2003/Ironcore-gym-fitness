import type { LucideIcon } from "lucide-react";
export default function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return <div className="card hover-lift p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#d7193f] text-white"><Icon size={23}/></div><h3 className="text-[15px] font-extrabold uppercase">{title}</h3><p className="mt-2 text-[13px] leading-6 text-gray-600">{description}</p></div>;
}
