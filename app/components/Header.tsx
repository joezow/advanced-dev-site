"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  forceScrolled = false,
  theme = "dark",
}: { forceScrolled?: boolean; theme?: "dark" | "light" } = {}) {
  const light = theme === "light";
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (forceScrolled) return;
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight - 550);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-10 lg:px-14 transition-all duration-500 ${
          scrolled
            ? light
              ? "bg-white/90 backdrop-blur-md py-3 border-b border-neutral-200"
              : "bg-neutral-950/90 backdrop-blur-md py-3"
            : "bg-transparent py-8"
        }`}
      >
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Advanced Developers"
            width={500}
            height={500}
            priority
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-24"}`}
          />
          <span
            className={`font-semibold tracking-[0.2em] hidden sm:block transition-all duration-500 ${
              scrolled && light ? "text-black" : "text-white"
            } ${scrolled ? "text-sm" : "text-3xl"}`}
          >
            ADVANCED DEVELOPERS
          </span>
        </Link>

        {/* + button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`flex items-center justify-center focus:outline-none transition-all duration-500 ${
            scrolled && light ? "text-black" : "text-white"
          } ${scrolled ? "w-10 h-10" : "w-16 h-16"}`}
        >
          <span
            className={`block font-semibold leading-none transition-all duration-500 ${
              menuOpen ? "rotate-45" : ""
            } ${scrolled ? "text-[1.75rem]" : "text-[3rem]"}`}
          >
            +
          </span>
        </button>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[998] bg-black/50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[999] flex w-[min(85vw,420px)] flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          light ? "bg-white" : "bg-neutral-950"
        } ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div
          className={`h-[5.25rem] px-8 flex items-center justify-between border-b ${
            light ? "border-neutral-200" : "border-white/10"
          }`}
        >
          <span
            className={`text-[10px] tracking-[0.25em] uppercase ${
              light ? "text-neutral-400" : "text-white/30"
            }`}
          >
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className={`text-[10px] tracking-[0.25em] transition uppercase ${
              light ? "text-neutral-400 hover:text-black" : "text-white/40 hover:text-white"
            }`}
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-10">
          {[
            { href: "/portfolio", id: "portfolio", label: "Portfolio" },
            { href: "/about", id: "about", label: "About" },
            { href: "/approach", id: "approach", label: "Approach" },
            { href: "/contact", id: "contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[2.6rem] font-semibold leading-tight py-3 border-b transition duration-200 ${
                light ? "border-neutral-200" : "border-white/10"
              } ${
                activeSection === link.id
                  ? light
                    ? "text-black"
                    : "text-white"
                  : light
                    ? "text-neutral-400 hover:text-black"
                    : "text-white/55 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className={`mt-auto px-8 py-10 space-y-3 border-t ${
            light ? "border-neutral-200" : "border-white/10"
          }`}
        >
          <a
            href="tel:0411824803"
            className={`block text-sm tracking-wide transition ${
              light ? "text-neutral-700 hover:text-black" : "text-white/70 hover:text-white"
            }`}
          >
            0411 824 803
          </a>
          <a
            href="mailto:info@advanceddevelopers.com.au"
            className={`block text-sm transition ${
              light ? "text-neutral-500 hover:text-black" : "text-white/45 hover:text-white"
            }`}
          >
            info@advanceddevelopers.com.au
          </a>
          <div className={`text-xs pt-2 ${light ? "text-neutral-400" : "text-white/25"}`}>
            Sydney & Central Coast, NSW
          </div>
        </div>
      </div>
    </>
  );
}
