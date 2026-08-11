"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* JSON-LD (SEO) — plain script tag so crawlers see it in the static HTML,
          not via next/script's client-injected self.__next_s mechanism */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "Advanced Developers",
            url: "https://www.advanceddevelopers.com.au",
            telephone: "+61411824803",
            image: "https://www.advanceddevelopers.com.au/hero.jpg",
            areaServed: ["Sydney", "Central Coast NSW"],
            address: {
              "@type": "PostalAddress",
              addressRegion: "NSW",
              addressCountry: "AU",
            },
            description:
              "Licensed builder delivering architect-designed homes, duplexes and multi-dwelling developments.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Building Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Home Builder Sydney",
                    url: "https://www.advanceddevelopers.com.au/custom-home-builder-sydney",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Duplex Builders Sydney",
                    url: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Townhouse Developments Sydney",
                    url: "https://www.advanceddevelopers.com.au/townhouse-developments-sydney",
                  },
                },
              ],
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[#f3f3f3] text-black scroll-pt-40">
        <Header theme="light" />

        {/* Hero */}
        <section className="relative w-full" style={{ height: "100vh" }}>
          {/* Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-poster.webp"
              aria-hidden="true"
              className="w-full h-full object-cover object-[center_15%]"
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/18 to-black/65" />
          </div>

          {/* Scroll indicator */}
          <a
            href="#intro"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/40 lowercase">scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </a>
        </section>

        {/* Introduction */}
        <section id="intro" className="bg-[#f3f3f3] pt-16 pb-24 text-black md:pt-[70px] md:pb-32">
          <div className="px-8 md:px-16">
            <h1 className="max-w-[490px] text-xl font-normal leading-7">
              Advanced Developers is a licensed residential builder,
              delivering custom homes, duplexes and multi-dwelling projects
              across Sydney and the Central Coast.
            </h1>
            <Link
              href="/portfolio"
              className="mt-8 inline-block border-b border-neutral-400 pb-0.5 text-base font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              View portfolio
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-[#f3f3f3] pb-24 md:pb-32">
          {/* Large image — Upper North Shore Residence */}
          <div className="px-8 md:px-16">
            <Link
              href="/portfolio/split-level-residence"
              className="group relative mx-auto block aspect-[3/2] w-full max-w-[1220px] overflow-hidden"
              aria-label="View project: Upper North Shore Residence"
            >
              <Image
                src="/hero.jpg"
                alt="Upper North Shore Residence — Upper North Shore"
                fill
                priority
                sizes="(max-width: 1220px) 100vw, 1220px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Image right, text left — North Shore Residence */}
          <div className="mt-20 px-8 md:mt-28 md:px-16">
            <div className="mx-auto flex max-w-[1220px] flex-col gap-10 md:flex-row md:items-end">
              <div className="md:w-[42%] md:pb-8">
                <p className="max-w-[460px] text-xl leading-8 text-black">
                  We collaborate closely with architects, consultants and our
                  clients to deliver considered custom homes — bringing
                  practical construction knowledge, technical understanding
                  and attention to detail to every project.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block border-b border-neutral-400 pb-0.5 text-base font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                >
                  Contact us
                </Link>
              </div>
              <div className="md:w-[54%]">
                <Link
                  href="/portfolio/contemporary-residence"
                  className="group relative block aspect-[4/5] w-full overflow-hidden"
                  aria-label="View project: North Shore Residence"
                >
                  <Image
                    src="/warrawee-stairs.jpg"
                    alt="Warrawee residence — staircase detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 62vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Large image — Dual Residence */}
          <div className="mt-20 px-8 md:mt-28 md:px-16">
            <Link
              href="/portfolio/dual-residence"
              className="group relative mx-auto block aspect-[16/9] w-full max-w-[1220px] overflow-hidden"
              aria-label="View project: Dual Residence"
            >
              <Image
                src="/project2.jpg"
                alt="Dual Residence — Sydney"
                fill
                sizes="(max-width: 1220px) 100vw, 1220px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Centred text */}
          <div className="mt-16 px-8 md:px-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-2xl leading-9 text-black">
                We believe the best homes are built through collaboration.
              </p>
              <p className="mt-5 text-xl leading-9 text-black">
                Working closely with architects, consultants and clients, we
                help maximise the potential of each site and translate design
                intent into well-resolved construction — delivering
                contemporary Australian homes that are enduring, purposeful
                and built to last.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block border-b border-neutral-400 pb-0.5 text-base font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                About us
              </Link>
            </div>
          </div>
        </section>

        <Footer />

      </main>
    </>
  );
}
