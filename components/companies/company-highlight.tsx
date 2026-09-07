"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Company } from "@/data/companies";

interface HighlightProps {
  company: Company;
}

export default function CompanyHighlight({
  company,
}: HighlightProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="glass overflow-hidden rounded-[36px] border border-white/10"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-linear-to-br from-cyan-500/10 via-blue-600/10 to-purple-500/10 p-12">
          <div
            className={`absolute h-72 w-72 rounded-full bg-linear-to-br ${company.color} opacity-20 blur-[90px]`}
          />

          <Image
            src={company.logo}
            alt={company.name}
            width={180}
            height={180}
            className="relative object-contain"
          />
        </div>

        <div className="flex flex-col justify-center p-10 md:p-14">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 w-fit">
            Featured Production Project
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white">
            {company.name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {company.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "Responsive UI", "REST API"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 text-cyan-400 font-medium"
          >
            Visit Website

            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}