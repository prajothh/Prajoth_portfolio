import { motion } from "framer-motion";
import { FiBriefcase, FiCheck, FiMapPin } from "react-icons/fi";
import { SectionHeader } from "@/components/SectionHeader";
import { EXPERIENCES } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative bg-ink-50/60 dark:bg-ink-900/30"
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've been"
          subtitle="My journey as a .NET Full Stack Developer — shipping production enterprise apps end-to-end."
          align="left"
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500/40 via-ink-300 to-transparent dark:via-ink-700 md:left-6"
          />

          <ol className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-glow md:left-[0.375rem] md:h-11 md:w-11">
                  <FiBriefcase className="h-4 w-4 md:h-5 md:w-5" />
                </span>

                <div className="glass-card hover:border-brand-500/40 hover:shadow-glow">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {exp.role}{" "}
                        <span className="text-gradient">@ {exp.company}</span>
                      </h3>
                      {exp.location && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                          <FiMapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </p>
                      )}
                    </div>
                    <span className="rounded-full border border-ink-200 bg-white/70 px-3 py-1 font-mono text-xs font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-900/70 dark:text-ink-300">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
                          <FiCheck className="h-3 w-3" />
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.stack && exp.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
