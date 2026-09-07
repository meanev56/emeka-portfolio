"use client";

import { motion } from "framer-motion";
import ServiceCard from "./service-card";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Services
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Frontend Engineering Services
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I help startups, companies and founders build modern,
            responsive and scalable web experiences with clean code,
            reusable components and performance-first architecture.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mt-24 rounded-[36px] border border-white/10 p-10 md:p-14 text-center"
        >
          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Available Worldwide
          </span>

          <h3 className="mt-8 text-4xl font-bold">
            Need a Frontend Engineer?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m available for remote frontend engineering roles,
            freelance development, UI implementation, API integration
            and product collaborations.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition hover:scale-105"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}