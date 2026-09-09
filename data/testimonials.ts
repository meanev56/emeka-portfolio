export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  review: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Product Team",
    role: "Business Media Platform",
    company: "Billionaires.Africa",
    avatar: "/companies/billionaires-africa.svg",
    review:
      "Emeka delivered responsive, production-ready frontend interfaces with excellent attention to detail and reusable component architecture.",
  },
  {
    name: "Editorial Team",
    role: "Financial News Platform",
    company: "Nairametrics",
    avatar: "/companies/nairametrics.svg",
    review:
      "A reliable frontend engineer who implemented complex layouts while maintaining performance and consistency across devices.",
  },
  {
    name: "Product Manager",
    role: "Travel Technology",
    company: "JustinTime Travels",
    avatar: "/companies/justintime-travels.svg",
    review:
      "Responsive landing pages were delivered with modern UI, smooth interactions and an excellent mobile experience.",
  },
  {
    name: "Engineering Team",
    role: "Analytics Dashboard",
    company: "Nairalytics",
    avatar: "/companies/nairalytics.svg",
    review:
      "Built scalable dashboard interfaces and reusable widgets that made future development much faster.",
  },
  {
    name: "Admin Dashboard Team",
    role: "Investorate",
    company: "Investorate Admin",
    avatar: "/companies/investorate.svg",
    review:
      "Implemented authentication pages and responsive dashboard layouts with clean TypeScript architecture.",
  },
  {
    name: "Marketing Team",
    role: "Telecommunications",
    company: "NMobile",
    avatar: "/companies/nmobile.svg",
    review:
      "Delivered reusable pricing components and responsive marketing pages with excellent UI consistency.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What frontend technologies do you specialize in?",
    answer:
      "I specialize in Next.js, React, TypeScript, Tailwind CSS, Framer Motion, REST API integration and modern frontend architecture.",
  },
  {
    question: "Do you build fully responsive websites?",
    answer:
      "Yes. Every interface is designed mobile-first and optimized for desktop, tablet and mobile devices.",
  },
  {
    question: "Can you convert Figma designs into production-ready code?",
    answer:
      "Yes. I build pixel-perfect interfaces from Figma while maintaining reusable components, accessibility and responsive layouts.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. I can improve, refactor, optimize and add new features to existing React or Next.js applications.",
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "Yes. I'm available for freelance projects, remote frontend engineering roles and long-term collaborations.",
  },
];