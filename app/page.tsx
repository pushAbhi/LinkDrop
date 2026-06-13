
import Link from "next/link";
import Navbar from "./components/Navbar"

import Hero from "./components/Hero";

import Image from "next/image"
import beehive from "./public/Beehive.png"

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: Record<string, FooterLink[]> = {
  LinkDrop: [
    { label: "Pricing", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  Company: [
    { label: "Legals", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Socials: [
    { label: "Twitter", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Forum", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};


const FEATURES = [
  { icon: "∞", title: "Unlimited links", desc: "Add as many links as you want. No caps, no tiers, no paywalls." },
  { icon: "↗", title: "Click tracking", desc: "See exactly how many times each link was clicked. Per link, not just overall." },
  { icon: "◐", title: "Toggle on/off", desc: "Hide a link without deleting it — useful for seasonal promos or drafts." },
  { icon: "@", title: "Custom username", desc: "linkdrop.app/you — short, clean, easy to remember." },
  { icon: "⚷", title: "Secure auth", desc: "Clerk-powered. Google and email login supported out of the box." },
  { icon: "◎", title: "Works everywhere", desc: "Instagram bio, Twitter, resume, email signature — one link fits all." },
];

const STEPS = [
  { n: "01", title: "Create account", desc: "Email or Google. No friction. You'll be in before you finish reading this." },
  { n: "02", title: "Add your links", desc: "Paste URLs, title them, drag to reorder. Takes about 30 seconds." },
  { n: "03", title: "Share everywhere", desc: "Copy your linkdrop URL. Drop it in every bio, resume, and signature you have." },
];



export default function LandingPage() {

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#f0ede8] font-sans">

      <Image src={beehive} alt="beehive" className="absolute top-25 left-0 z-0 w-screen h-screen object-cover"/>

      {/* -----------------Navbar-------------- */}
      <Navbar />

      {/* --------------- HERO --------------------- */}
      <main className="relative z-10">
        <Hero />
      </main>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6 border-t border-white/6 max-w-275 mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#fca311] mb-3">Features</p>
          <h2 className="text-[clamp(28px,4vw,42px)] font-black tracking-tighter text-[#f0ede8] m-0">
            Built lean. Nothing extra.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6ded-2xl overflow-hidden">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[#0d0d0d] p-8 hover:bg-[#141414] transition-colors cursor-default"
            >
              <span className="block text-xl text-[#fca311] mb-3.5 font-black">{f.icon}</span>
              <h3 className="font-bold text-[15px] text-[#f0ede8] mb-2 tracking-tight">{f.title}</h3>
              <p className="text-[13px] leading-relaxed text-white/45 m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/6">
        <div className="max-w-275 mx-auto">
          <div className="mb-14">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#fca311] mb-3">How it works</p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-black tracking-tighter text-[#f0ede8] m-0">
              Three steps. Under a minute.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {STEPS.map((s) => (
              <div key={s.n}>
                <span className="block text-[11px] font-bold tracking-widest text-[#fca311]/50 mb-4">{s.n}</span>
                <div className="w-8 h-0.5 bg-[#fca311] mb-5 rounded" />
                <h3 className="font-bold text-lg text-[#f0ede8] mb-2.5 tracking-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/45 m-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 border-t border-white/6 bg-[#0d0d0d]">
        <div className="max-w-160auto text-center">
          <h2 className="text-[clamp(36px,5vw,60px)] font-black tracking-tighter text-[#f0ede8] mb-4 leading-[1.05]">
            Your link is<br />
            <em className="not-italic text-[#fca311]">waiting.</em>
          </h2>
          <p className="text-base text-white/45 mb-10">Takes 60 seconds. Free forever.</p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base text-[#0a0a0a] bg-[#fca311] no-underline tracking-tight hover:bg-amber-400 transition-colors"
          >
            Create your free page
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d0d0d] border-t border-white/6 px-10 py-12">
      <div className="max-w-275 mx-auto flex flex-col md:flex-row justify-between gap-10">
 
        {/* Left */}
        <div className="flex flex-col justify-between gap-16 max-w-xs">
          <div>
            {/* Logo */}
            <span className="text-xl font-black tracking-tight text-[#f0ede8]">
              link<span className="text-[#fca311]">drop</span>
            </span>
            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              Your whole internet life, one link.
            </p>
          </div>
          <p className="text-xs text-white/25">
            {new Date().getFullYear()} LinkDrop — All rights reserved.
          </p>
        </div>
 
        {/* Right: columns */}
        <div className="flex gap-16 flex-wrap">
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className="flex flex-col gap-3">
              <p className="text-xs text-white/35 mb-1">{col}</p>
              {links.map((link, index) =>
                  <Link
                  key = {index}
                  href={link.href}>
                    {link.label}
                  </Link>
                )
              }
            </div>
          ))}
        </div>
 
      </div>
    </footer>
    </div>
  );
}