import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { portfolioProjects } from "../data";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} | Advanced Developers`;
  const description = truncateAtWord(
    project.narrative.replace(/\s*\n+\s*/g, " "),
    155
  );
  const url = `https://www.advanceddevelopers.com.au/portfolio/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = portfolioProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = portfolioProjects[index];
  const next = portfolioProjects[(index + 1) % portfolioProjects.length];
  const remaining = project.images.slice(1);

  return (
    <main className="bg-[#f3f3f3] text-black">
      <Header forceScrolled theme="light" />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Title + narrative */}
      <section className="py-16 md:py-24">
        <div className="px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
              {project.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-500">{project.region}</p>
            <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-700">
              {project.narrative.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining photography — alternating rhythm */}
      <section className="pb-24 md:pb-32">
        <div className="flex flex-col gap-16 md:gap-24">
          {(() => {
            const blocks: ReactNode[] = [];
            let i = 0;
            let blockIndex = 0;
            const layout = project.galleryLayout;
            while (i < remaining.length) {
              const isLastSingle = i === remaining.length - 1;
              const isFullWidth = layout
                ? layout[blockIndex] === "full"
                : blockIndex % 3 === 0 || isLastSingle;
              // Only the default (no explicit layout) heuristic risks stranding an
              // odd trailing image as a bad crop — that's the only case that gets
              // the uncropped object-contain treatment.
              const isStrayFullWidth = !layout && isLastSingle && !(blockIndex % 3 === 0);
              if (isFullWidth) {
                const img = remaining[i];
                blocks.push(
                  <div key={i} className="px-8 md:px-16">
                    <div
                      className={
                        isStrayFullWidth
                          ? "relative h-[60vh] md:h-[80vh] w-full overflow-hidden"
                          : "relative aspect-[16/9] w-full overflow-hidden"
                      }
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100vw"
                        className={isStrayFullWidth ? "object-contain" : "object-cover"}
                      />
                    </div>
                  </div>
                );
                i += 1;
              } else {
                const pair = remaining.slice(i, i + 2);
                blocks.push(
                  <div
                    key={i}
                    className="px-8 md:px-16 grid gap-4 md:gap-6 sm:grid-cols-2"
                  >
                    {pair.map((img, j) => (
                      <div
                        key={i + j}
                        className="relative aspect-[4/5] w-full overflow-hidden"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                );
                i += pair.length;
              }
              blockIndex += 1;
            }
            return blocks;
          })()}
        </div>
      </section>

      {/* Next project + CTA */}
      <section className="border-t border-neutral-300 py-24 md:py-32">
        <div className="px-8 md:px-16 text-center">
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-black">
            Discuss an upcoming project?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block border-b border-neutral-300 pb-0.5 text-base font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          >
            Start a conversation →
          </Link>

          <div className="mt-16 border-t border-neutral-300 pt-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Next project
            </p>
            <Link
              href={`/portfolio/${next.slug}`}
              className="mt-3 inline-block text-xl font-medium text-neutral-600 transition hover:text-neutral-900"
            >
              {next.title} →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
