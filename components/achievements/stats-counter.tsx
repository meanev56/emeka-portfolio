"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Achievement } from "@/data/achievements";

interface Props {
  achievement: Achievement;
  index: number;
}

export default function StatsCounter({
  achievement,
  index,
}: Props) {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass rounded-4xl border border-white/10 p-8 hover:border-cyan-500/30 transition-all"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${achievement.gradient}`}
      >
        <Icon className="text-white" size={28} />
      </div>

      <h3 className="mt-8 text-5xl font-bold text-cyan-400">
        <CountUp end={achievement.value} duration={2.5} />
        {achievement.suffix}
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-white">
        {achievement.title}
      </h4>

      <p className="mt-4 leading-7 text-slate-400">
        {achievement.description}
      </p>
    </motion.div>
  );
}