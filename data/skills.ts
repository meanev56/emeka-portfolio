import {
  RiNextjsFill,
  RiReactjsFill,
  RiJavascriptFill,
  RiGithubFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiFigmaFill,
  RiTerminalBoxFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPostman,
  SiVercel,
  SiSupabase,
  SiDocker,
} from "react-icons/si";

export interface Skill {
  name: string;
  level: string;
  icon: any;
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Modern frontend technologies I use to build responsive web applications.",
    skills: [
      {
        name: "Next.js",
        level: "Advanced",
        icon: RiNextjsFill,
        color: "text-white",
      },
      {
        name: "React",
        level: "Advanced",
        icon: RiReactjsFill,
        color: "text-cyan-400",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        icon: RiJavascriptFill,
        color: "text-yellow-400",
      },
      {
        name: "HTML5",
        level: "Advanced",
        icon: RiHtml5Fill,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        level: "Advanced",
        icon: RiCss3Fill,
        color: "text-blue-400",
      },
    ],
  },

  {
    title: "Styling & UI",
    description:
      "Creating clean, accessible and beautiful user interfaces.",
    skills: [
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        icon: SiFramer,
        color: "text-pink-400",
      },
      {
        name: "Figma",
        level: "Intermediate",
        icon: RiFigmaFill,
        color: "text-purple-400",
      },
    ],
  },

  {
    title: "Developer Tools",
    description:
      "Tools I use daily during development and deployment.",
    skills: [
      {
        name: "GitHub",
        level: "Advanced",
        icon: RiGithubFill,
        color: "text-slate-200",
      },
      {
        name: "Postman",
        level: "Advanced",
        icon: SiPostman,
        color: "text-orange-400",
      },
      {
        name: "Vercel",
        level: "Intermediate",
        icon: SiVercel,
        color: "text-white",
      },
      {
        name: "Terminal / pnpm",
        level: "Intermediate",
        icon: RiTerminalBoxFill,
        color: "text-green-400",
      },
    ],
  },

  {
    title: "Currently Learning",
    description:
      "Technologies I'm actively expanding my experience with.",
    skills: [
      {
        name: "Docker",
        level: "Learning",
        icon: SiDocker,
        color: "text-blue-400",
      },
      {
        name: "Supabase",
        level: "Learning",
        icon: SiSupabase,
        color: "text-green-400",
      },
    ],
  },
];