"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] top-[-15%] h-125 w-125
        rounded-full bg-blue-600/30 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-[-15%] right-[-10%] h-125 w-125
        rounded-full bg-purple-600/30 blur-[160px]"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/3 h-75 w-75
        rounded-full bg-cyan-500/20 blur-[120px]"
      />

    </div>
  );
}