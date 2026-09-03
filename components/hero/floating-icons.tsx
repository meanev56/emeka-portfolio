"use client";

import { motion } from "framer-motion";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiGithubFill,
  RiJavascriptFill
} from "react-icons/ri";

import { SiTypescript } from "react-icons/si";

const icons = [
  {
    icon: RiReactjsFill,
    color: "text-cyan-400",
    x: "12%",
    y: "20%"
  },
  {
    icon: RiNextjsFill,
    color: "text-white",
    x: "82%",
    y: "18%"
  },
  {
    icon: RiTailwindCssFill,
    color: "text-sky-400",
    x: "18%",
    y: "70%"
  },
  {
    icon: SiTypescript,
    color: "text-blue-500",
    x: "76%",
    y: "68%"
  },
  {
    icon: RiGithubFill,
    color: "text-slate-200",
    x: "90%",
    y: "52%"
  },
  {
    icon: RiJavascriptFill,
    color: "text-yellow-400",
    x: "8%",
    y: "50%"
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item,index)=>{
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y:[0,-18,0],
              rotate:[0,5,-5,0]
            }}
            transition={{
              repeat:Infinity,
              duration:5+index
            }}
            style={{
              left:item.x,
              top:item.y
            }}
            className="absolute hidden lg:flex glass p-4 rounded-2xl"
          >
            <Icon className={`${item.color} text-4xl`} />
          </motion.div>
        )
      })}
    </>
  );
}