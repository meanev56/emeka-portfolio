"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Container from "./container";
import Logo from "./logo";

import { SITE, NAV_LINKS } from "@/lib/constants";
import { getCurrentYear } from "@/lib/utils";

const socials = [
  {
    icon: FaGithub,
    href: SITE.github,
  },
  {
    icon: FaLinkedin,
    href: SITE.linkedin,
  },
  {
    icon: FaTwitter,
    href: SITE.twitter,
  },
  {
    icon: Mail,
    href: `mailto:${SITE.email}`,
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              Building modern, responsive and scalable frontend experiences with
              React, Next.js, TypeScript and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Navigation</h3>

            <div className="grid grid-cols-2 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Let&apos;s Connect</h3>

            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-2 text-cyan-400"
            >
              {SITE.email}

              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {getCurrentYear()} Njoku Emeka. All rights reserved.</p>

          <p>Designed & Developed with Next.js + TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}