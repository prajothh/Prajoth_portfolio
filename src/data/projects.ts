import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "smart-preschool-erp",
    title: "Smart Preschool ERP & Attendance Platform",
    description:
      "A School Management System that digitizes and automates academic and administrative operations — student records, attendance tracking, timetable management, teacher management, and performance reporting. Reduced manual paperwork by ~40% for school administrators and faculty.",
    tags: [
      "ASP.NET MVC",
      "C#",
      "React.js",
      "Material UI",
      "MySQL",
      "Entity Framework",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Designed and built backend services with ASP.NET MVC (C#) for student, teacher, and admin data.",
      "Responsive React.js + Material UI dashboards for teachers, students and administrators.",
      "Modules for registration, attendance, timetable scheduling, and performance reporting.",
      "Real-time sync between frontend and backend; reduced manual paperwork by ~40%.",
    ],
    featured: true,
  },
  {
    id: "enterprise-crm",
    title: "Customer Relationship Management (CRM)",
    description:
      "Enterprise CRM platform to manage customer interactions, sales leads, account management and business analytics — helping organizations track customer data, automate workflows and improve engagement.",
    tags: [
      "ASP.NET Core",
      "Web API",
      "React.js",
      "SQL Server",
      "JWT",
      "CI/CD",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Backend services in ASP.NET Core + Web API for customer data management.",
      "Relational data models for customer records, leads and sales tracking.",
      "React.js analytics dashboards with role-based access and secure JWT auth.",
      "Optimized SQL queries and supported CI/CD deployment + production monitoring.",
    ],
    featured: true,
  },
  {
    id: "booking-inventory-apis",
    title: "Booking, Inventory & Order APIs",
    description:
      "Production-grade RESTful APIs built with ASP.NET Core Web API to power booking, inventory tracking and order-processing workflows across internal products.",
    tags: ["ASP.NET Core", "Web API", "EF Core", "SQL Server", "Swagger"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Designed clean REST endpoints with Swagger/OpenAPI documentation.",
      "Optimized Entity Framework queries for high-throughput order processing.",
      "Containerized services with Docker for consistent CI/CD deploys.",
    ],
  },
];
