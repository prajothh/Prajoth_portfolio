import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import type { SocialLink } from "@/types";
import { SITE } from "@/utils/constants";

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: SITE.socials.github, icon: FiGithub },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: FiLinkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FiMail },
  { label: "Phone", href: SITE.phoneHref, icon: FiPhone },
];
