"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <motion.div whileHover={{ scale:1.05 }}>
        <Link
          href="/projects"
          className="rounded-full bg--to-r from-blue-600 via-purple-600 to-cyan-500 px-7 py-4 text-white flex items-center gap-3 font-medium glow"
        >
          View Projects
          <ArrowRight size={18}/>
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale:1.05 }}>
        <Link
          href="/resume"
          className="glass rounded-full px-7 py-4 flex items-center gap-3"
        >
          Download Resume
          <Download size={18}/>
        </Link>
      </motion.div>

    </div>
  );
}