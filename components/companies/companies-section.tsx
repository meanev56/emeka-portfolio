"use client";

import { motion } from "framer-motion";
import CompanyLogo from "./company-logo";
import CompanyHighlight from "./company-highlight";
import { companies } from "@/data/companies";

export default function CompaniesSection() {
  return (
    <section id="companies" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Companies & Brands
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Production Platforms I&apos;ve Worked On
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I&apos;ve contributed to frontend development across business media,
            financial analytics, travel technology, subscription products,
            telecommunications and enterprise dashboards.
          </p>
        </motion.div>

        {/* Featured Company */}
        <div className="mt-20">
          <CompanyHighlight company={companies[0]} />
        </div>

        {/* Company Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {companies.map((company, index) => (
            <CompanyLogo
              key={company.slug}
              company={company}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-10 md:grid-cols-4"
        >
          {[
            { value: "8+", label: "Production Platforms" },
            { value: "20+", label: "Reusable Components Built" },
            { value: "100%", label: "Responsive Interfaces" },
            { value: "4", label: "Industries Worked In" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}