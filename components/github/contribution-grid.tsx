"use client";

import { motion } from "framer-motion";

const days = Array.from({ length: 182 }, (_, index) => ({
  level: Math.floor(Math.random() * 5),
  id: index,
}));

const colors = [
  "bg-slate-800",
  "bg-emerald-900",
  "bg-emerald-700",
  "bg-emerald-500",
  "bg-green-400",
];

export default function ContributionGrid() {
  return (
    <section className="mt-28">
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Contribution Activity
        </p>

        <h2 className="text-4xl font-bold">2026 Contribution Heatmap</h2>
      </div>

      <div className="glass rounded-4xl border border-white/10 p-6 overflow-auto">
        <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
          {days.map((day) => (
            <motion.div
              key={day.id}
              whileHover={{ scale: 1.4 }}
              className={`h-3 w-3 rounded-sm ${colors[day.level]}`}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
          Less
          {colors.map((color) => (
            <span key={color} className={`h-3 w-3 rounded-sm ${color}`} />
          ))}
          More
        </div>
      </div>
    </section>
  );
}