import clsx, { type ClassValue } from "clsx";

/**
 * Small helper to compose conditional className strings.
 * Wraps `clsx` so we have a single import across the app.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
