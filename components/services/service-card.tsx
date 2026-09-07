"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="group glass rounded-4xl border border-white/10 p-8 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,.08)]"
    >
      {/* Icon */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${service.gradient} shadow-lg`}
      >
        <Icon className="text-white" size={28} />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-5 text-slate-400 leading-8">
        {service.description}
      </p>

      {/* Tech Pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex items-center gap-2 text-cyan-400 transition group-hover:translate-x-1">
        <span className="text-sm font-medium">
          Available for projects
        </span>

        <ArrowUpRight size={16} />
      </div>
    </motion.div>
  );
}