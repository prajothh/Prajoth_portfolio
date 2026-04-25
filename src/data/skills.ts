import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiSharp,
  SiDotnet,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiJsonwebtokens,
} from "react-icons/si";
import { FiLayers, FiServer, FiDatabase } from "react-icons/fi";
import type { Skill } from "@/types";

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, icon: SiReact, color: "text-sky-500", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: SiTypescript, color: "text-blue-500", category: "Frontend" },
  { name: "JavaScript", level: 92, icon: SiJavascript, color: "text-yellow-400", category: "Frontend" },
  { name: "HTML5 & CSS3", level: 95, icon: SiHtml5, color: "text-orange-500", category: "Frontend" },
  { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "text-cyan-400", category: "Frontend" },
  { name: "Bootstrap", level: 90, icon: SiBootstrap, color: "text-violet-500", category: "Frontend" },
  { name: "Material UI", level: 82, icon: SiMui, color: "text-sky-400", category: "Frontend" },

  // Backend
  { name: "C#", level: 92, icon: SiSharp, color: "text-purple-500", category: "Backend" },
  { name: "ASP.NET Core", level: 90, icon: SiDotnet, color: "text-violet-600", category: "Backend" },
  { name: "Web API / REST", level: 92, icon: FiServer, color: "text-blue-500", category: "Backend" },
  { name: "Entity Framework Core", level: 88, icon: FiLayers, color: "text-emerald-500", category: "Backend" },
  { name: "JWT & RBAC", level: 85, icon: SiJsonwebtokens, color: "text-pink-500", category: "Backend" },

  // Databases
  { name: "SQL Server", level: 88, icon: FiDatabase, color: "text-red-500", category: "Databases" },
  { name: "MySQL", level: 82, icon: SiMysql, color: "text-sky-600", category: "Databases" },

  // Tools
  { name: "Git", level: 92, icon: SiGit, color: "text-orange-500", category: "Tools" },
  { name: "GitHub", level: 90, icon: SiGithub, color: "text-ink-900 dark:text-white", category: "Tools" },
  { name: "Docker", level: 78, icon: SiDocker, color: "text-blue-400", category: "Tools" },
  { name: "Postman", level: 88, icon: SiPostman, color: "text-orange-500", category: "Tools" },
  { name: "Swagger / OpenAPI", level: 86, icon: SiSwagger, color: "text-green-500", category: "Tools" },
];
