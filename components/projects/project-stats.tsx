"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  MonitorSmartphone,
  LayoutDashboard,
  Zap,
  Code2,
} from "lucide-react";

const stats = [
  {
    icon: MonitorSmartphone,
    value: 100,
    suffix: "%",
    label: "Responsive Layout",
    description: "Optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: LayoutDashboard,
    value: 20,
    suffix: "+",
    label: "Reusable Components",
    description: "Scalable UI architecture with reusable design patterns.",
  },
  {
    icon: Zap,
    value: 90,
    suffix: "+",
    label: "Performance Score",
    description: "Fast loading pages and optimized frontend experience.",
  },
  {
    icon: Code2,
    value: 6,
    suffix: "+",
    label: "Modern Technologies",
    description: "Next.js, React, TypeScript, Tailwind CSS and APIs.",
  },
];

export default function ProjectStats() {
  return (
    <section className="mt-28">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Project Metrics
        </p>

        <h2 className="text-4xl font-bold">Frontend Engineering Highlights</h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[28px] p-6 border border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5">
                <Icon className="text-white" size={26} />
              </div>

              <h3 className="text-4xl font-bold text-cyan-400">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-lg font-semibold text-white">{stat.label}</p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}