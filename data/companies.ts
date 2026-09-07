export interface Company {
  name: string;
  slug: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  color: string;
}

export const companies: Company[] = [
  {
    name: "Billionaires.Africa",
    slug: "billionaires-africa",
    logo: "/companies/billionaires-africa.svg",
    category: "Business Media",
    description:
      "African billionaires and ultra-high-net-worth business media platform.",
    website: "https://www.billionaires.africa",
    color: "from-blue-500 to-cyan-500",
  },

  {
    name: "Nairametrics",
    slug: "nairametrics",
    logo: "/companies/nairametrics.svg",
    category: "Financial Media",
    description:
      "Nigeria's leading business, finance and investment media platform.",
    website: "https://nairametrics.com",
    color: "from-emerald-500 to-green-600",
  },

  {
    name: "Follow The Money",
    slug: "follow-the-money",
    logo: "/companies/justintime.svg",
    category: "Investigative Journalism",
    description:
      "Data-driven investigative journalism and transparency platform.",
    website: "https://ftm.ng",
    color: "from-purple-500 to-pink-500",
  },

  {
    name: "Nairalytics",
    slug: "nairalytics",
    logo: "/companies/nairametrics.svg",
    category: "Analytics Platform",
    description:
      "Financial analytics dashboard and market intelligence platform.",
    website: "https://nairalytics.com",
    color: "from-indigo-500 to-violet-600",
  },

  {
    name: "JustinTime Travels",
    slug: "justintime-travels",
    logo: "/companies/justintime.svg",
    category: "Travel Technology",
    description:
      "Luxury travel booking platform and premium global journeys website.",
    website: "https://jittravels.ng",
    color: "from-orange-500 to-amber-500",
  },

  {
    name: "Nairametrics Prime",
    slug: "nairametrics-prime",
    logo: "/companies/nairametrics.svg",
    category: "Subscription Platform",
    description:
      "Premium investment newsletter and subscriber dashboard.",
    website: "https://prime.nairametrics.com",
    color: "from-cyan-500 to-blue-600",
  },

  {
    name: "NMobile",
    slug: "nmobile",
    logo: "/companies/nmobile.svg",
    category: "Telecommunications",
    description:
      "Modern telecommunications marketing website with pricing plans.",
    website: "https://nmobile.ng",
    color: "from-rose-500 to-pink-600",
  },

  {
    name: "Investorate Admin",
    slug: "investorate-admin",
    logo: "/companies/investorate.svg",
    category: "Admin Dashboard",
    description:
      "Enterprise dashboard for investment and financial operations.",
    website: "#",
    color: "from-slate-600 to-slate-900",
  },
];