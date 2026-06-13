import MobileMenu from "./MobileMenu";
import { Show } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
  return (
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
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </nav>
);
}
