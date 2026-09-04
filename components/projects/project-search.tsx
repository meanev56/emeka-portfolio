"use client";

import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectSearch({
  value,
  onChange,
}: ProjectSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl mx-auto"
    >
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        size={20}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects, technologies or industries..."
        className="w-full rounded-full border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-red-400"
        >
          <X size={18} />
        </button>
      )}
    </motion.div>
  );
}