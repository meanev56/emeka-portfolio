import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://emekadev.vercel.app"),

  title: {
    default: "Njoku Emeka — Frontend Engineer",
    template: "%s | Njoku Emeka",
  },

  description:
    "Frontend Engineer specializing in Next.js, React, TypeScript, Tailwind CSS and production-ready web applications.",

  keywords: [
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "TypeScript",
    "Nigeria Frontend Developer",
  ],

  openGraph: {
    title: "Njoku Emeka Portfolio",
    description:
      "Frontend Engineer building modern web experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${space.variable} ${inter.variable}`}>
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