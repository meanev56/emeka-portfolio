export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    company: "Nairametrics Ecosystem",
    role: "Frontend Engineer",
    period: "2025 — Present",
    location: "Remote · Lagos, Nigeria",
    summary:
      "Building production-ready business media, financial analytics and subscription platforms with Next.js and TypeScript.",
    achievements: [
      "Built responsive editorial websites using Next.js.",
      "Developed reusable UI component libraries.",
      "Integrated REST APIs into frontend applications.",
      "Implemented responsive dashboards and CMS layouts.",
      "Optimized mobile, tablet and desktop experiences.",
    ],
  },

  {
    company: "JustinTime Travels",
    role: "Frontend Developer",
    period: "2026",
    location: "Nigeria",
    summary:
      "Designed luxury travel landing pages and destination browsing experiences.",
    achievements: [
      "Built responsive landing pages.",
      "Created booking CTA components.",
      "Designed destination showcase layouts.",
    ],
  },

  {
    company: "NMobile",
    role: "Frontend Developer",
    period: "2026",
    location: "Nigeria",
    summary:
      "Developed responsive telecommunications marketing pages and reusable pricing components.",
    achievements: [
      "Created pricing cards.",
      "Implemented responsive service pages.",
      "Built reusable UI components.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Your University or Institution",
    degree: "Bachelor's Degree (Update with your degree)",
    period: "20XX — 20XX",
  },
];

export const certifications = [
  "Responsive Web Design",
  "JavaScript & TypeScript Development",
  "React & Next.js Frontend Development",
  "Git & GitHub Collaboration",
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Framer Motion",
  "REST API Integration",
  "Git & GitHub",
  "Postman",
  "Figma",
  "Responsive Web Design",
];