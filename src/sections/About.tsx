import { motion } from "framer-motion";
import { FiServer, FiLayout, FiShield, FiZap } from "react-icons/fi";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/utils/constants";
import { EDUCATION } from "@/data/experience";

const STATS = [
  { value: "3.8+", label: "Years of experience" },
  { value: "2", label: "Enterprise domains" },
  { value: "40%", label: "DB performance gain" },
  { value: "10+", label: "Microservices shipped" },
];

const VALUES = [
  {
    icon: FiServer,
    title: "Backend-first",
    desc: "Clean ASP.NET Core APIs, SOLID principles, layered architecture that scales.",
  },
  {
    icon: FiLayout,
    title: "Full-stack fluent",
    desc: "Responsive React.js UIs wired tightly to typed .NET back-ends and SQL.",
  },
  {
    icon: FiShield,
    title: "Security minded",
    desc: "JWT authentication, role-based access control, HTTPS, and safe data handling.",
  },
  {
    icon: FiZap,
    title: "Performance obsessed",
    desc: "Query tuning with EF Core, caching strategies and fast CI/CD feedback loops.",
  },
];

export function About() {
  const edu = EDUCATION[0];

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="About me"
          title="A full-stack developer who ships."
          subtitle="I partner with teams to turn ideas into production-grade enterprise applications — from secure APIs to polished React dashboards."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Left: copy + stats + education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-ink-600 dark:text-ink-300"
          >
            <p className="text-base leading-relaxed sm:text-lg">
              I'm a .NET Full Stack Developer based in {SITE.location}. For the
              last {SITE.yearsOfExperience} years I've designed, built and
              deployed scalable enterprise-grade web applications using{" "}
              <span className="font-medium text-ink-800 dark:text-ink-100">
                C#, ASP.NET Core, Web API, Angular, React.js
              </span>{" "}
              and{" "}
              <span className="font-medium text-ink-800 dark:text-ink-100">
                SQL Server
              </span>
              .
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              My strengths are{" "}
              <span className="font-medium text-ink-800 dark:text-ink-100">
                Microservices Architecture
              </span>
              , RESTful API design and database optimization with Entity
              Framework Core and LINQ — with a strong focus on building secure,
              high-performance systems. I work daily with JWT &amp; OAuth2,
              SOLID principles, Docker, Kubernetes, Redis, RabbitMQ and CI/CD
              on Azure DevOps / GitHub Actions, and I pair that with clean,
              responsive  React interfaces.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass-card !p-4 text-center"
                >
                  <p className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education callout */}
            {edu && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300">
                  {/* Graduation-cap style svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                    <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Education
                  </p>
                  <p className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-ink-600 dark:text-ink-300">
                    {edu.school}
                    {edu.location ? ` · ${edu.location}` : ""}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right: values grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="glass-card group hover:border-brand-500/40 hover:shadow-glow"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 transition-transform group-hover:scale-105 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
