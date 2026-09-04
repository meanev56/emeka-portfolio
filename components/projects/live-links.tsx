"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface LiveLinksProps {
  liveUrl: string;
  githubUrl?: string;
}

export default function LiveLinks({ liveUrl, githubUrl }: LiveLinksProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-6 py-4 text-white flex items-center gap-3 font-medium"
      >
        <Globe size={20} />
        Visit Live Website
        <ArrowUpRight size={18} />
      </motion.a>

      {githubUrl && (
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-slate-300 flex items-center gap-3 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          <FaGithub size={20} />
          GitHub Repository
        </motion.a>
      )}
    </div>
  );
}