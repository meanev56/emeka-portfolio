"use client";

import { motion } from "framer-motion";
import DownloadResume from "./download-resume";

export default function ResumeHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto"
    >
      <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-cyan-300 text-sm">
        Frontend Engineer • React • Next.js • TypeScript
      </span>

      <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
        Njoku Emeka
      </h1>

      <p className="mt-8 text-lg text-slate-400 leading-8">
        Frontend Engineer specializing in building responsive, scalable web
        applications using Next.js, React, TypeScript, Tailwind CSS and modern
        frontend tooling.
      </p>

      <div className="mt-10 flex justify-center">
        <DownloadResume />
      </div>
    </motion.section>
  );
}