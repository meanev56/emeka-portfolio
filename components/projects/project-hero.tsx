"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, CalendarDays } from "lucide-react";
import { Project } from "@/data/projects";
import TechStack from "./tech-stack";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm text-blue-300">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {project.year}
            </span>

            <span className="flex items-center gap-2">
              <Globe size={16} />
              Production Website
            </span>
          </div>

          <p className="mt-8 text-lg text-slate-300 leading-8">
            {project.overview}
          </p>

          <div className="mt-8">
            <TechStack technologies={project.technologies} />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-6 py-4 text-white flex items-center gap-2"
            >
              Visit Live Website
              <ArrowUpRight size={18} />
            </a>

            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-6 py-4 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Back to Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl" />

          <Image
            src={project.heroImage}
            alt={project.title}
            width={900}
            height={700}
            className="relative rounded-4xl border border-white/10 object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}