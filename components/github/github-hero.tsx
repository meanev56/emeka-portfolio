"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto"
    >
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-slate-700 to-black">
        <FaGithub className="text-white" size={38} />
      </div>

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        Frontend Engineering Activity
      </span>

      <h1 className="mt-8 text-5xl md:text-6xl font-bold">
        GitHub Development Dashboard
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        A snapshot of my frontend engineering work, production projects,
        repositories and technologies I work with most frequently.
      </p>
    </motion.section>
  );
}