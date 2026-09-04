import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/container";
import ProjectHero from "@/components/projects/project-hero";
import ProjectGallery from "@/components/projects/project-gallery";
import ChallengeSolution from "@/components/projects/challenge-solution";
import TechStack from "@/components/projects/tech-stack";
import LiveLinks from "@/components/projects/live-links";
import ProjectStats from "@/components/projects/project-stats";
import ProjectNavigation from "@/components/projects/project-navigation";

import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ----------------------------- Static Params ----------------------------- */

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* ------------------------------- Metadata ------------------------------- */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Njoku Emeka`,
    description: project.overview,

    openGraph: {
      title: project.title,
      description: project.overview,
      images: [project.heroImage],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview,
      images: [project.heroImage],
    },
  };
}

/* --------------------------------- Page -------------------------------- */

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // Previous / Next navigation
  const currentIndex = projects.findIndex((item) => item.slug === slug);

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  return (
    <main className="pb-28">
      <Container>
        {/* Hero */}
        <ProjectHero project={project} />

        {/* Overview */}
        <section className="mt-24 grid lg:grid-cols-3 gap-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
              Overview
            </p>

            <h2 className="text-3xl font-bold">Project Summary</h2>
          </div>

          <div className="lg:col-span-2 space-y-6 text-slate-300 leading-8">
            <p>{project.overview}</p>

            <p>
              This production application was built using a reusable,
              component-driven architecture with responsive layouts, scalable UI
              patterns, and modern frontend engineering practices.
            </p>
          </div>
        </section>

        {/* Contributions */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
              My Contributions
            </p>

            <h2 className="text-4xl font-bold">What I Built</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.contributions.map((item, index) => (
              <div
                key={item}
                className="glass rounded-3xl border border-white/10 p-6 flex gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white font-bold">
                  {index + 1}
                </div>

                <p className="text-slate-300 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge / Solution / Result */}
        <ChallengeSolution
          challenge={project.challenge}
          solution={project.solution}
          result={project.result}
        />

        {/* Technologies */}
        <section className="mt-28 glass rounded-4xl border border-white/10 p-10">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-4">
            Technologies Used
          </p>

          <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>

          <TechStack technologies={project.technologies} />
        </section>

        {/* Project Metrics */}
        <ProjectStats />

        {/* Gallery */}
        <ProjectGallery images={project.gallery} />

        {/* Outcome */}
        <section className="mt-28 glass rounded-4xl border border-white/10 p-10 md:p-14">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
            Outcome
          </p>

          <h2 className="text-4xl font-bold mb-8">Project Impact</h2>

          <p className="text-slate-300 leading-8 text-lg">{project.result}</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { label: "Responsive Layout", value: "100%" },
              { label: "Reusable Components", value: "20+" },
              { label: "Production Ready", value: "Live" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Links */}
        <section className="mt-28">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-4">
            Explore Project
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Visit the live production website
          </h2>

          <p className="text-slate-400 max-w-2xl leading-8 mb-8">
            Explore the deployed application and experience the responsive UI,
            reusable components, and production-ready frontend implementation.
          </p>

          <LiveLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </section>

        {/* Previous / Next Navigation */}
        <ProjectNavigation
          previous={previousProject}
          next={nextProject}
        />
      </Container>
    </main>
  );
}