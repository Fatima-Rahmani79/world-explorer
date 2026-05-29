"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#001954]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white-95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-[#001954]"
        >
          World Explorer
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
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
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:px-2">
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
