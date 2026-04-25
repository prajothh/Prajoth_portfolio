import { FiArrowUpRight } from "react-icons/fi";
import { SOCIALS } from "@/data/socials";
import { SITE } from "@/utils/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className="container-max flex flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 font-display text-sm font-bold text-white">
            PK
          </span>
          <div>
            <p className="font-display text-base font-semibold">{SITE.name}</p>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {SITE.role} · {SITE.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              const external = s.href.startsWith("http");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  aria-label={s.label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300 dark:hover:text-brand-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
          >
            {SITE.email}
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-ink-200 dark:border-ink-800">
        <div className="container-max flex flex-col gap-2 px-5 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-ink-400">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>
            Designed & built with <span className="text-brand-500">React</span>,{" "}
            <span className="text-brand-500">Tailwind</span>, and{" "}
            <span className="text-brand-500">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
