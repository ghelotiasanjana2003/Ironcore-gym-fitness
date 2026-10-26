import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="bg-[#17181d] text-white">
    <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
      <div><Link href="/" className="flex items-center gap-3 text-xl font-black italic"><Dumbbell className="text-[#d7193f]"/> IRONCORE FITNESS</Link><p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">Train with purpose. Build strength, confidence, and habits that last.</p><div className="mt-5 flex gap-3 text-gray-300"><Instagram size={19}/><Facebook size={19}/></div></div>
      <div><h3 className="mb-4 font-extrabold uppercase">Explore</h3><div className="grid gap-3 text-sm text-gray-400">{[["About","/about"],["Programs","/programs"],["Trainers","/trainers"],["Timetable","/timetable"]].map(([n,h])=><Link key={h} href={h} className="hover:text-white">{n}</Link>)}</div></div>
      <div><h3 className="mb-4 font-extrabold uppercase">Membership</h3><div className="grid gap-3 text-sm text-gray-400">{[["Plans & Pricing","/pricing"],["Membership","/membership"],["Try Us","/try-us"],["Contact","/contact"]].map(([n,h])=><Link key={h} href={h} className="hover:text-white">{n}</Link>)}</div></div>
      <div><h3 className="mb-4 font-extrabold uppercase">Get in touch</h3><p className="mb-3 flex gap-3 text-sm text-gray-400"><MapPin size={17} className="shrink-0 text-[#d7193f]"/> Your city, India</p><p className="mb-3 flex gap-3 text-sm text-gray-400"><Phone size={17} className="text-[#d7193f]"/> +91 00000 00000</p><p className="flex gap-3 text-sm text-gray-400"><Mail size={17} className="text-[#d7193f]"/> hello@ironcore.example</p></div>
    </div>
    <div className="border-t border-white/10"><div className="container flex flex-col justify-between gap-2 py-5 text-xs text-gray-500 sm:flex-row"><span>© {new Date().getFullYear()} IronCore Fitness. All rights reserved.</span><span>Privacy · Terms · Membership policy</span></div></div>
  </footer>;
}
