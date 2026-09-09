import AboutSection from "@/components/about/about-section";
import ExperienceSection from "@/components/experience/experience-section";
import Hero from "@/components/hero/hero";
import FeaturedProject from "@/components/projects/featured-project";
import SkillsSection from "@/components/skills/skills-section";
import { featuredProjects } from "@/data/projects";
import ServicesSection from "@/components/services/services-section";
import CompaniesSection from "@/components/companies/companies-section";
import AchievementsSection from "@/components/achievements/achievements-section";
import TestimonialsSection from "@/components/testimonials/testimonials-section";
import FAQSection from "@/components/faq/faq-section";
import AnimatedBackground from "@/components/home/animated-background";
import Container from "@/components/container";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      
      <Container>
        <Hero />
        <FeaturedProject project={featuredProjects[0]} />   
        <AboutSection />
        <ServicesSection /> 
        <CompaniesSection />
        <AchievementsSection /> 
        <TestimonialsSection />
        <FAQSection />
        <SkillsSection /> 
        <ExperienceSection />
      </Container>  
    </main>
  );
}
