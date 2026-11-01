import SectionHeading from '../components/ui/SectionHeading'
import SkillCard from '../components/ui/SkillCard'
import { skills } from '../data/portfolioData'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and strengths"
        subtitle="A practical mix of programming, frontend, engineering tools, and professional skills."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <SkillCard key={group} group={group} items={items} />
        ))}
      </div>
    </section>
  )
}
