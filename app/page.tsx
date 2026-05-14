"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Header from "./components/Header";

function track(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.gtag?.("event", event, params);
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (
    images: string[],
    startIndex = 0,
    galleryName = "gallery"
  ) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);

    track("gallery_open", { gallery: galleryName, count: images.length });
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const showPrev = () => {
    setLightboxIndex(
      (i) => (i - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  const showNext = () => {
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, lightboxImages.length]);

  return (
    <>
      {/* JSON-LD (SEO) */}
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
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

      <main className="min-h-screen bg-white text-slate-900 scroll-pt-40">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[100dvh] w-full overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/hero.jpg"
              alt="Advanced Developers project"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div
              className="
                min-h-[100dvh]
                flex items-center
                pt-[calc(env(safe-area-inset-top)+6.5rem)]
                pb-16
              "
            >
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.03]">
                  Residential projects
                  <span className="block">developed and delivered.</span>
                </h1>

                <p className="mt-8 text-xl md:text-2xl text-white/85 max-w-2xl leading-relaxed">
                  From feasibility through to completion —
                  <span className="block">
                    coordinated, structured and built with intent.
                  </span>
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white/90 transition"
                  >
                    Discuss your project
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex justify-center rounded-xl border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 backdrop-blur transition"
                  >
                    View selected work
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Sydney & Central Coast
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Builder + developer delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Clear scope & reporting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver */}
        <section id="approach" className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Disciplined delivery from day one
              </h2>
              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Every project is approached commercially and methodically — from
                early feasibility through approvals and controlled construction
                delivery.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Feasibility & strategy",
                  desc: "Early advice on buildability, cost direction and development strategy before drawings are locked in.",
                },
                {
                  step: "02",
                  title: "Approvals coordination",
                  desc: "Engagement with planners, engineers and consultants to streamline documentation and approvals.",
                },
                {
                  step: "03",
                  title: "Structured construction",
                  desc: "Clear scope definition, disciplined programming and controlled site management.",
                },
                {
                  step: "04",
                  title: "Turnkey completion",
                  desc: "Final delivery with documentation, handover clarity and long-term performance in mind.",
                },
              ].map((item) => (
                <div key={item.step} className="border-t border-slate-200 pt-6">
                  <div className="text-sm text-slate-400 font-medium">
                    {item.step}
                  </div>
                  <div className="mt-2 text-lg font-semibold">{item.title}</div>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="py-28 bg-slate-50 border-t border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight">
                Selected projects
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Architect-designed homes and structured duplex and multi-dwelling
                projects delivered across Sydney and the Central Coast.
              </p>
            </div>

            {/* Top Row – Exteriors */}
            <div className="mt-16 grid md:grid-cols-2 gap-14">
              {/* Project 1 */}
              <div>
                <div className="relative overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(
                        ["/hero2.jpg", "/hero3.jpg", "/hero4.jpg", "/hero.jpg"],
                        0,
                        "architect-designed-residence"
                      )
                    }
                    className="group block w-full text-left"
                    aria-label="Open gallery: Architect-designed residence"
                  >
                    <img
                      src="/hero2.jpg"
                      alt="Architect-designed residence"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105 cursor-zoom-in"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="text-xl font-semibold">
                    Architect-designed residence
                  </div>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Architect-designed custom home delivered with structured
                    scope control and disciplined site execution.
                  </p>
                  <a href="/custom-home-builder-sydney" className="mt-3 inline-block text-sm font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600 transition">Custom home builder Sydney →</a>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="relative overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(
                        [
                          "/project2.jpg",
                          "/project3.jpg",
                          "/project4.jpg",
                          "/project5.jpg",
                        ],
                        0,
                        "duplex-development"
                      )
                    }
                    className="group block w-full text-left"
                    aria-label="Open gallery: Duplex development"
                  >
                    <img
                      src="/project2.jpg"
                      alt="Duplex development"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105 cursor-zoom-in"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="text-xl font-semibold">Duplex development</div>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Dual-occupancy development structured from feasibility
                    through to completion.
                  </p>
                  <a href="/duplex-builders-sydney" className="mt-3 inline-block text-sm font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600 transition">Duplex builders Sydney →</a>
                </div>
              </div>
            </div>

            {/* Interior Highlight */}
            <div className="mt-20">
              <div className="relative overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      [
                        "/interior.jpg",
                        "/interior2.jpg",
                        "/interior4.jpg",
                        "/interior3.jpg",
                      ],
                      0,
                      "interior-detailing"
                    )
                  }
                  className="group block w-full text-left"
                  aria-label="Open gallery: Interior detailing & finish"
                >
                  <img
                    src="/interior.jpg"
                    alt="Interior detailing"
                    className="w-full object-cover transition duration-700 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
                </button>
              </div>

              <div className="mt-6 max-w-2xl">
                <div className="text-xl font-semibold">
                  Interior detailing & finish
                </div>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  High-quality finishes and clean architectural execution
                  carried through to internal spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Built on experience, run with systems
              </h2>

              <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                Advanced Developers is a licensed NSW builder delivering{" "}
                <a href="/custom-home-builder-sydney" className="underline underline-offset-2 hover:text-slate-900 transition">architect-designed homes</a>,{" "}
                <a href="/duplex-builders-sydney" className="underline underline-offset-2 hover:text-slate-900 transition">duplexes</a> and{" "}
                <a href="/townhouse-developments-sydney" className="underline underline-offset-2 hover:text-slate-900 transition">structured multi-dwelling developments</a>{" "}
                across Sydney and the Central Coast.
                <br />
                <br />
                We operate with a builder’s discipline and a developer’s
                commercial awareness — ensuring buildability, budgets and
                approvals are handled with clarity from day one.
                <br />
                <br />
                Every project is delivered with defined scope, coordinated
                consultants and controlled site execution from feasibility
                through to completion.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Quality-first delivery",
                    desc: "Detail-led execution, durable finishes, and proper supervision on site.",
                  },
                  {
                    title: "Clear scope & reporting",
                    desc: "No ambiguity — variations, selections and decisions managed properly.",
                  },
                  {
                    title: "Program discipline",
                    desc: "Trades sequenced correctly, lead times managed, and issues escalated early.",
                  },
                  {
                    title: "Commercial thinking",
                    desc: "Buildability, budgets and approvals handled with development awareness.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-5 bg-white"
                  >
                    <div className="font-semibold text-slate-900">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="/about.jpg"
                  alt="On-site delivery"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-white border-t border-slate-200"
        >
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Discuss your project
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Tell us what you’re building and where. We’ll come back with the
                next steps.
              </p>

              <div className="mt-6 text-sm text-slate-700 space-y-2">
                <div>
                  Licensed NSW builder. Fully insured. Operating across Sydney
                  and the Central Coast.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  info@advanceddevelopers.com.au
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  0411 824 803
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
                <h3 className="text-xl font-semibold">Thank you.</h3>
                <p className="mt-3 text-slate-600">
                  Your enquiry has been received. We’ll be in touch within 1–2
                  business days.
                </p>
              </div>
            ) : (
              <form
                className="rounded-3xl border border-slate-200 bg-white p-6"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const data = new FormData(form);

                  try {
                    const response = await fetch(
                      "https://formspree.io/f/mlgwywzo",
                      {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                      }
                    );

                    let payload: any = null;
                    try {
                      payload = await response.json();
                    } catch {}

                    if (response.ok) {
                      setSubmitted(true);
                      form.reset();
                      return;
                    }

                    console.log("Formspree status:", response.status);
                    console.log("Formspree payload:", payload);

                    const message =
                      payload?.errors?.[0]?.message ||
                      payload?.message ||
                      `Submission failed (${response.status}). Check console.`;

                    alert(message);
                  } catch (error) {
                    console.error("Network error:", error);
                    alert("Network error. Please try again.");
                  }
                }}
              >
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      name="name"
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Project type</label>
                    <select
                      name="project_type"
                      required
                      defaultValue=""
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>Custom home</option>
                      <option>Duplex</option>
                      <option>Townhouse / multi-dwelling</option>
                      <option>Development feasibility</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Project details</label>
                    <textarea
                      name="message"
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 min-h-[130px]"
                    />
                  </div>

                  <p className="text-sm text-slate-600">
                    Prefer a quick call?{" "}
                    <a
                      className="font-semibold text-slate-900 underline underline-offset-4"
                      href="tel:0411824803"
                    >
                      0411 824 803
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Request a project review
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
<footer className="py-10">
  <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
    <div className="flex items-center gap-4">
      <span>
        ©{" "}
        <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
        Advanced Developers
      </span>
      <span className="text-slate-300">|</span>
      <a
        href="https://www.houzz.com.au/pro/webuser-924310412"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-slate-900 transition"
      >
        Find us on Houzz
      </a>
    </div>
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-500">
      <a href="/custom-home-builder-sydney" className="hover:text-slate-900 transition">Custom Homes</a>
      <a href="/duplex-builders-sydney" className="hover:text-slate-900 transition">Duplex Projects</a>
      <a href="/townhouse-developments-sydney" className="hover:text-slate-900 transition">Townhouse Developments</a>
    </div>
  </div>
</footer>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Project gallery"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div className="relative w-full max-w-5xl">
              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/90 hover:text-white text-sm font-semibold"
              >
                Close ✕
              </button>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <img
                  src={lightboxImages[lightboxIndex]}
                  alt={`Gallery image ${lightboxIndex + 1} of ${lightboxImages.length}`}
                  className="w-full max-h-[80vh] object-contain"
                />

                {/* Prev/Next (only if multiple) */}
                {lightboxImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Counter + CTA */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-white/80 text-sm">
                  {lightboxImages.length > 1
                    ? `${lightboxIndex + 1} / ${lightboxImages.length}`
                    : ""}
                </div>

                <a
                  href="#contact"
                  onClick={() => {
                    closeLightbox();
                    track("gallery_cta_click", { from: "lightbox" });
                  }}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/90 transition"
                >
                  Request a project review
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}