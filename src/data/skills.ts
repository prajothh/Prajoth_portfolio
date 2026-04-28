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
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FiLayers,
  FiServer,
  FiDatabase,
  FiBox,
  FiCloud,
  FiCheckSquare,
} from "react-icons/fi";
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
  { name: "ASP.NET Core", level: 92, icon: SiDotnet, color: "text-violet-600", category: "Backend" },
  { name: "Web API / REST", level: 92, icon: FiServer, color: "text-blue-500", category: "Backend" },
  { name: "Microservices", level: 85, icon: FiBox, color: "text-emerald-500", category: "Backend" },
  { name: "Entity Framework Core", level: 88, icon: FiLayers, color: "text-emerald-500", category: "Backend" },
  { name: "LINQ", level: 88, icon: FiLayers, color: "text-indigo-500", category: "Backend" },
  { name: "JWT & RBAC", level: 86, icon: SiJsonwebtokens, color: "text-pink-500", category: "Backend" },

  // Databases
  { name: "SQL Server", level: 88, icon: FiDatabase, color: "text-red-500", category: "Databases" },
  { name: "MySQL", level: 82, icon: SiMysql, color: "text-sky-600", category: "Databases" },
  { name: "MongoDB", level: 78, icon: SiMongodb, color: "text-green-500", category: "Databases" },
  { name: "Redis", level: 76, icon: SiRedis, color: "text-rose-500", category: "Databases" },

  // Tools
  { name: "Git", level: 92, icon: SiGit, color: "text-orange-500", category: "Tools" },
  { name: "GitHub", level: 90, icon: SiGithub, color: "text-ink-900 dark:text-white", category: "Tools" },
  { name: "Docker", level: 82, icon: SiDocker, color: "text-blue-400", category: "Tools" },
  { name: "Kubernetes", level: 75, icon: SiKubernetes, color: "text-blue-500", category: "Tools" },
  { name: "Azure / DevOps", level: 80, icon: FiCloud, color: "text-sky-500", category: "Tools" },
  { name: "RabbitMQ", level: 74, icon: SiRabbitmq, color: "text-orange-500", category: "Tools" },
  { name: "Postman", level: 88, icon: SiPostman, color: "text-orange-500", category: "Tools" },
  { name: "Swagger / OpenAPI", level: 86, icon: SiSwagger, color: "text-green-500", category: "Tools" },
  { name: "xUnit / NUnit", level: 80, icon: FiCheckSquare, color: "text-emerald-500", category: "Tools" },
];
