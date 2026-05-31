"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-sm font-mono text-white shadow-lg shadow-violet-500/20">
            WE
          </span>
          <span>World Explorer</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/countries" className={linkClass}>
            Countries
          </Link>
          <Link href="/search" className={linkClass}>
            Search
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
        </nav>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:px-2">
            <Link href="/" onClick={() => setOpen(false)} className={linkClass}>
              Home
            </Link>
            <Link
              href="/countries"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Countries
            </Link>
            <Link
              href="/search"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Search
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
