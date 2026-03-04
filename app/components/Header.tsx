"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll -> toggle glass/white state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll(); // set correct state on load/refresh
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop background scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const linkCls = `transition ${scrolled ? "hover:text-slate-900" : "hover:text-white"}`;

  return (
    <>
      {/* Glass header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 md:pt-6">
        <div
          className={`w-[95%] max-w-6xl rounded-2xl px-4 md:px-7 py-2 md:py-3 flex items-center justify-between gap-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-md border border-slate-200"
              : "bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"
          }`}
        >
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img src="/logo.png" alt="Advanced Developers" className="h-9 md:h-12 w-auto shrink-0" />
            <div
              className={`font-sans font-semibold tracking-[0.18em] truncate text-[13px] sm:text-base md:text-xl max-w-[55vw] sm:max-w-none ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              ADVANCED DEVELOPERS
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-10 text-base font-medium tracking-wide ${
              scrolled ? "text-slate-700" : "text-white/90"
            }`}
          >
            <a href="#approach" className={linkCls}>
              How We Deliver
            </a>
            <a href="#projects" className={linkCls}>
              Projects
            </a>
            <a href="#about" className={linkCls}>
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg px-6 py-2 text-[15px] font-semibold transition ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Discuss your project
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm md:hidden"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="font-sans font-semibold tracking-[0.18em] text-slate-900 text-sm">
                MENU
              </div>
              <button
                type="button"
                className="rounded-lg px-3 py-2 text-slate-900"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="px-4 pb-4">
              <div className="grid gap-2">
                <a
                  href="#approach"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-900 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  How We Deliver
                </a>
                <a
                  href="#projects"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-900 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-900 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-white font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Discuss your project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}