import type { NavLink } from "@/types";

export const SITE = {
  name: "Prajoth Kamble",
  role: ".NET Full Stack Developer",
  yearsOfExperience: "3.5+",
  tagline:
    "I build scalable, secure enterprise web apps with C#, ASP.NET Core and React.",
  email: "prajothkamble16@gmail.com",
  phone: "+91 87668 01375",
  phoneHref: "tel:+918766801375",
  location: "Pune, Maharashtra, India",
  availability: "Open to full-stack .NET roles",
  socials: {
    github: "https://github.com/prajothh",
    linkedin: "https://www.linkedin.com/in/prajothkamble",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
