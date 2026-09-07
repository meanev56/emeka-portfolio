"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/30">
          <span className="text-lg font-black text-white">N</span>
        </div>

        <div className="hidden sm:block">
          <h2 className="text-sm font-bold leading-none text-white">
            Njoku Emeka
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Frontend Engineer
          </p>
        </div>
      </motion.div>
    </Link>
  );
}