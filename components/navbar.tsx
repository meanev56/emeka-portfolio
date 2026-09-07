"use client";

import Link from "next/link";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Github", href: "/github"},
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 z-50 w-full px-5 py-4">

      <motion.nav
        initial={{ y: -50, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        className="glass max-w-7xl mx-auto rounded-full px-6 py-4 flex justify-between items-center"
      >

        <Link href="/">
          <h1 className="text-xl font-bold gradient-text">
            Emeka.dev
          </h1>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link)=>(
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">

          {mounted && (
            <button
              onClick={() =>
                setTheme(theme==="dark" ? "light" : "dark")
              }
              className="rounded-full p-2 hover:bg-white/10"
            >
              {theme==="dark" ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          )}

          <a
            href="/resume.pdf"
            className="rounded-full bg-blue-600 px-5 py-2 text-white text-sm"
          >
            Resume
          </a>

          <button className="md:hidden">
            <Menu/>
          </button>

        </div>

      </motion.nav>

    </header>
  );
}