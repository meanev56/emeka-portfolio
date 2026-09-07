"use client";

import { motion } from "framer-motion";
import { techActivity } from "@/data/github";

export default function TechActivity() {
  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Technology Activity
        </p>

        <h2 className="text-4xl font-bold">Most Used Technologies</h2>
      </div>

      <div className="glass rounded-4xl border border-white/10 p-8 space-y-6">
        {techActivity.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{tech.name}</span>
              <span className="text-cyan-400">{tech.commits}%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.commits}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}