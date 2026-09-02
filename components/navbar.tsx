"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-4 z-50 px-6">
      <nav className="glass mx-auto max-w-7xl rounded-full px-6 py-4 flex items-center justify-between">

        <Link href="/">
          <h1 className="font-bold text-xl gradient-text">
            Emeka.dev
          </h1>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">

          {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          )}

          <a
            href="/resume.pdf"
            className="rounded-full bg-blue-600 px-5 py-2 text-white"
          >
            Resume
          </a>

        </div>
      </nav>
    </header>
  );
}