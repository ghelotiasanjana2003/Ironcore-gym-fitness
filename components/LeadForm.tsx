"use client";
import { useState } from "react";
export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  return sent ? <div className="border border-green-200 bg-green-50 p-6 text-green-800"><h3 className="font-bold">Thanks for reaching out!</h3><p className="mt-1 text-sm">Your demo request has been recorded in this preview.</p><button onClick={() => setSent(false)} className="mt-3 text-sm underline">Send another request</button></div> : <form onSubmit={e => {e.preventDefault(); setSent(true)}} className="grid gap-4">
    <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Full name<input required placeholder="Your name" className="mt-2 font-normal"/></label><label className="text-sm font-semibold">Email address<input type="email" required placeholder="you@example.com" className="mt-2 font-normal"/></label></div>
    <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Phone number<input type="tel" placeholder="+91" className="mt-2 font-normal"/></label><label className="text-sm font-semibold">Interested in<select className="mt-2 font-normal"><option>Gym membership</option><option>Personal training</option><option>Group classes</option><option>Gym tour / trial</option></select></label></div>
    {!compact && <label className="text-sm font-semibold">Message<textarea rows={4} placeholder="Tell us what your fitness goals are..." className="mt-2 font-normal"/></label>}
    <button className="btn w-fit" type="submit">Submit request <span aria-hidden>→</span></button><p className="text-xs text-gray-500">Demo form only. Connect a backend to receive real submissions.</p>
  </form>;
}
