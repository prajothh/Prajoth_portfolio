import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "digital-banking-microservices",
    title: "Digital Banking & Loan Management System",
    description:
      "A scalable Digital Banking platform built on a Microservices architecture to manage customer onboarding, loan processing, account management, transaction monitoring and risk assessment — supporting high-volume, real-time operations with strict regulatory compliance.",
    tags: [
      "C#",
      ".NET 6/7",
      "ASP.NET Core Web API",
      "Microservices",
      
      "React.js",
      "SQL Server",
      "EF Core",
      "Docker",
      "Kubernetes",
      "Azure",
      "JWT",
      "OAuth2",
      "Redis",
      "RabbitMQ",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Designed Microservices for loan, customer, transaction and authentication services with secure REST APIs.",
      "Implemented JWT + OAuth2 with role- and claims-based access control across services.",
      "Optimized SQL Server schemas and queries — improved DB performance by ~40%.",
      "Integrated Redis caching and RabbitMQ event-driven flows for asynchronous processing.",
      "Containerized with Docker, deployed on Kubernetes, with CI/CD via Azure DevOps / GitHub Actions.",
      "Built audit logging, transaction tracking and fraud-detection modules; ensured PCI-DSS compliance.",
    ],
    featured: true,
  },
  {
    id: "pharma-supply-chain",
    title: "Pharmaceutical Supply Chain & Drug Compliance System",
    description:
      "A Pharma Supply Chain Management platform that tracks drug manufacturing, inventory, distribution, compliance and regulatory reporting — with end-to-end traceability and adherence to FDA, HIPAA and GDPR healthcare standards.",
    tags: [
      "C#",
      ".NET Core",
      "ASP.NET Core Web API",
      "React.js",
      "Microservices",
      "API Gateway",
      "SQL Server",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Azure",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Built Microservices for inventory, manufacturing, compliance and distribution modules.",
      "Designed SQL Server + MongoDB stores for structured and unstructured pharma data.",
      "Implemented HL7/FHIR data exchange and an API Gateway for orchestration & security.",
      "Created interactive React dashboards for real-time inventory monitoring.",
      "Built ETL/batch pipelines for regulatory reporting; enforced HIPAA, FDA and GDPR compliance.",
      "Added centralized logging, monitoring and alerting via ELK Stack / Azure Monitor.",
    ],
    featured: true,
  },
  {
    id: "booking-inventory-apis",
    title: "Booking, Inventory & Order Processing APIs",
    description:
      "Production-grade RESTful APIs built with ASP.NET Core Web API to power booking, inventory tracking and order-processing workflows across internal enterprise products.",
    tags: ["ASP.NET Core", "Web API", "EF Core", "SQL Server", "Swagger", "Docker"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Designed clean, versioned REST endpoints documented with Swagger / OpenAPI.",
      "Optimized Entity Framework Core queries — improved query performance by ~30%.",
      "Built React.js dashboards for real-time analytics and reporting on top of these APIs.",
      "Containerized services with Docker for consistent CI/CD deployments.",
    ],
  },
];
