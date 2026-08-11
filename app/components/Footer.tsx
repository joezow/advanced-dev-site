export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 py-8">
      <div className="mx-auto max-w-[1220px] px-8 md:px-16">
        <div className="flex flex-col items-start justify-between gap-3 text-sm text-neutral-500 md:flex-row md:items-center">
          <span>
            ©{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Advanced Developers
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://www.instagram.com/advanceddevelopers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.houzz.com.au/pro/webuser-924310412"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition"
            >
              Houzz
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200 text-xs tracking-wide text-neutral-400">
          Builder&rsquo;s Licence 275709C · HBCF Insured · Master Builders
          Association Member
        </div>
      </div>
    </footer>
  );
}
