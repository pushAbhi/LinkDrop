import Link from "next/link";
import { Show } from "@clerk/nextjs";
import Image from "next/image"


const LINKS = [
  { icon: "𝕏", label: "Twitter / X", clicks: "1.2k" },
  { icon: "⬡", label: "Portfolio", clicks: "847" },
  { icon: "◈", label: "GitHub", clicks: "512" },
  { icon: "✦", label: "Blog", clicks: "290" },
];

const STATS = [
  { n: "10k+", label: "pages created" },
  { n: "2M+", label: "total clicks tracked" },
  { n: "<60s", label: "setup time" },
];

export default function Hero() {
    return(
      <section className="pt-36 pb-24 px-6 max-w-275 mx-auto hero ">

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
                href="/dashboard"
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
    );
}