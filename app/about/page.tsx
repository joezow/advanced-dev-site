import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Advanced Developers",
  description:
    "Advanced Developers is a residential development and construction company delivering custom homes across Sydney and the Central Coast since 2001.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/about",
  },
  openGraph: {
    title: "About Us | Advanced Developers",
    description:
      "Advanced Developers is a residential development and construction company delivering custom homes across Sydney and the Central Coast since 2001.",
    url: "https://www.advanceddevelopers.com.au/about",
  },
  twitter: {
    title: "About Us | Advanced Developers",
    description:
      "Advanced Developers is a residential development and construction company delivering custom homes across Sydney and the Central Coast since 2001.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#f3f3f3] text-black">
      <Header forceScrolled theme="light" />

      {/* Intro */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            Our story
          </p>
          <h1 className="mt-5 text-4xl font-normal leading-[1.05] tracking-tight text-black md:text-5xl">
            Building since 2001.
          </h1>
        </div>
      </section>

      {/* About us — image left, text right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/about-construction.jpg"
                  alt="Cladding installation on site — Advanced Developers"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">About us</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                Established in 2001, Advanced Developers is a residential
                development and construction company focused on custom homes
                across Sydney and the Central Coast.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                More than two decades of experience across building and
                development shapes the way we approach each project — with a
                practical understanding of construction, close attention to
                detail and a focus on the quality of the finished home.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — text left, image right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/portfolio/dual-residence/01.jpg"
                  alt="Floating staircase — construction detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 order-2 md:order-none mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">How we work</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                We believe a successful home should be beautiful, well built
                and delivered with clarity.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                We work collaboratively with clients, architects and
                consultants, with an emphasis on transparency, attention to
                detail, cost awareness and getting things right the first
                time. Our aim is to deliver a home the client is genuinely
                proud of.
              </p>
              <Link
                href="/approach"
                className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                Discover our approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our team — image left (construction), text right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="Steel-frame construction in progress"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">Our team</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                Our team stays closely involved in every project.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                From the early stages through to completion, we work
                directly with clients, consultants and trades to resolve
                decisions, maintain quality and keep the project moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs uppercase tracking-widest text-neutral-400">Credentials</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
            {[
              ["NSW Builder's Licence", "275709C"],
              ["Insurance", "HBCF home warranty & public liability"],
              ["Membership", "Master Builders Association"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-xs uppercase tracking-widest text-neutral-400">{label}</div>
                <div className="mt-2 text-sm text-neutral-700">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            Have a project in mind?
          </p>
          <p className="mt-5 text-3xl font-normal tracking-tight text-black md:text-4xl">
            Talk to us about your project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
