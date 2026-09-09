"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -left-30 top-10 h-105 w-105 rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 70, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
        className="absolute -right-30 top-1/3 h-105 w-105 rounded-full bg-purple-500/15 blur-[160px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute -bottom-30 left-1/3 h-80 w-[320px] rounded-full bg-blue-500/15 blur-[120px]"
      />

      {/* Small Floating Dots */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/40"
          style={{
            left: `${(index % 6) * 18 + 5}%`,
            top: `${Math.floor(index / 6) * 30 + 10}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index * 0.25,
            delay: index * 0.15,
          }}
        />
      ))}
    </div>
  );
}