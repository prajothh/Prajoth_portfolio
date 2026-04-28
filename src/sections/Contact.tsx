import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { SOCIALS } from "@/data/socials";
import { SITE } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // UI-only demo: simulate network request.
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setForm(INITIAL);
      window.setTimeout(() => setSent(false), 3500);
    }, 900);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something great."
          subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card flex flex-col justify-between gap-8"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300">
                  <FiMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-display text-base font-semibold hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300">
                  <FiPhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Phone
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="font-display text-base font-semibold hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300">
                  <FiMapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Based in
                  </p>
                  <p className="font-display text-base font-semibold">
                    {SITE.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                Around the web
              </p>
              <div className="flex flex-wrap gap-2">
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
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="glass-card space-y-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingField
                id="name"
                label="Your name"
                placeholder="Jane Doe"
                icon={FiUser}
                value={form.name}
                onChange={onChange}
                required
              />
              <FloatingField
                id="email"
                type="email"
                label="Your email"
                placeholder="you@company.com"
                icon={FiMail}
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <FloatingField
              id="subject"
              label="Subject"
              placeholder="What's this about?"
              icon={FiMessageCircle}
              value={form.subject}
              onChange={onChange}
            />

            <FloatingField
              id="message"
              label="Message"
              placeholder="Tell me about your project..."
              multiline
              value={form.message}
              onChange={onChange}
              required
            />

            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-ink-500 dark:text-ink-400">
                I usually reply within 24 hours.
              </p>
              <Button type="submit" disabled={submitting} size="lg">
                {sent ? (
                  <>
                    <FiCheckCircle className="h-4 w-4" />
                    Message sent!
                  </>
                ) : submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* -------------- Labeled input field -------------- */

interface FieldProps {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  required?: boolean;
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  multiline,
  icon: Icon,
  required,
}: FieldProps) {
  const inputClasses = cn(
    "peer block w-full rounded-xl border border-ink-200 bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-all focus-ring",
    "focus:border-brand-500 focus:bg-white",
    "dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-50 dark:placeholder:text-ink-500 dark:focus:bg-ink-900",
    Icon && "pl-10"
  );

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="flex items-center text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400"
      >
        {label}
        {required && <span className="ml-1 text-fuchsia-500">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            className={cn(
              "pointer-events-none absolute left-3 h-4 w-4 text-ink-400 transition-colors peer-focus:text-brand-500",
              multiline ? "top-3.5" : "top-1/2 -translate-y-1/2"
            )}
          />
        )}
        {multiline ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            rows={5}
            placeholder={placeholder ?? label}
            className={cn(inputClasses, "resize-none")}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder ?? label}
            className={inputClasses}
          />
        )}
      </div>
    </div>
  );
}
