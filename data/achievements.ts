import {
  Rocket,
  Globe,
  LayoutDashboard,
  Smartphone,
  Award,
  Code2,
} from "lucide-react";

export interface Achievement {
  title: string;
  value: number;
  suffix?: string;
  description: string;
  icon: typeof Rocket;
  gradient: string;
}

export interface Milestone {
  title: string;
  description: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Production Projects",
    value: 8,
    suffix: "+",
    description:
      "Frontend applications deployed for business media, fintech, travel and telecom.",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Reusable Components",
    value: 50,
    suffix: "+",
    description:
      "Scalable React and Next.js UI components used across multiple applications.",
    icon: LayoutDashboard,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Responsive Screens",
    value: 120,
    suffix: "+",
    description:
      "Pages optimized for desktop, tablet and mobile devices.",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Frontend Technologies",
    value: 15,
    suffix: "+",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, APIs and more.",
    icon: Code2,
    gradient: "from-orange-500 to-red-500",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "Joined Nairametrics Ecosystem",
    description:
      "Started building production-ready frontend applications for business media and financial products.",
  },
  {
    year: "2026",
    title: "Built Multiple Live Platforms",
    description:
      "Worked on Billionaires.Africa, Nairalytics, Follow The Money, JustinTime Travels, NMobile and Nairametrics Prime.",
  },
  {
    year: "2026",
    title: "Investorate Admin Dashboard",
    description:
      "Developed reusable authentication pages and responsive dashboard layouts.",
  },
];

export const techMetrics = [
  { label: "Next.js", percentage: 95 },
  { label: "React", percentage: 93 },
  { label: "TypeScript", percentage: 90 },
  { label: "Tailwind CSS", percentage: 96 },
  { label: "REST API Integration", percentage: 88 },
  { label: "Git & GitHub", percentage: 90 },
];