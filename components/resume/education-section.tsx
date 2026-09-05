"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/resume";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="mt-28 grid lg:grid-cols-2 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[28px] border border-white/10 p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-cyan-400" />
          <h3 className="text-2xl font-bold">Education</h3>
        </div>

        {education.map((item) => (
          <div key={item.school} className="space-y-2">
            <h4 className="text-xl font-semibold">{item.school}</h4>

            <p className="text-slate-300">{item.degree}</p>

            <p className="text-sm text-slate-400">{item.period}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[28px] border border-white/10 p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-purple-400" />
          <h3 className="text-2xl font-bold">Certifications</h3>
        </div>

        <div className="space-y-4">
          {certifications.map((certificate) => (
            <div
              key={certificate}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              {certificate}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}