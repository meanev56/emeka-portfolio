"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import TechStack from "./tech-stack";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="group glass overflow-hidden rounded-4xl border border-white/10"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={900}
          height={600}
          className="h-62.5 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>

          <ArrowUpRight className="text-slate-500 group-hover:text-cyan-400 transition" />
        </div>

        <p className="mt-5 text-slate-400 leading-7 line-clamp-4">
          {project.overview}
        </p>

        <div className="mt-6">
          <TechStack technologies={project.technologies.slice(0, 3)} />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3 flex-wrap">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white"
          >
            View Case Study
          </Link>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            Visit Website
          </a>
        </div>
      </div>
    </motion.article>
  );
}