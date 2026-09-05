"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";

export default function SkillsSummary() {
  return (
    <section className="mt-28">
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Technical Skills
        </p>

        <h2 className="text-4xl font-bold">Technologies I Use Daily</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ scale: 1.06 }}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 text-sm font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}