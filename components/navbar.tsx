"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Container from "./container";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

import { NAV_LINKS } from "@/lib/constants";
import { useScroll } from "@/hooks/use-scroll";

export default function Navbar() {
  const scrolled = useScroll();

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#020617]/80 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/contact"
              className="rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-3 text-sm font-medium text-white"
            >
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 p-2 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-cyan-400"
                  >
                    {link.title}
                  </a>
                ))}

                <ThemeToggle />

                <Link
                  href="/contact"
                  className="mt-2 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3 text-center font-medium text-white"
                >
                  Hire Me
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}