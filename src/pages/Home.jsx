import { HeroSection } from "../components/HeroSection"
import { ProjectSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { ResearchSection } from "../components/ResearchSection"
import { ExperienceSection } from "../components/ExperienceSection"

// Theme toggle, star background, navbar and footer live in SiteLayout.
export const Home = () => {
  return <>

    <main>
      <HeroSection />
    </main>

    <ProjectSection/>

    <ResearchSection/>

    <ExperienceSection/>

    <ContactSection/>

  </>
}
