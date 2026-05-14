import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Townhouse Developments Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering townhouse and multi-dwelling residential developments across Sydney and the Central Coast.",
};

export default function TownhouseDevelopmentsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/townhouse.jpg"
            alt="Townhouse and multi-dwelling residential development"
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
              Townhouse and multi-dwelling developments
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl">
              Multi-dwelling residential projects delivered with practical
              builder input, approvals coordination and disciplined construction
              management.
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
              Multi-dwelling delivery with builder-led coordination
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                Townhouse and multi-dwelling residential developments demand
                more coordination, clearer staging and tighter control than a
                typical single dwelling build.
              </p>

              <p>
                Advanced Developers works with developers, investors and project
                teams to help carry multi-dwelling projects from feasibility and
                approvals through to construction and completion, with a focus
                on buildability, sequencing and practical delivery.
              </p>

              <p>
                We understand that townhouse projects need more than a builder
                who can simply execute drawings. They require early thinking,
                clear communication and control of the documentation,
                consultant coordination and construction process.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 text-white shadow-sm">
            <div className="border-b border-white/10 px-7 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                WHAT WE HELP WITH
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Development delivery support
              </h3>
            </div>

            <div className="px-7 py-7">
              <div className="grid gap-4">
                {[
                  "Feasibility and early review",
                  "Builder input during design",
                  "Approvals and consultant coordination",
                  "Documentation review before build",
                  "Construction delivery and site management",
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

      {/* Why these projects differ */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="/townhouse2.jpg"
              alt="Residential development construction"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Townhouse projects need more than straightforward construction
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                Multi-dwelling developments involve more interfaces between
                consultants, authorities, trades and staging. Access, services,
                structural coordination, sequencing and documentation quality all
                have a greater impact on time and cost.
              </p>

              <p>
                Builder input early in the process helps reduce design issues,
                identify delivery constraints and improve the way the project
                moves from approval into construction.
              </p>

              <p>
                Already have drawings or approvals in place? We are also engaged
                to price and deliver townhouse and multi-dwelling projects that
                are ready to proceed, working with the existing architect and
                consultant team where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical considerations */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Early questions matter on development projects
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                The cost of getting key decisions wrong is higher on townhouse
                and multi-dwelling developments. Site access, retaining,
                stormwater, services, staging, driveways and authority
                requirements all influence whether the project will run cleanly.
              </p>

              <p>
                We help assess the practical side of delivery early so the path
                to construction is more controlled and less reactive.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold">Typical early questions</h3>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>Is the scheme practical to build as drawn?</li>
                <li>What will likely affect time and cost?</li>
                <li>Are there site access or services constraints?</li>
                <li>What should be resolved before construction starts?</li>
                <li>How can approvals and construction stay aligned?</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="/project5.jpg"
              alt="Townhouse and residential development delivery"
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
                Discuss your townhouse or multi-dwelling project
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-white/80">
                If you are planning a townhouse or residential development
                project, talk to us about feasibility, approvals and the path to
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