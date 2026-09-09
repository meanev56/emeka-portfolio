import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emeka-portfolio-beta.vercel.app/";

  return [
    "",
    "/projects",
    "/resume",
    "/contact",
    "/github",
    "/projects/billionaires-africa",
    "/projects/follow-the-money",
    "/projects/nairalytics",
    "/projects/justintime-travels",
    "/projects/nairametrics-prime",
    "/projects/nmobile",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}