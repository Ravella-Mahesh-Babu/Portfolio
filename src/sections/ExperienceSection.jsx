import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeading
        eyebrow="Experience"
        title="Internship experience"
        subtitle="Hands-on embedded systems work at DRDL across design, tooling, and testing."
      />

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="glass-card relative"
      >
        <div className="absolute left-6 top-20 hidden h-[calc(100%-7rem)] w-px bg-gradient-to-b from-blue-400 to-transparent sm:block" />
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          <BriefcaseBusiness size={14} />
          Internship
        </div>
        <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {experience.organization}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          {experience.role} • {experience.duration}
        </p>

        <ul className="mt-6 space-y-3">
          {experience.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  )
}
