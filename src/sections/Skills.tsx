import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { SKILLS } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { cn } from "@/utils/cn";

const CATEGORIES: Array<SkillCategory | "All"> = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

export function Skills() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const visible =
    active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section-padding relative bg-ink-50/60 dark:bg-ink-900/30"
    >
      <div className="container-max">
        <SectionHeader
          eyebrow="Skills & stack"
          title="My toolbox"
          subtitle="A curated set of tools I reach for every day — pragmatic, battle-tested and optimized for shipping delightful products."
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skill cards with progress bars */}
        <motion.div
          layout
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                className="glass-card group flex flex-col gap-4 hover:border-brand-500/40 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-2xl transition-transform group-hover:scale-110 dark:bg-ink-800",
                        skill.color
                      )}
                    >
                      <Icon />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold">
                        {skill.name}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-semibold text-ink-700 dark:text-ink-200">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-fuchsia-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
