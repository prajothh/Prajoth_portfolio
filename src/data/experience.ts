import type { Experience, Education } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Codereach Software Pvt. Ltd.",
    role: ".NET Full Stack Developer",
    period: "Sep 2022 — Present",
    location: "Pune, Maharashtra",
    description:
      "Designing, developing and deploying scalable enterprise web applications end-to-end — from secure ASP.NET Core APIs and Microservices to Angular and React dashboards, with a strong focus on performance, security and clean architecture.",
    achievements: [
      "Developed scalable RESTful APIs with ASP.NET Core Web API for booking, inventory and order-processing systems.",
      "Designed and optimized SQL Server schemas and complex queries — improved query performance by up to 30%.",
      "Built dynamic React.js dashboards for real-time analytics and reporting.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC) for secure application access.",
      "Improved performance through code optimization, debugging and caching strategies.",
      "Containerized applications with Docker and managed deployments via CI/CD pipelines.",
      "Collaborated with cross-functional teams in Agile Scrum environments to deliver high-quality software.",
    ],
    stack: [
      "C#",
      ".NET Core",
      "ASP.NET Core",
      "Web API",
      "Microservices",
      "Entity Framework Core",
      "LINQ",
      "SQL Server",
      "React.js",
      "Docker",
      "JWT",
      "CI/CD",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: "Pune University",
    degree: "Bachelor of Engineering — Computer Engineering",
    location: "Pune, Maharashtra",
  },
];
