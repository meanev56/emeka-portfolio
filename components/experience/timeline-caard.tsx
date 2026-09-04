"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import { ExperienceItem } from "@/data/experience";

interface TimelineCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function TimelineCard({
  experience,
  index,
}: TimelineCardProps) {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-10.5 top-10 h-5 w-5 rounded-full border-4 border-background bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,.8)]" />

      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        className="glass rounded-[28px] p-8 border border-white/10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div
              className={`w-16 h-16 rounded-2xl bg-linear-to-br ${experience.color} flex items-center justify-center`}
            >
              <Icon className="text-white" size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                {experience.role}
              </h3>

              <p className="text-cyan-400 font-medium mt-1">
                {experience.company}
              </p>
            </div>
          </div>

          <ArrowUpRight className="text-slate-500 hidden md:block" />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {experience.period}
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </span>
        </div>

        {/* Description */}
        <p className="mt-8 text-slate-300 leading-8">
          {experience.description}
        </p>

        {/* Products */}
        {experience.products && (
          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-3">
              Products Worked On
            </p>

            <div className="flex flex-wrap gap-3">
              {experience.products.map((product) => (
                <span
                  key={product}
                  className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-sm text-cyan-300"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-3">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Highlights
          </p>

          <ul className="space-y-3">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-3 text-slate-300 leading-7"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}