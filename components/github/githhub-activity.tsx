"use client";

import { motion } from "framer-motion";
import { activity } from "@/data/github";
import { GitCommitHorizontal } from "lucide-react";

export default function GithubActivity() {
  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Recent Development Activity
        </p>

        <h2 className="text-4xl font-bold">Recent Frontend Work</h2>
      </div>

      <div className="space-y-6">
        {activity.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-3xl border border-white/10 p-6 flex items-start gap-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-green-400">
              <GitCommitHorizontal className="text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}