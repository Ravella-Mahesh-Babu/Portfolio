import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/portfolioData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects"
        subtitle="Academic work spanning wireless systems, embedded control, and applied engineering."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
