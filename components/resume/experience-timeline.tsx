"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";
import { BriefcaseBusiness, MapPin, CalendarDays } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section className="mt-24">
      <div className="mb-12">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Professional Experience
        </p>

        <h2 className="text-4xl font-bold">Career Timeline</h2>
      </div>

      <div className="relative border-l border-cyan-500/30 pl-8 space-y-14">
        {experiences.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-9.5 top-2 h-5 w-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/40" />

            <div className="glass rounded-[28px] border border-white/10 p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <BriefcaseBusiness className="text-white" size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>

                  <p className="text-cyan-400">{job.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {job.period}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </span>
              </div>

              <p className="text-slate-300 leading-8 mb-6">{job.summary}</p>

              <ul className="space-y-3">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}