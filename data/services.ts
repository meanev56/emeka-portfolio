import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: typeof Code2;
  gradient: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building modern, scalable web applications using React, Next.js, TypeScript and Tailwind CSS with reusable component architecture.",
    icon: Code2,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating interfaces that look and perform beautifully across desktop, tablet and mobile devices with accessibility and performance in mind.",
    icon: Smartphone,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    technologies: ["Mobile First", "CSS Grid", "Flexbox", "Responsive UI"],
  },
  {
    title: "UI Engineering",
    description:
      "Transforming Figma and design systems into pixel-perfect interfaces with reusable design components and smooth interactions.",
    icon: Palette,
    gradient: "from-amber-400 via-orange-500 to-red-500",
    technologies: ["Figma", "Design Systems", "Framer Motion", "ShadCN UI"],
  },
  {
    title: "API Integration",
    description:
      "Connecting frontend applications to REST APIs and external services using clean architecture and asynchronous data fetching.",
    icon: Database,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    technologies: ["REST APIs", "Postman", "Axios", "Fetch API"],
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, SEO, image loading, lazy loading, code splitting and Core Web Vitals.",
    icon: Rocket,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    technologies: ["SEO", "Lazy Loading", "Code Splitting", "Image Optimization"],
  },
  {
    title: "Maintenance & Scaling",
    description:
      "Improving existing applications with reusable architecture, bug fixes, refactoring, accessibility improvements and responsive enhancements.",
    icon: ShieldCheck,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    technologies: ["Git", "GitHub", "Refactoring", "Accessibility"],
  },
];