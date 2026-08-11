import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Approach | Advanced Developers",
  description:
    "How Advanced Developers approaches a project — collaborative, detail-led and flexible from the outset.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/approach",
  },
  openGraph: {
    title: "Our Approach | Advanced Developers",
    description:
      "How Advanced Developers approaches a project — collaborative, detail-led and flexible from the outset.",
    url: "https://www.advanceddevelopers.com.au/approach",
  },
  twitter: {
    title: "Our Approach | Advanced Developers",
    description:
      "How Advanced Developers approaches a project — collaborative, detail-led and flexible from the outset.",
  },
};

export default function ApproachPage() {
  return (
    <main className="bg-[#f3f3f3] text-black">
      <Header forceScrolled theme="light" />

      {/* Intro */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            Our approach
          </p>
          <h1 className="mt-5 text-4xl font-normal leading-[1.05] tracking-tight text-black md:text-5xl">
            Considered from the start.
          </h1>
        </div>
      </section>

      {/* 1 — Construction approach — image left, text right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/project5.jpg"
                  alt="Duplex development — aerial view"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">Construction approach</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                We believe great homes are created when good design and good
                construction work together.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                We collaborate closely with clients, architects and
                consultants, bringing practical construction knowledge to
                the project while keeping sight of the design intent and the
                quality of the finished home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — The details matter — text left, image right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/portfolio/contemporary-residence/02.jpg"
                  alt="Kitchen joinery detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 order-2 md:order-none mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">The details matter</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                Beautiful homes are shaped by the details — the way
                materials meet, how finishes are resolved and the quality of
                what is ultimately built.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                We take a considered approach to execution, with close
                attention to workmanship and the small decisions that make a
                difference to the finished home.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                View our portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Flexible from the outset — image left, text right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/portfolio/dual-residence/03.jpg"
                  alt="Dual Residence — bedroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">Flexible from the outset</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                We can become involved while a project is still taking shape
                or join the team once the design and documentation are
                complete.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                Where we are involved early, we can contribute practical
                input around buildability, cost and construction. Where the
                design is already resolved, our focus is on understanding it
                thoroughly and executing it well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — From plan to completion — text left, image right */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/portfolio/split-level-residence/01.jpg"
                  alt="Living space — completed residence"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 order-2 md:order-none mt-10 md:mt-0">
              <h2 className="text-2xl font-normal tracking-tight text-black md:text-3xl">From plan to completion</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-800">
                We believe in clarity throughout the build — realistic
                costs, open communication and resolving decisions before
                they become problems on site.
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-800">
                From planning and procurement through to construction and
                handover, our focus remains the same: work efficiently, get
                the details right and deliver a home the client is proud
                of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
