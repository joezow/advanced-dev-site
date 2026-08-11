import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Custom Home Builder Sydney | Advanced Developers",
  description:
    "Licensed NSW builder delivering architect-designed custom homes across Sydney and the Central Coast.",
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au/custom-home-builder-sydney",
  },
  openGraph: {
    title: "Custom Home Builder Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering architect-designed custom homes across Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au/custom-home-builder-sydney",
  },
  twitter: {
    title: "Custom Home Builder Sydney | Advanced Developers",
    description:
      "Licensed NSW builder delivering architect-designed custom homes across Sydney and the Central Coast.",
  },
};

export default function CustomHomeBuilderSydneyPage() {
  return (
    <main className="bg-[#f3f3f3] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Home Builder Sydney",
            url: "https://www.advanceddevelopers.com.au/custom-home-builder-sydney",
            description: "Licensed NSW builder delivering architect-designed custom homes across Sydney and the Central Coast.",
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
            src="/hero2.jpg"
            alt="Custom home built by Advanced Developers, Sydney"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(0,0,0,0.55),transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-end px-8 md:px-14 pb-20 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl">
              Custom home builders in Sydney and the Central Coast
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Individually designed homes, built in close collaboration with
              clients, architects and consultants.
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
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                slug: "split-level-residence",
                title: "Upper North Shore Residence",
                region: "Upper North Shore, NSW",
                image: "/portfolio/split-level-residence/01.jpg",
              },
              {
                slug: "contemporary-residence",
                title: "North Shore Residence",
                region: "Upper North Shore, NSW",
                image: "/portfolio/contemporary-residence/01.jpg",
              },
            ].map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-base font-medium text-black">{p.title}</div>
                  <div className="text-sm text-neutral-500">{p.region}</div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-10 inline-block border-b border-neutral-300 pb-0.5 text-sm font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            View full portfolio →
          </Link>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 border-t border-neutral-300">
        <div className="mx-auto max-w-6xl px-8 md:px-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            How we work with clients and architects
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Whether it&rsquo;s a new home on a vacant block or a knock-down
            rebuild, we&rsquo;re often engaged early — working alongside
            architects and consultants to bring practical input on
            buildability, materials and cost while the design is still being
            developed.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Just as often, we join a project once the design and
            documentation are already complete, working with the existing
            architect and consultant team to deliver the home as drawn, to
            the level of finish it was designed for.
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
            Talk to us about your custom home.
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
