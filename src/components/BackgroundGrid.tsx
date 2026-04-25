import { cn } from "@/utils/cn";

interface BackgroundGridProps {
  className?: string;
}

/**
 * Decorative grid + radial-fade background layer.
 * Sits behind hero / page content.
 */
export function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-60 dark:bg-grid-dark" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-radial-fade" />
      <div className="absolute -left-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-1/4 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-ink-950" />
    </div>
  );
}
