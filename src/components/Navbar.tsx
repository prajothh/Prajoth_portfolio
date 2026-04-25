import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_LINKS, SITE } from "@/utils/constants";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const scrolled = useScrollPosition(24);
  const activeId = useScrollSpy(sectionIds, 160);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/50 dark:border-white/10 dark:bg-ink-950/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-max flex h-16 items-center justify-between px-5 sm:px-8 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleAnchorClick(e, "#home")}
          className="focus-ring group flex items-center gap-2 rounded-full"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 font-display text-sm font-bold text-white shadow-glow transition-transform group-hover:scale-105">
            PK
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:block">
            {SITE.name.split(" ")[0]}
            <span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring group relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-ink-900 dark:text-white"
                      : "text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                  )}
                >
                  <span className="relative">
                    {link.label}
                    {/* Hover underline (transient, grows from left) */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 transition-transform duration-300 ease-out",
                        "group-hover:scale-x-100",
                        isActive && "scale-x-0"
                      )}
                    />
                    {/* Active underline (persistent, animated between links) */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        aria-hidden
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="hidden md:block"
          >
            <Button size="sm">Hire me</Button>
          </a>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <FiX className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <FiMenu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-ink-200/70 bg-white/90 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-950/90"
          >
            <ul className="container-max flex flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((link, i) => {
                const id = link.href.slice(1);
                const isActive = activeId === id;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-gradient-to-r from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-white"
                          : "text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                >
                  <Button fullWidth>Hire me</Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
