import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { Button } from "@/components/Button";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { SOCIALS } from "@/data/socials";
import { SITE } from "@/utils/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const firstName = SITE.name.split(" ")[0];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <BackgroundGrid />

      <div className="container-max relative z-10 px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {SITE.availability}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm{" "}
            <span className="animated-gradient-text">{firstName}</span>.
            <br className="hidden sm:block" />
            <span className="text-ink-700 dark:text-ink-200">
              A{" "}
            </span>
            <span className="text-gradient">.NET Full Stack</span>
            <span className="text-ink-700 dark:text-ink-200"> developer.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base text-ink-600 dark:text-ink-300 sm:text-lg"
          >
            {SITE.yearsOfExperience} years of experience building secure, scalable enterprise
            applications and microservices with{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">C#</span>,{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">ASP.NET Core</span>,{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">Web API</span>,{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">Angular</span> and{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">React.js</span> —
            based in {SITE.location}.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a href="#projects">
              <Button size="lg">
                View my work
                <FiArrowDown className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                <FiMail className="h-4 w-4" />
                Get in touch
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-3"
            aria-label="Social links"
          >
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={s.label}
                  className="focus-ring group inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-600 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300 dark:hover:text-brand-400"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-300 p-1 dark:border-ink-700">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-ink-400 dark:bg-ink-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
