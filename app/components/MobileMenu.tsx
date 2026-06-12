"use client";

import { useState } from "react";
import Link from "next/link";
import { Show } from "@clerk/nextjs";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="bg-transparent border-0 text-[#f0ede8]"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-4 px-6 py-6 bg-[#161616] rounded-xl">
          <a href="#features">Features</a>

          <a href="#how-it-works">
            How it works
          </a>

          <Show when="signed-out">
            <Link href="/sign-in">
              Sign in
            </Link>

            <Link href="/sign-up">
              Get started
            </Link>
          </Show>
        </div>
      )}
    </div>
  );
}