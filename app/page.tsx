import AboutSection from "@/components/about/about-section";
import ExperienceSection from "@/components/experience/experience-section";
import Hero from "@/components/hero/hero";
import FeaturedProject from "@/components/projects/featured-project";
import SkillsSection from "@/components/skills/skills-section";
import { featuredProjects } from "@/data/projects";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject project={featuredProjects[0]} />   
        <AboutSection />  
      <SkillsSection /> 
      <ExperienceSection />  
      
    </>
  );
}
