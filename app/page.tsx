"use client";

import Link from "next/link";
import { useState } from "react";

import { Show } from "@clerk/nextjs";

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

const LINKS = [
  { icon: "𝕏", label: "Twitter / X", clicks: "1.2k" },
  { icon: "⬡", label: "Portfolio", clicks: "847" },
  { icon: "◈", label: "GitHub", clicks: "512" },
  { icon: "✦", label: "Blog", clicks: "290" },
];

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

const STATS = [
  { n: "10k+", label: "pages created" },
  { n: "2M+", label: "total clicks tracked" },
  { n: "<60s", label: "setup time" },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0ede8] font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-5 left-20 right-20 z-50 bg-[#161616]/85 backdrop-blur-md border-b border-white/6 rounded-full">
        <div className="mx-auto h-15 flex items-center justify-between w-full py-5 px-10">

          {/* Logo */}
          <span className="text-2xl font-black tracking-tight">
            link<span className="text-[#fca311]">drop</span>
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[13px] text-white/50 no-underline tracking-wide hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-[13px] text-white/50 no-underline tracking-wide hover:text-white transition-colors">
              How it works
            </a>
            <Show when="signed-out">
              <Link href="/sign-in" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-[13px] font-semibold text-[#0a0a0a] bg-[#fca311] px-5 py-2 rounded-lg no-underline tracking-tight hover:bg-amber-400 transition-colors"
              >
                Get started
              </Link>
            </Show>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border-0 text-[#f0ede8] cursor-pointer p-0"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-4 border-t border-white/6 flex flex-col gap-4">
            <a href="#features" className="text-sm text-white/60 no-underline">Features</a>
            <a href="#how-it-works" className="text-sm text-white/60 no-underline">How it works</a>
            <Show when="signed-out">

            <Link href="/sign-in" className="text-sm text-white/60 no-underline">Sign in</Link>
            <Link
              href="/sign-up"
              className="text-sm font-semibold text-[#0a0a0a] bg-[#fca311] py-2.5 px-5 rounded-lg no-underline text-center"
            >
              Get started
            </Link>
            </Show>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-36 pb-24 px-6 max-w-275 mx-auto">

        {/* Eyebrow */}
        <div className="mb-7">
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#fca311] border border-[#fca311]/25 px-3 py-1.5 rounded-full bg-[#fca311]/[0.07]">
            One link. Everything.
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <h1 className="text-[clamp(42px,6vw,72px)] font-black leading-none tracking-tighter mb-6 text-[#f0ede8]">
              Create Your<br />
              page in,<br />
              <em className="not-italic text-[#fca311]">seconds.</em>
            </h1>

            <p className="text-[17px] leading-relaxed text-white/55 mb-10 max-w-105">
              Stop scattering your audience. One clean page. All your links.
              Share it everywhere in under a minute.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[10px] font-bold text-[15px] text-[#0a0a0a] bg-[#fca311] no-underline tracking-tight hover:bg-amber-400 transition-colors"
              >
                Create your page
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  className="inline-flex items-center px-7 py-3.5 rounded-[10px] font-semibold text-[15px] text-white/70 border border-white/12underline tracking-tight hover:border-white/25 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
              </Show>
            </div>

            <p className="mt-4 text-xs text-white/25 tracking-widest">
              Free forever · No credit card
            </p>
          </div>

          {/* Right: product preview */}
          <div className="flex justify-center">
            <div className="w-75 bg-[#111111] rounded-[20px] border border-white/8flow-hidden">

              {/* Browser chrome */}
              <div className="px-4 py-3.5 border-b border-white/6 flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  {["bg-[#ff5f57]", "bg-[#febc2e]", "bg-[#28c840]"].map((c) => (
                    <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="flex-1 bg-white/5 rounded-md px-2.5 py-1 text-[11px] text-white/30 tracking-wide">
                  linkdrop.app/<span className="text-white/55">johndoe</span>
                </div>
              </div>

              {/* Profile */}
              <div className="p-7">
                <div className="text-center mb-6">
                  <div className="w-15 h-15 rounded-full bg-[#fca311] flex items-center justify-center text-[22px] font-black text-[#0a0a0a] mx-auto mb-3">
                    J
                  </div>
                  <p className="font-bold text-[15px] text-[#f0ede8] m-0">John Doe</p>
                  <p className="text-xs text-white/40 mt-1 m-0">Developer · Builder</p>
                </div>

                <div className="flex flex-col gap-2">
                  {LINKS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-3.5 py-2.5 bg-[#1a1a1a] rounded-[10px] border border-white/6 cursor-pointer hover:bg-[#222] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[13px] text-[#fca311]">{item.icon}</span>
                        <span className="text-[13px] text-white/80 font-medium">{item.label}</span>
                      </div>
                      <span className="text-[11px] text-white/20">{item.clicks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-10 border-t border-white/6 flex items-center gap-20 flex-wrap justify-center">
          {STATS.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              <p className="text-5xl font-black text-[#f0ede8] m-0 tracking-tighter">{s.n}</p>
              <p className="text-xl text-white/35 mt-1 m-0 tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

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
              {links.map((link) =>
                  <Link
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