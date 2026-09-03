"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"/>

      <motion.div
        animate={{
          x:[0,100,-100,0],
          y:[0,-40,40,0],
          scale:[1,1.2,1]
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          ease:"linear"
        }}
        className="absolute top-0 left-0 h-150 w-150 rounded-full bg-blue-600/30 blur-[120px]"
      />

      <motion.div
        animate={{
          x:[0,-120,60,0],
          y:[0,60,-60,0],
          scale:[1.2,1,1.2]
        }}
        transition={{
          duration:24,
          repeat:Infinity,
          ease:"linear"
        }}
        className="absolute bottom-0 right-0 h-150 w-150 rounded-full bg-purple-700/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x:[0,80,-40,0],
          scale:[1,1.4,1]
        }}
        transition={{
          duration:18,
          repeat:Infinity
        }}
        className="absolute left-1/2 top-1/3 h-112.5 w-112.5 rounded-full bg-cyan-500/20 blur-[120px]"
      />

    </div>
  );
}