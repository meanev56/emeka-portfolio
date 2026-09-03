"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/meanev56",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/njoku-emeka-7b0a8613a/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:emekanjoku86@gmail.com",
    label: "Email",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-10 flex gap-4">

      {socials.map((social,index)=>{
        const Icon = social.icon;

        return (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{
              scale:1.1,
              y:-5
            }}
            className="glass rounded-full p-4 hover:border-blue-500 transition"
            aria-label={social.label}
          >
            <Icon size={22}/>
          </motion.a>
        )
      })}

    </div>
  );
}
