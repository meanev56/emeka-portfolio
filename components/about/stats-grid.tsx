"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Building2,
  Globe2,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

const stats = [
  {
    number: 6,
    suffix: "+",
    label: "Production Websites",
    description: "Live products deployed for real users.",
    icon: Globe2,
    color: "from-blue-600 to-cyan-500",
  },
  {
    number: 4,
    suffix: "+",
    label: "Industries Served",
    description: "FinTech, Media, Travel & Telecom.",
    icon: Building2,
    color: "from-purple-600 to-pink-500",
  },
  {
    number: 100,
    suffix: "%",
    label: "Responsive UI",
    description: "Desktop, tablet and mobile optimized.",
    icon: Smartphone,
    color: "from-cyan-600 to-emerald-500",
  },
  {
    number: 20,
    suffix: "+",
    label: "Reusable Components",
    description: "Scalable UI systems built with TypeScript.",
    icon: LayoutDashboard,
    color: "from-indigo-600 to-blue-500",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group glass rounded-3xl p-7 border border-white/10 relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition duration-500`}
            />

            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6`}
            >
              <Icon className="text-white" size={28} />
            </div>

            <h3 className="text-4xl font-bold text-white">
              <CountUp end={item.number} duration={2.5} />
              {item.suffix}
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-200">{item.label}</p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}