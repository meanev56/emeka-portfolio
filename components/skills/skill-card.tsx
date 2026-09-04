"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Skill } from "@/data/skills";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="group relative glass rounded-3xl border border-white/10 p-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 via-purple-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-500/10 transition duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Icon className={`${skill.color} text-3xl`} />
          </div>

          <ArrowUpRight
            size={18}
            className="text-slate-500 group-hover:text-cyan-400 transition"
          />
        </div>

        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>

        <p className="mt-2 text-sm text-slate-400">{skill.level}</p>

        {/* Progress */}
        <div className="mt-6 h-2 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width:
                skill.level === "Advanced"
                  ? "100%"
                  : skill.level === "Intermediate"
                  ? "75%"
                  : "45%",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
}