import AboutSection from "@/components/about/about-section";
import ExperienceSection from "@/components/experience/experience-section";
import Hero from "@/components/hero/hero";
import FeaturedProject from "@/components/projects/featured-project";
import SkillsSection from "@/components/skills/skills-section";
import { featuredProjects } from "@/data/projects";
import ServicesSection from "@/components/services/services-section";
import CompaniesSection from "@/components/companies/companies-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject project={featuredProjects[0]} />   
        <AboutSection />
        <ServicesSection /> 
        <CompaniesSection /> 
      <SkillsSection /> 
      <ExperienceSection />  
      
    </>
  );
}
