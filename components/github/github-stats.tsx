"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { githubStats } from "@/data/github";

export default function GithubStats() {
  return (
    <section className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-6">
      {githubStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass rounded-[28px] border border-white/10 p-8 text-center"
        >
          <h3 className="text-4xl font-bold text-cyan-400">
            <CountUp end={stat.value} duration={2} />+
          </h3>

          <p className="mt-3 text-slate-300">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}