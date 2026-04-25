import type { Experience, Education } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Codereach Software and Education Pvt. Ltd.",
    role: ".NET Full Stack Developer",
    period: "Sep 2022 — Present",
    location: "Pune, Maharashtra",
    description:
      "Designing, developing and deploying scalable enterprise web applications end-to-end — from secure ASP.NET Core APIs and SQL Server databases to React.js dashboards.",
    achievements: [
      "Developed RESTful APIs with ASP.NET Core Web API for booking, inventory and order-processing systems.",
      "Designed database schemas and optimized SQL queries using Entity Framework Core and SQL Server.",
      "Built React.js dashboards for real-time data visualization and analytics.",
      "Implemented JWT authentication and role-based access control (RBAC) for secure access management.",
      "Performed performance optimization, debugging and automated testing of APIs and UI.",
      "Managed Docker containerization and deployment in CI/CD environments.",
      "Collaborated with cross-functional teams in Agile Scrum cycles.",
    ],
    stack: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "SQL Server",
      "React.js",
      "Docker",
      "JWT",
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
