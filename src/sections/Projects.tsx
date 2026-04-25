import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import { SectionHeader } from "@/components/SectionHeader";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";
import { SITE } from "@/utils/constants";
import { cn } from "@/utils/cn";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-card transition-all hover:shadow-glow dark:border-ink-800/70 dark:bg-ink-900",
        // Featured cards take 1 col; non-featured span full width on md+ so the grid stays clean.
        !project.featured && "md:col-span-2"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          project.featured ? "aspect-[16/10]" : "aspect-[21/9]"
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
            Featured
          </span>
        )}

        {/* Hover CTA */}
        {(project.repoUrl || project.liveUrl) && (
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} repo`}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 backdrop-blur hover:bg-white"
              >
                <FiGithub className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live`}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white shadow-glow"
              >
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <FiArrowUpRight className="h-5 w-5 shrink-0 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <FiCheck className="h-3 w-3" />
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I've built"
          subtitle="Enterprise web applications delivered end-to-end with C#, ASP.NET Core, Web API and React.js."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink-700 backdrop-blur transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:text-brand-400"
          >
            <FiGithub className="h-4 w-4" />
            Explore more on GitHub
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
