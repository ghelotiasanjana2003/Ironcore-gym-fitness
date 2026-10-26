"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
const links = [["About","/about"],["Programs","/programs"],["Features","/features"],["Trainers","/trainers"],["Timetable","/timetable"],["Membership","/membership"],["Pricing","/pricing"],["Contact","/contact"]];
export default function Header() {
 const [open,setOpen]=useState(false); const pathname=usePathname();
 return <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_3px_18px_rgba(0,0,0,.04)] backdrop-blur-md">
  <div className="container flex min-h-[68px] items-center justify-between gap-5">
   <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={()=>setOpen(false)}>
    <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#e11d48] text-white"><Dumbbell size={19}/></span>
    <span className="text-[15px] font-black tracking-tight">IRONCORE<span className="ml-1 text-[#e11d48]">FITNESS</span><span className="mt-0.5 block text-[8px] font-bold tracking-[.23em] text-gray-500">TRAIN TO GO FURTHER</span></span>
   </Link>
   <nav className="hidden items-center gap-4 lg:flex xl:gap-5">{links.map(([label,href])=><Link key={href} href={href} className={`relative whitespace-nowrap py-2 text-[12px] font-bold transition hover:text-[#e11d48] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#e11d48] after:transition-all ${pathname===href?"text-[#e11d48] after:w-full":"text-gray-700 after:w-0 hover:after:w-full"}`}>{label}</Link>)}<Link href="/try-us" className="rounded-sm bg-green-600 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-green-700">Try us</Link></nav>
   <button aria-label="Toggle navigation" onClick={()=>setOpen(!open)} className="rounded border border-gray-200 p-2 lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
  </div>
  {open&&<nav className="grid grid-cols-2 gap-1 border-t bg-white p-3 shadow-lg lg:hidden">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="rounded p-3 text-sm font-semibold hover:bg-gray-50 hover:text-[#e11d48]">{label}</Link>)}<Link href="/try-us" onClick={()=>setOpen(false)} className="col-span-2 rounded bg-green-600 p-3 text-center text-sm font-bold text-white">Try us</Link></nav>}
 </header>;
}
