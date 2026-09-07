import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimationProvider from "@/components/providers/animation-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.vercel.app"),

  title: {
    default: "Njoku Emeka | Frontend Engineer",
    template: "%s | Njoku Emeka",
  },

  description:
    "Frontend Engineer building production-ready web applications with Next.js, React, TypeScript and Tailwind CSS.",

  keywords: [
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Nigeria",
  ],

  openGraph: {
    title: "Njoku Emeka | Frontend Engineer",
    description:
      "Portfolio showcasing frontend engineering work across media, fintech, travel and telecom.",
    images: ["/og-image.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#020617] text-white antialiased">
        <AnimationProvider>
          <Navbar />

          {children}

          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}