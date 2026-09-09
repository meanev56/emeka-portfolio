"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";

export default function AvailabilityBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-padding"
    >
      <div className="glass rounded-[36px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 via-blue-600/10 to-purple-500/10 p-8 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for New Opportunities
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Open for Remote Frontend Engineering Roles
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I’m currently available for freelance work, contract roles,
              full-time frontend engineering positions and UI implementation
              projects worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <BriefcaseBusiness size={16} />
                Remote • Hybrid • Freelance
              </span>

              <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <MapPin size={16} />
                Lagos, Nigeria
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-4 font-medium text-white transition hover:scale-105"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}