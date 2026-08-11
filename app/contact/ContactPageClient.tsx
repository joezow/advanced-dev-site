"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Keep budget bands configurable in one place.
const BUDGET_OPTIONS = [
  "Under $1m",
  "$1m – $1.5m",
  "$1.5m – $2m",
  "$2m – $3m",
  "$3m+",
  "Not yet determined",
];

const I_AM_OPTIONS = ["Homeowner", "Architect / Designer", "Developer", "Other"];

const PROJECT_TYPE_OPTIONS = [
  "Custom home",
  "Dual occupancy / residential development",
  "Other",
];

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-[#f3f3f3] text-black">
      <Header forceScrolled theme="light" />

      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
              Discuss your project
            </h1>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Tell us a little about your project.
            </p>

            <div className="mt-6 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">Email:</span>{" "}
              info@advanceddevelopers.com.au
            </div>
          </div>

          {submitted ? (
            <div className="border border-neutral-200 bg-white p-8 text-center">
              <h3 className="text-xl font-semibold text-black">Thank you.</h3>
              <p className="mt-3 text-neutral-600">
                Your enquiry has been received. We&apos;ll be in touch within 1–2
                business days.
              </p>
            </div>
          ) : (
            <form
              className="border border-neutral-200/80 bg-white p-8 md:p-10"
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

                  let payload: { errors?: { message?: string }[]; message?: string } | null =
                    null;
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
              <div className="grid gap-5">
                <div>
                  <label className="text-sm font-medium text-neutral-700">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">I am</label>
                  <select
                    name="i_am"
                    required
                    defaultValue=""
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black"
                  >
                    <option value="" disabled className="text-neutral-400">Select…</option>
                    {I_AM_OPTIONS.map((option) => (
                      <option key={option} className="text-black bg-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">Project location</label>
                  <input
                    name="project_location"
                    required
                    placeholder="Suburb or area"
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">Project type</label>
                  <select
                    name="project_type"
                    required
                    defaultValue=""
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black"
                  >
                    <option value="" disabled className="text-neutral-400">Select…</option>
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option} className="text-black bg-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Approximate construction budget{" "}
                    <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <select
                    name="budget"
                    defaultValue=""
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black"
                  >
                    <option value="" className="text-neutral-400">Select…</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} className="text-black bg-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">Tell us about your project</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us what you're planning, where the project is up to, and anything else you think we should know."
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-black placeholder:text-neutral-400 min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
                >
                  Start a conversation
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
