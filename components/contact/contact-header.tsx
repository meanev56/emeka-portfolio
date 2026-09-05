"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        Available for Remote • Freelance • Full-Time
      </span>

      <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
        Let&apos;s build something amazing together.
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        Whether you&apos;re looking for a frontend engineer, collaboration partner,
        or someone to build your next web application, I&apos;d love to hear from you.
      </p>
    </motion.div>
  );
}