import Footer from './components/layout/Footer'
import FloatingSocialDock from './components/layout/FloatingSocialDock'
import Navbar from './components/layout/Navbar'
import useTheme from './hooks/useTheme'
import AboutSection from './sections/AboutSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import StatsSection from './sections/StatsSection'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative overflow-x-clip">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <FloatingSocialDock />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
