"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import TimelineCard from "./timeline-caard";
import { experiences, industries } from "@/data/experience";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-slate-950/50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-4">
            Professional Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building products across media, fintech, travel and telecom.
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            My experience includes developing production-ready interfaces,
            authentication systems, dashboards, CMS-driven websites and responsive
            landing pages for businesses across Africa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-24 relative pl-10">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-purple-500 to-transparent" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-4">
              Industry Experience
            </p>

            <h3 className="text-4xl font-bold">
              Experience across multiple product domains.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-6 text-center border border-white/10"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5">
                    <Icon className="text-white" size={30} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {industry.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass rounded-[36px] p-8 md:p-12 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-8">
            <BriefcaseBusiness className="text-cyan-400" size={28} />
            <h3 className="text-3xl font-bold">Career Summary</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                What I&apos;ve Worked On
              </h4>

              <ul className="space-y-3 text-slate-300">
                {[
                  "Responsive editorial websites",
                  "Financial analytics dashboards",
                  "Authentication & subscription interfaces",
                  "Landing pages for startups and businesses",
                  "Reusable design systems",
                  "API-integrated frontend applications",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                What I Enjoy Building
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js Apps",
                  "React Dashboards",
                  "FinTech Interfaces",
                  "CMS Websites",
                  "Travel Platforms",
                  "Admin Panels",
                  "REST APIs",
                  "Design Systems",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}