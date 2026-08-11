import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioProjects } from "./data";

export const metadata: Metadata = {
  title: "Portfolio | Advanced Developers",
  description:
    "A selection of custom residential projects across Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/portfolio",
  },
  openGraph: {
    title: "Portfolio | Advanced Developers",
    description:
      "A selection of custom residential projects across Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au/portfolio",
  },
  twitter: {
    title: "Portfolio | Advanced Developers",
    description:
      "A selection of custom residential projects across Sydney and the Central Coast.",
  },
};

export default function PortfolioPage() {
  const [splitLevel, contemporary, dual, centralCoast] = portfolioProjects;

  return (
    <main className="bg-[#f3f3f3] text-black">
      <Header forceScrolled theme="light" />

      {/* Heading */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-md">
            A selection of custom residential projects across Sydney and the
            Central Coast.
          </p>
        </div>
      </section>

      {/* 1 — Upper North Shore Residence: large dominant landscape */}
      <section className="pb-24 md:pb-32">
        <div className="px-8 md:px-16">
          <Link
            href={`/portfolio/${splitLevel.slug}`}
            className="group relative block aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src={splitLevel.heroImage}
              alt={splitLevel.heroAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>
          <div className="mt-5">
            <h2 className="text-lg font-medium text-black">{splitLevel.title}</h2>
            <p className="mt-1 text-sm text-neutral-500">{splitLevel.region}</p>
          </div>
        </div>
      </section>

      {/* 2 — North Shore Residence: offset, narrower, right-aligned */}
      <section className="pb-24 md:pb-32">
        <div className="px-8 md:px-16">
          <div className="ml-auto w-full md:w-[85%]">
            <Link
              href={`/portfolio/${contemporary.slug}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={contemporary.heroImage}
                alt={contemporary.heroAlt}
                fill
                sizes="(max-width: 768px) 100vw, 85vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
            <div className="mt-5">
              <h2 className="text-lg font-medium text-black">{contemporary.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{contemporary.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Dual Residence: large dominant landscape */}
      <section className="pb-24 md:pb-32">
        <div className="px-8 md:px-16">
          <Link
            href={`/portfolio/${dual.slug}`}
            className="group relative block aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src={dual.heroImage}
              alt={dual.heroAlt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>
          <div className="mt-5">
            <h2 className="text-lg font-medium text-black">{dual.title}</h2>
            <p className="mt-1 text-sm text-neutral-500">{dual.region}</p>
          </div>
        </div>
      </section>

      {/* 4 — Central Coast Residences: offset, narrower, left-aligned */}
      <section className="pb-32 md:pb-40">
        <div className="px-8 md:px-16">
          <div className="mr-auto w-full md:w-[85%]">
            <Link
              href={`/portfolio/${centralCoast.slug}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={centralCoast.heroImage}
                alt={centralCoast.heroAlt}
                fill
                sizes="(max-width: 768px) 100vw, 85vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
            <div className="mt-5">
              <h2 className="text-lg font-medium text-black">{centralCoast.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{centralCoast.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* End of page CTA */}
      <section className="border-t border-neutral-300 py-24 md:py-32">
        <div className="px-8 md:px-16 text-center">
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-black">
            Have an upcoming project?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-base font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Start a conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
