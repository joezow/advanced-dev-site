import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Duplex Builders Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
  },
  openGraph: {
    title: "Duplex Builders Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
  },
  twitter: {
    title: "Duplex Builders Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
  },
};

export default function DuplexBuildersSydneyPage() {
  return (
    <main className="bg-[#f3f3f3] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Duplex Builders Sydney",
            url: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
            description: "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
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
            src="/portfolio/dual-residence/01.jpg"
            alt="Dual Residence — duplex built by Advanced Developers"
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
              Duplex builders in Sydney and the Central Coast
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Dual-occupancy construction delivered with close attention to
              detail and a consistent standard across both homes.
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

      {/* Recent work */}
      <section className="py-24 border-t border-neutral-300">
        <div className="mx-auto max-w-6xl px-8 md:px-14">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs tracking-widest text-neutral-400">Recent work</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <Link href="/portfolio/dual-residence" className="group block">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/portfolio/dual-residence/02.jpg"
                alt="Dual Residence — attached dual occupancy"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5">
              <div className="text-lg font-medium text-black">Dual Residence</div>
              <div className="text-sm text-neutral-500">Sydney, NSW</div>
            </div>
          </Link>
          <Link
            href="/portfolio"
            className="mt-8 inline-block border-b border-neutral-300 pb-0.5 text-sm font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            View full portfolio →
          </Link>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 border-t border-neutral-300">
        <div className="mx-auto max-w-6xl px-8 md:px-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            How we work on duplex and dual-occupancy projects
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            We work with homeowners, developers and investors at different
            stages of a project — contributing practical construction input
            while a design is still being developed, or joining an existing
            architect and consultant team once drawings and approvals are in
            place to deliver the build.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Both dwellings are finished to the same standard, with shared
            walls, services and access planned and sequenced before
            construction starts.
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
            Talk to us about your duplex project.
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
