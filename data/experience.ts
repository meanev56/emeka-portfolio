import {
  Building2,
  Globe,
  Newspaper,
  Plane,
  Smartphone,
  BarChart3,
} from "lucide-react";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  icon: any;
  color: string;
  description: string;
  technologies: string[];
  achievements: string[];
  products?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Nairametrics Ecosystem",
    role: "Frontend Engineer",
    period: "2025 — Present",
    location: "Remote • Lagos, Nigeria",
    icon: Building2,
    color: "from-blue-600 to-cyan-500",
    description:
      "Building responsive business media, analytics and subscription platforms within the Nairametrics ecosystem.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Framer Motion",
    ],
    achievements: [
      "Built responsive editorial homepage layouts.",
      "Developed reusable article card components.",
      "Implemented category pages and navigation systems.",
      "Created premium authentication interfaces.",
      "Optimized desktop, tablet and mobile experiences.",
    ],
    products: [
      "Billionaires.Africa",
      "Follow The Money",
      "Nairalytics",
      "Nairametrics Prime",
    ],
  },

  {
    company: "JustinTime Travels",
    role: "Frontend Developer",
    period: "Production Project",
    location: "Nigeria",
    icon: Plane,
    color: "from-emerald-500 to-teal-500",
    description:
      "Designed and developed premium travel landing pages and destination experiences for an international travel platform.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "React",
    ],
    achievements: [
      "Developed luxury landing page layouts.",
      "Built destination showcase components.",
      "Created booking call-to-action sections.",
      "Designed responsive mobile travel experiences.",
    ],
  },

  {
    company: "NMobile",
    role: "Frontend Developer",
    period: "Production Project",
    location: "Nigeria",
    icon: Smartphone,
    color: "from-purple-600 to-pink-500",
    description:
      "Developed responsive telecommunications marketing pages and reusable product components.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    achievements: [
      "Created pricing components.",
      "Built responsive product feature sections.",
      "Developed marketing hero banners.",
      "Implemented reusable UI cards.",
    ],
  },
];

export const industries = [
  {
    title: "Business Media",
    icon: Newspaper,
    description: "Editorial websites and CMS-driven publishing platforms.",
  },
  {
    title: "Financial Technology",
    icon: BarChart3,
    description: "Dashboards, subscriptions and financial analytics interfaces.",
  },
  {
    title: "Travel Platforms",
    icon: Plane,
    description: "Luxury travel experiences and booking interfaces.",
  },
  {
    title: "Telecommunications",
    icon: Globe,
    description: "Marketing websites and service pricing experiences.",
  },
];