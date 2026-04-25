import type { IconType } from "react-icons";

export type Theme = "light" | "dark";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export type SkillCategory = "Frontend" | "Backend" | "Databases" | "Tools";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: IconType;
  color: string; // tailwind text color class, e.g. "text-sky-500"
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  highlights?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  stack?: string[];
}

export interface Education {
  school: string;
  degree: string;
  period?: string;
  location?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}
