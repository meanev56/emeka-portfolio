import Container from "@/components/container";
import GithubHero from "@/components/github/github-hero";
import GithubStats from "@/components/github/github-stats";
import ContributionGrid from "@/components/github/contribution-grid";
import GithubRepositories from "@/components/github/github-repositories";
import GithubActivity from "@/components/github/githhub-activity";
import TechActivity from "@/components/github/tech-activity";

export const metadata = {
  title: "GitHub Activity | Njoku Emeka",
  description:
    "Frontend engineering dashboard showing repositories, contributions and technology activity.",
};

export default function GithubPage() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <GithubHero />

        <GithubStats />

        <ContributionGrid />

        <GithubRepositories />

        <GithubActivity />

        <TechActivity />
      </Container>
    </main>
  );
}