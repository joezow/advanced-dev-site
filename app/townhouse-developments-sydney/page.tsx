import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Townhouse Developments Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering townhouse and multi-dwelling residential developments across Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/townhouse-developments-sydney",
  },
  openGraph: {
    title: "Townhouse Developments Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering townhouse and multi-dwelling residential developments across Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au/townhouse-developments-sydney",
  },
  twitter: {
    title: "Townhouse Developments Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering townhouse and multi-dwelling residential developments across Sydney and the Central Coast.",
  },
};

export default function TownhouseDevelopmentsPage() {
  return (
    <main className="bg-[#f3f3f3] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Townhouse Developments Sydney",
            url: "https://www.advanceddevelopers.com.au/townhouse-developments-sydney",
            description: "Licensed NSW builder delivering townhouse and multi-dwelling residential developments across Sydney and the Central Coast.",
            provider: {
              "@type": "GeneralContractor",
              name: "Advanced Developers",
              url: "https://www.advanceddevelopers.com.au",
            },
            areaServed: ["Sydney", "Central Coast NSW"],
          }),
        }}
      />
      <Header theme="light" />

      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/townhouse.jpeg"
            alt="Multi-dwelling residential development by Advanced Developers"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(0,0,0,0.55),transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-end px-8 md:px-14 pb-20 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl">
              Multi-dwelling residential construction
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Residential development projects delivered with practical
              construction knowledge, careful coordination and attention to
              the finished outcome.
            </p>

            <div className="mt-9">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-dwelling delivery */}
      <section className="py-24 border-t border-neutral-300">
        <div className="mx-auto max-w-6xl px-8 md:px-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Multi-dwelling delivery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Townhouse and multi-dwelling projects bring more moving parts
            than a typical single dwelling — staging, shared services and
            site logistics all need to be planned before construction
            starts. We contribute practical construction input while a
            project is being designed, or join an existing architect and
            consultant team once documentation is complete to deliver the
            build.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Our duplex and dual-occupancy work in the{" "}
            <Link
              href="/portfolio"
              className="border-b border-neutral-400 pb-0.5 text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              portfolio
            </Link>{" "}
            reflects the same coordination this scale of project requires.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-neutral-300">
        <div className="mx-auto max-w-6xl px-8 md:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            Have a project in mind?
          </p>
          <p className="mt-5 text-3xl md:text-4xl font-normal tracking-tight text-black">
            Talk to us about your townhouse or multi-dwelling project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-base font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
