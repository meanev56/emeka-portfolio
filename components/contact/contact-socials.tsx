"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: process.env.NEXT_PUBLIC_GITHUB,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    name: "Twitter / X",
    icon: FaTwitter,
    url: process.env.NEXT_PUBLIC_TWITTER,
  },
  {
    name: "Portfolio",
    icon: Globe,
    url: "/",
  },
];

export default function ContactSocials() {
  return (
    <div className="glass rounded-3xl border border-white/10 p-6">
      <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>

      <div className="space-y-4">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              whileHover={{ x: 6 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-cyan-400 transition"
            >
              <div className="flex items-center gap-4">
                <Icon className="text-cyan-400" size={22} />
                <span>{social.name}</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}