"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import SkillCard from "./skill-card";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  Palette,
  Rocket,
  Database,
  ShieldCheck,
  Layers,
} from "lucide-react";

const workflow = [
  {
    icon: Palette,
    title: "UI Implementation",
    text: "Pixel-perfect conversion from Figma into responsive React and Next.js interfaces.",
  },
  {
    icon: Code2,
    title: "Reusable Components",
    text: "Building scalable design systems using TypeScript and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "REST API Integration",
    text: "Authentication, CRUD operations, CMS APIs, analytics dashboards and state management.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Accessibility",
    text: "Responsive layouts, optimized images, semantic HTML and accessible interfaces.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-4">
            Skills & Tools
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Technologies I use to build production-ready products.
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            My primary stack is centered around React, Next.js, TypeScript and
            Tailwind CSS, alongside modern tooling for deployment, collaboration,
            API testing and UI development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-20 space-y-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold">{category.title}</h3>
                <p className="text-slate-400 mt-3 text-lg">
                  {category.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mt-32 glass rounded-4xl p-8 md:p-12 border border-white/10">
          <div className="flex items-center gap-3 mb-10">
            <Rocket className="text-cyan-400" size={28} />
            <h3 className="text-3xl font-bold">Development Workflow</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5">
                    <Icon className="text-white" size={26} />
                  </div>

                  <h4 className="text-xl font-semibold">{item.title}</h4>

                  <p className="mt-3 text-slate-400 leading-7">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technologies Marquee */}
        <div className="mt-28 text-center">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-8">
            Daily Tech Stack
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "GitHub",
              "Postman",
              "Figma",
              "Vercel",
              "pnpm",
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-300 text-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I Build */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
              What I Build
            </p>

            <h3 className="text-4xl font-bold">
              Frontend solutions focused on product quality.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              "Responsive Websites",
              "Admin Dashboards",
              "Authentication Systems",
              "Landing Pages",
              "CMS Platforms",
              "REST API Integration",
              "Component Libraries",
              "Performance Optimization",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 text-center"
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Layers className="text-white" size={26} />
                </div>

                <p className="font-medium text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}