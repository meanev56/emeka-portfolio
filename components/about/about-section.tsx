"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Globe,
  Laptop,
  Sparkles,
} from "lucide-react";
import StatsGrid from "./stats-grid";
import Container from "@/components/container";

const industries = [
  {
    icon: Building2,
    title: "Business Media",
    description:
      "Editorial websites, news platforms, CMS-driven interfaces and article layouts.",
  },
  {
    icon: Laptop,
    title: "FinTech",
    description:
      "Dashboards, subscription products, authentication flows and analytics interfaces.",
  },
  {
    icon: Globe,
    title: "Travel & Telecom",
    description:
      "Responsive marketing websites, booking experiences and product landing pages.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Framer Motion",
  "GitHub",
  "Postman",
  "Figma",
  "Vercel",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-linear-to-b from-background to-slate-950/60"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-linear-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-2xl" />

            <div className="relative rounded-4xl glass overflow-hidden border border-white/10">
              <Image
                src="/workspace.jpg"
                alt="Njoku Emeka Workspace"
                width={700}
                height={900}
                className="object-cover w-full h-140"
              />

              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-5">
                <div className="flex items-center gap-3 text-sm text-slate-300 mb-2">
                  <Sparkles className="text-cyan-400" size={18} />
                  Frontend Engineer · Available for Remote Opportunities
                </div>

                <h3 className="text-xl font-bold text-white">
                  Building products people actually enjoy using.
                </h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Designing and building scalable frontend experiences.
            </h2>

            <p className="mt-7 text-slate-300 leading-8 text-lg">
              I&apos;m <span className="font-semibold text-white">Njoku Emeka</span>, a
              Frontend Engineer passionate about building fast, responsive and
              maintainable web applications.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              My work spans business media, fintech, analytics, telecommunications,
              and travel, where I&apos;ve contributed to production platforms used by
              thousands of users across Africa.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              I enjoy turning product ideas into polished interfaces with reusable
              components, API integrations, authentication systems, dashboards, and
              delightful user experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href="/resume"
              className="inline-flex items-center gap-2 mt-10 text-blue-400 font-medium"
            >
              View Resume
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="mt-24">
          <StatsGrid />
        </div>

        {/* Industry Experience */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
              Industries
            </p>

            <h2 className="text-4xl font-bold">Experience across multiple sectors</h2>

            <p className="text-slate-400 mt-5 leading-8">
              Building interfaces for finance, media, travel, analytics and telecom
              products with a strong focus on usability and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-8 border border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-400 leading-7">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Currently Working With */}
        <div className="mt-28 glass rounded-4xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
                Current Focus
              </p>

              <h3 className="text-3xl font-bold">
                Building production-ready frontend applications.
              </h3>

              <p className="mt-5 text-slate-400 leading-8">
                I enjoy collaborating with startups and product teams to ship clean,
                accessible and scalable interfaces using modern frontend tools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Responsive Websites",
                "Admin Dashboards",
                "Authentication Systems",
                "REST API Integration",
                "Landing Pages",
                "CMS Platforms",
                "Reusable UI Components",
                "Performance Optimization",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}