import Container from "@/components/container";
import ResumeHero from "@/components/resume/resume-hero";
import ExperienceTimeline from "@/components/resume/experience-timeline";
import EducationSection from "@/components/resume/education-section";
import SkillsSummary from "@/components/resume/skills-summary";

export const metadata = {
  title: "Resume | Njoku Emeka",
  description:
    "Frontend Engineer Resume — React, Next.js, TypeScript and Tailwind CSS.",
};

export default function ResumePage() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <ResumeHero />

        <ExperienceTimeline />

        <EducationSection />

        <SkillsSummary />

        {/* Featured Projects */}
        <section className="mt-28 glass rounded-[36px] border border-white/10 p-10 md:p-14">
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
            Featured Production Projects
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Websites I&apos;ve Helped Build
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Billionaires.Africa",
              "Follow The Money",
              "Nairalytics",
              "JustinTime Travels",
              "Nairametrics Prime",
              "NMobile",
            ].map((project) => (
              <div
                key={project}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-medium text-white">{project}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resume CTA */}
        <section className="mt-24 text-center glass rounded-[36px] border border-white/10 p-12">
          <h2 className="text-4xl font-bold">
            Looking for a Frontend Engineer?
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            I&apos;m available for frontend engineering roles, freelance projects and
            product collaborations focused on modern React and Next.js
            applications.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-8 py-4 text-white font-medium inline-flex"
            >
              Contact Me
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}