"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Company } from "@/data/companies";

interface CompanyLogoProps {
  company: Company;
  index: number;
}

export default function CompanyLogo({
  company,
  index,
}: CompanyLogoProps) {
  return (
    <motion.a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group glass rounded-[28px] border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-500"
    >
      {/* Logo */}
      <div className="flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${company.color}`}
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={34}
            height={34}
            className="object-contain"
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-500 transition group-hover:text-cyan-400"
        />
      </div>

      {/* Category */}
      <span className="mt-6 inline-flex rounded-full bg-white/5 px-3 py-2 text-xs text-cyan-300">
        {company.category}
      </span>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-white">
        {company.name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-slate-400">
        {company.description}
      </p>
    </motion.a>
  );
}