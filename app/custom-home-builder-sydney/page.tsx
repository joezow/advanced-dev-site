import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Custom Home Builder Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering architect-designed custom homes across Sydney and the Central Coast.",
};

export default function CustomHomeBuilderSydneyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Architect-designed custom home by Advanced Developers"
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
              Custom home builder in Sydney and the Central Coast
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl">
              Architect-designed homes delivered with practical builder input,
              disciplined coordination and high-quality construction from early
              planning through to completion.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Discuss your home
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
              Architect-designed homes built with builder-led discipline
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                A custom home project should not feel disjointed between design,
                approvals and construction. The best outcomes happen when the
                buildability, detailing and delivery strategy are considered
                early, not left until the project is ready to break ground.
              </p>

              <p>
                Advanced Developers delivers custom homes for clients seeking a
                well-built result, careful coordination and clear project
                management. We work alongside architects, designers and
                consultants to help carry projects from early planning through
                approvals, construction and completion.
              </p>

              <p>
                Whether the project is a new home, knock-down rebuild or
                architect-led residence, our role is to make sure the design is
                delivered properly on site, with strong supervision and
                attention to detail.
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
                  "Builder input during design development",
                  "Coordination with architects and consultants",
                  "Knock-down rebuild delivery",
                  "Approvals and documentation support",
                  "High-quality construction and site supervision",
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

      {/* Design + buildability */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="/interior.jpg"
              alt="Interior detailing in custom home"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Good design needs practical construction input
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                Custom homes often involve complex detailing, higher-quality
                finishes and more coordination between trades and consultants.
                When construction thinking is brought into the process early,
                the design can be delivered more cleanly and with fewer surprises
                once work begins.
              </p>

              <p>
                We work with architect-designed homes that require careful
                execution, disciplined sequencing and consistent attention to
                detail across the build.
              </p>

              <p>
                Already have drawings or approvals in place? We are also engaged
                on projects that are ready to proceed, providing construction
                pricing and full build delivery in coordination with the
                existing design team where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build types */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Homes we build
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                We deliver custom homes for owner occupiers, knock-down rebuilds
                for families wanting to stay in established areas, and
                architect-led residences where construction quality and detailing
                are central to the outcome.
              </p>

              <p>
                Every project is different, but the objective is the same:
                thoughtful coordination, clear scope management and a durable,
                well-finished home at completion.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold">Typical project types</h3>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>Architect-designed custom homes</li>
                <li>Knock-down rebuilds</li>
                <li>High-end residential builds</li>
                <li>Complex homes with detailed finishes</li>
                <li>Homes requiring close consultant coordination</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="/about.jpg"
              alt="Custom home construction by Advanced Developers"
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
                Discuss your custom home project
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-white/80">
                If you are planning a custom home or knock-down rebuild, talk to
                us about the design, approvals and construction pathway.
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