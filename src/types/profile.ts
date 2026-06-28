export type NavItem = {
  label: string;
  id: string;
};

export type LinkAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type PersonInfo = {
  name: string;
  role: string;
  email: string;
  secondaryEmail?: string;
  phone: string;
  github: string;
  resumeUrl: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type IconKey =
  | "coordination"
  | "product"
  | "technical"
  | "tools"
  | "docs"
  | "visualization"
  | "vibe";

export type BentoSpan = "large" | "wide" | "tall" | "compact";

export type SkillItem = {
  icon: IconKey;
  bentoSpan: BentoSpan;
  title: string;
  description: string;
  tags: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  visualLabel: string;
  visualCaption: string;
  description: string;
  bullets: string[];
  tech: string[];
  metrics: StatItem[];
  actions: LinkAction[];
};

export type ProcessItem = {
  step: string;
  anchorId: string;
  title: string;
  description: string;
};

export type ProfileData = {
  person: PersonInfo;
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    actions: LinkAction[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: StatItem[];
  };
  skills: SkillItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  process: ProcessItem[];
  contact: {
    title: string;
    subtitle: string;
    actions: LinkAction[];
  };
};
