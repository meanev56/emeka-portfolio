"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Milestone } from "@/data/achievements";

interface Props {
  milestone: Milestone;
  index: number;
}

export default function AchievementCard({
  milestone,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass relative rounded-[28px] border border-white/10 p-8"
    >
      <div className="absolute left-8 top-8 h-full w-px bg-linear-to-b from-cyan-500/50 to-transparent" />

      <div className="relative flex gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600">
          <Award className="text-white" size={22} />
        </div>

        <div>
          <span className="rounded-full bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
            {milestone.year}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {milestone.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}