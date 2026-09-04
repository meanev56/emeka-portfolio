import { notFound } from "next/navigation";
import Container from "@/components/container";
import ProjectHero from "@/components/projects/project-hero";
import ProjectGallery from "@/components/projects/project-gallery";
import ChallengeSolution from "@/components/projects/challenge-solution";
import TechStack from "@/components/projects/tech-stack";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-24">
      <Container>
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
              This production application was built using a reusable component-based
              architecture with responsive layouts, API-ready pages and scalable UI
              patterns using modern React and Next.js.
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
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
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
              {
                label: "Responsive Layout",
                value: "100%",
              },
              {
                label: "Reusable Components",
                value: "20+",
              },
              {
                label: "Production Ready",
                value: "Live",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-cyan-400">{stat.value}</h3>
                <p className="mt-2 text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visit Website CTA */}
        <section className="mt-24 text-center glass rounded-[36px] border border-white/10 p-10 md:p-16">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
            Live Project
          </p>

          <h2 className="text-4xl font-bold mb-6">See the project in action.</h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-8">
            Explore the live production website and experience the responsive UI,
            reusable components and polished user experience.
          </p>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-8 py-4 text-white font-medium"
          >
            Visit {project.title}
          </a>
        </section>
      </Container>
    </main>
  );
}