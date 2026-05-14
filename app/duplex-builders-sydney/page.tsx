import type { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Duplex Builders Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
  },
};

export default function DuplexBuildersSydneyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Script
        id="ld-json-duplex"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Duplex Builders Sydney",
            url: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
            description: "Licensed NSW builder delivering duplex and dual occupancy projects across Sydney and the Central Coast.",
            provider: {
              "@type": "ConstructionCompany",
              name: "Advanced Developers",
              url: "https://www.advanceddevelopers.com.au",
            },
            areaServed: ["Sydney", "Central Coast NSW"],
          }),
        }}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/project2.jpg"
            alt="Duplex project by Advanced Developers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-center px-6 pt-32 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
              Advanced Developers
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Duplex builders in Sydney and the Central Coast
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl">
              Duplex and multi-dwelling projects for homeowners, developers and
              investors, from feasibility and approvals through to construction
              and completion.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Discuss your project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Builder-led duplex delivery from feasibility to completion
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                Duplex and dual occupancy projects can create strong value, but
                only when the site, approvals and construction all line up.
              </p>

              <p>
                Advanced Developers delivers duplex and multi-dwelling
                residential developments for homeowners, developers and
                investors across Sydney and the Central Coast. When engaged
                early, we can coordinate design, consultants and approvals,
                working with architects and planners to take projects from
                feasibility through to construction and completion.
              </p>

              <p>
                Already have plans or approvals in place? We are also engaged on
                projects that are ready to proceed, providing construction
                pricing or full build delivery, and working with the existing
                architect and consultant team where required.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 text-white shadow-sm">
            <div className="border-b border-white/10 px-7 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                HOW WE ADD VALUE
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                What we can help with
              </h3>
            </div>

            <div className="px-7 py-7">
              <div className="grid gap-4">
                {[
                  "Site and feasibility review",
                  "Builder input during design",
                  "Approvals coordination",
                  "Cost guidance before build",
                  "Full construction delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/70" />
                    <span className="text-white/88">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/#contact"
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Planning / opportunity */}
<section className="border-y border-slate-200 bg-slate-50 py-20">
  <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
      <img
        src="/project3.jpg"
        alt="Duplex development opportunity"
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        More sites now support duplex development
      </h2>

      <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
        <p>
          Recent planning changes have opened up more opportunities for duplex
          and low-rise housing across parts of Sydney and the Central Coast.
          For some landowners, that means a site that once supported only one
          home may now have greater development potential.
        </p>

        <p>
          But that does not automatically mean a duplex project is viable. Lot
          size, frontage, slope, access, services, council controls and
          construction costs all need to be considered before real money is
          spent on design and approvals.
        </p>

        <p>
          Advanced Developers helps homeowners, developers and investors assess
          site potential early, identify likely constraints, and move projects
          forward with practical builder input from feasibility through to
          approvals and construction.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Feasibility */}
<section className="py-20">
  <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

    {/* TEXT LEFT */}
    <div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Not every block suits a duplex
      </h2>

      <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
        <p>
          Many projects lose momentum because buildability is only tested after
          the design is advanced. That often leads to redesign, delays and
          unrealistic budgets.
        </p>

        <p>
          We help assess whether a site is worth pursuing, then work with the
          design team so approvals and construction stay aligned.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
        <h3 className="text-xl font-semibold">Typical early questions</h3>

        <ul className="mt-5 space-y-3 text-slate-700">
          <li>Can this site support a duplex?</li>
          <li>Is it worth spending on design yet?</li>
          <li>What is the likely approval pathway?</li>
          <li>Are there construction constraints to consider?</li>
          <li>What should be resolved before committing further?</li>
        </ul>
      </div>
    </div>


    {/* IMAGE RIGHT */}
    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
      <img
        src="/project4.jpg"
        alt="Duplex construction and design detail"
        className="h-full w-full object-cover"
      />
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-8 py-10 text-white md:px-12 md:py-14">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Discuss your duplex project
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-white/80">
                If you are considering a duplex or residential development
                project, talk to us about feasibility, approvals and
                construction.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}