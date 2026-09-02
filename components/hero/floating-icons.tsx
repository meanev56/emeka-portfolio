"use client";

import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiNextjsFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const icons = [
  { icon: RiReactjsLine, top: "15%", left: "5%" },
  { icon: RiTailwindCssFill, top: "70%", left: "10%" },
  { icon: RiNextjsFill, top: "20%", right: "8%" },
  { icon: SiTypescript, top: "65%", right: "6%" },
  { icon: RiGithubFill, bottom: "10%", left: "45%" },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute text-cyan-400 text-4xl md:text-5xl"
            style={item}
          >
            <Icon />
          </motion.div>
        );
      })}
    </>
  );
}