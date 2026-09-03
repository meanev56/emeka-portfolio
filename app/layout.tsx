// The stylesheet is handled by Next.js at build time.
// @ts-expect-error Next.js resolves CSS side-effect imports without TypeScript declarations.

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: {
    default: "Njoku Emeka | Frontend Engineer",
    template: "%s | Njoku Emeka",
  },

  description:
    "Frontend Engineer specializing in Next.js, React, TypeScript and Tailwind CSS.",

  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "TypeScript",
    "Nigeria",
  ],

  authors: [{ name: "Njoku Emeka" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}