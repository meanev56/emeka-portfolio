"use client";

import { motion } from "framer-motion";

import StatsCounter from "./stats-counter";
import AchievementCard from "./achievement-card";

import {
  achievements,
  milestones,
  techMetrics,
} from "@/data/achievements";
import Link from "next/link";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute left-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Achievements
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Frontend Engineering Impact
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Building responsive interfaces, reusable component systems and
            production-ready applications across multiple industries.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <StatsCounter
              key={item.title}
              achievement={item}
              index={index}
            />
          ))}
        </div>

        {/* Milestones */}
        <div className="mt-28 grid gap-8 lg:grid-cols-3">
          {milestones.map((milestone, index) => (
            <AchievementCard
              key={milestone.title}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>

        {/* Technology Metrics */}
        <div className="glass mt-28 rounded-[36px] border border-white/10 p-10 md:p-14">
          <div className="mb-10 text-center">
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              Engineering Skills
            </span>

            <h3 className="mt-6 text-4xl font-bold">
              Technology Confidence
            </h3>
          </div>

          <div className="space-y-8">
            {techMetrics.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white">{tech.label}</span>

                  <span className="text-cyan-400">
                    {tech.percentage}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${tech.percentage}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1,
                    }}
                    className="h-full rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] border border-white/10 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10 text-center"
        >
          <h3 className="text-4xl font-bold text-white">
            From Concept to Production.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;ve contributed to live business media platforms, financial dashboards,
            travel technology products and enterprise admin systems with a focus on
            performance, accessibility and responsive UI architecture.
          </p>

          <Link
            href="/projects"
            className="mt-10 inline-flex rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition hover:scale-105"
          >
            View My Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}