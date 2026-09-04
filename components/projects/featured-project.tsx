"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import TechStack from "./tech-stack";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[40px] overflow-hidden border border-white/10"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-130">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-sm text-cyan-300 w-fit">
              Featured Project
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-6 text-slate-300 leading-8">{project.overview}</p>

            <div className="mt-8">
              <TechStack technologies={project.technologies.slice(0, 5)} />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-6 py-4 text-white flex items-center gap-2"
              >
                View Case Study
                <ArrowRight size={18} />
              </Link>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-6 py-4 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}