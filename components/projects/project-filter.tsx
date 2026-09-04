"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg"
                : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}