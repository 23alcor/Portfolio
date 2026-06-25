import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { ResearchSection } from "../components/ResearchSection"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    <ThemeToggle/>

    <StarBackground />

    <Navbar />

    <main>
      <HeroSection />
    </main>

    <ProjectSection/> 

    <ResearchSection/>

    <ContactSection/>

    <Footer/>

  </div>
}