export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  contributions: string[];
}

export const projects: Project[] = [
  {
    slug: "billionaires-africa",
    title: "Billionaires.Africa",
    category: "Business Media",
    year: "2026",
    featured: true,
    liveUrl: "https://www.billionaires.africa",
    heroImage: "/projects/billionaires-africa/hero.png",
    gallery: [
      "/projects/billionaires-africa/home.png",
      "/projects/billionaires-africa/article.png",
      "/projects/billionaires-africa/mobile.png",
    ],
    overview:
      "Premium business publication covering Africa's billionaires, investments, wealth creation and UHNWIs.",
    challenge:
      "Build a premium editorial experience that remains fast and responsive while displaying a large amount of dynamic content.",
    solution:
      "Created reusable article cards, category layouts, responsive navigation and optimized typography using Next.js and Tailwind CSS.",
    result:
      "Delivered a scalable editorial platform optimized for desktop, tablet and mobile devices.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Responsive Design",
    ],
    contributions: [
      "Responsive homepage layout.",
      "Reusable article card components.",
      "Editorial category pages.",
      "Mobile-first navigation.",
      "UI optimization across devices.",
    ],
  },

  {
    slug: "follow-the-money",
    title: "Follow The Money",
    category: "Investigative Journalism",
    year: "2026",
    featured: true,
    liveUrl: "https://ftm.ng",
    heroImage: "/projects/follow-the-money/hero.png",
    gallery: [
      "/projects/follow-the-money/home.png",
      "/projects/follow-the-money/story.png",
      "/projects/follow-the-money/mobile.png",
    ],
    overview:
      "Investigative journalism platform focused on governance, accountability and public finance.",
    challenge:
      "Present investigative stories in a clean, readable and responsive interface.",
    solution:
      "Designed modular layouts with reusable story cards, typography system and responsive article pages.",
    result:
      "Improved readability and consistency across long-form editorial pages.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "CMS Integration",
    ],
    contributions: [
      "Story listing layouts.",
      "Article detail pages.",
      "Category filtering UI.",
      "Responsive editorial typography.",
    ],
  },

  {
    slug: "nairalytics",
    title: "Nairalytics",
    category: "Financial Analytics",
    year: "2026",
    featured: true,
    liveUrl: "https://nairalytics.com",
    heroImage: "/projects/nairalytics/hero.png",
    gallery: [
      "/projects/nairalytics/dashboard.png",
      "/projects/nairalytics/charts.png",
      "/projects/nairalytics/mobile.png",
    ],
    overview:
      "Financial intelligence platform delivering economic insights and analytics dashboards.",
    challenge:
      "Display dense financial information while maintaining clarity and usability.",
    solution:
      "Built reusable dashboard cards, widgets, tables and responsive layouts.",
    result:
      "Created a scalable analytics interface suitable for financial reporting.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Dashboard UI",
    ],
    contributions: [
      "Analytics dashboard layout.",
      "Financial widgets.",
      "Responsive tables.",
      "Navigation system.",
    ],
  },

  {
    slug: "justintime-travels",
    title: "JustinTime Travels",
    category: "Travel",
    year: "2026",
    featured: true,
    liveUrl: "https://jittravels.ng",
    heroImage: "/projects/justintime/hero.png",
    gallery: [
      "/projects/justintime/home.png",
      "/projects/justintime/destinations.png",
      "/projects/justintime/mobile.png",
    ],
    overview:
      "Luxury travel platform showcasing global travel experiences and booking journeys.",
    challenge:
      "Create visually engaging destination pages while maintaining performance.",
    solution:
      "Designed immersive landing pages with destination cards and booking CTAs.",
    result:
      "Delivered a premium travel browsing experience across all devices.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    contributions: [
      "Hero landing page.",
      "Destination showcase.",
      "Booking CTA components.",
      "Testimonials section.",
    ],
  },

  {
    slug: "nairametrics-prime",
    title: "Nairametrics Prime",
    category: "Subscription Platform",
    year: "2026",
    featured: false,
    liveUrl: "https://prime.nairametrics.com/login",
    heroImage: "/projects/prime/hero.png",
    gallery: [
      "/projects/prime/login.png",
      "/projects/prime/dashboard.png",
      "/projects/prime/mobile.png",
    ],
    overview:
      "Premium subscription platform providing exclusive financial research and analysis.",
    challenge:
      "Design authentication and subscription interfaces that feel premium.",
    solution:
      "Built login, registration, dashboard and account management interfaces.",
    result:
      "Delivered a polished subscription user experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Authentication UI",
    ],
    contributions: [
      "Authentication screens.",
      "Premium dashboard UI.",
      "Subscription pages.",
      "Account management pages.",
    ],
  },

  {
    slug: "nmobile",
    title: "NMobile",
    category: "Telecommunications",
    year: "2026",
    featured: false,
    liveUrl: "https://nmobile.ng",
    heroImage: "/projects/nmobile/hero.png",
    gallery: [
      "/projects/nmobile/home.png",
      "/projects/nmobile/plans.png",
      "/projects/nmobile/mobile.png",
    ],
    overview:
      "Telecommunications website for marketing mobile services and pricing plans.",
    challenge:
      "Create engaging telecom landing pages that communicate plans clearly.",
    solution:
      "Developed responsive pricing cards, service components and hero sections.",
    result:
      "Delivered a clean telecom marketing experience across screen sizes.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    contributions: [
      "Pricing cards.",
      "Service feature sections.",
      "Hero banners.",
      "Responsive product pages.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const categories = [
  "All",
  "Business Media",
  "Investigative Journalism",
  "Financial Analytics",
  "Travel",
  "Subscription Platform",
  "Telecommunications",
];