"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import ProjectCard from "@/components/projects/project-card";
import ProjectFilter from "@/components/projects/project-filter";
import ProjectSearch from "@/components/projects/project-search";
import { categories, featuredProjects, projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const query = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.overview.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featured = featuredProjects[0];

  return (
    <main className="pt-32 pb-24">
      <Container>
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Featured Production Work
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Projects I&apos;ve Built.
          </h1>

          <p className="mt-8 text-lg text-slate-400 leading-8">
            A collection of production-ready websites and applications built using
            Next.js, React, TypeScript and Tailwind CSS across media, fintech,
            travel and telecommunications.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[40px] overflow-hidden border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative min-h-85 lg:min-h-125">
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300 w-fit">
                  {featured.category}
                </span>

                <h2 className="mt-6 text-4xl font-bold">{featured.title}</h2>

                <p className="mt-6 text-slate-400 leading-8">
                  {featured.overview}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-6 py-3 text-white flex items-center gap-2"
                  >
                    Read Case Study
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-6 py-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SEARCH */}
        <section className="mt-24">
          <ProjectSearch value={search} onChange={setSearch} />
        </section>

        {/* FILTER */}
        <section className="mt-10">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* RESULTS */}
        <div className="mt-8 flex justify-between items-center text-sm text-slate-400">
          <p>
            Showing <span className="text-white">{filteredProjects.length}</span>{" "}
            project{filteredProjects.length !== 1 && "s"}
          </p>

          {search && (
            <p>
              Search: <span className="text-cyan-400">{search}</span>
            </p>
          )}
        </div>

        {/* GRID */}
        <section className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </section>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 glass rounded-3xl p-16 text-center"
          >
            <h3 className="text-3xl font-bold">No projects found.</h3>

            <p className="mt-4 text-slate-400">
              Try searching for React, Next.js, Tailwind, Media or FinTech.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-8 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[36px] p-10 md:p-16 text-center"
          >
            <span className="rounded-full bg-purple-600/20 px-4 py-2 text-sm text-purple-300">
              Interested in working together?
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Let&apos;s build your next product.
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 leading-8">
              I build production-ready web applications, dashboards and responsive
              interfaces with Next.js, React and TypeScript.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-7 py-4 text-white"
              >
                Contact Me
              </Link>

              <Link
                href="/resume"
                className="rounded-full border border-white/10 px-7 py-4 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </section>
      </Container>
    </main>
  );
}