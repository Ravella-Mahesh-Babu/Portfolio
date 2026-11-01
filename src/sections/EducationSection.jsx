import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { education } from '../data/portfolioData'

export default function EducationSection() {
  return (
    <section id="education" className="section-wrap">
      <SectionHeading
        eyebrow="Education"
        title="Academic Timeline"
        subtitle="Consistent academic performance with a strong foundation in engineering and communication systems."
      />

      <div className="space-y-4">
        {education.map((item, index) => (
          <motion.article
            key={item.institution}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                <GraduationCap size={13} />
                {item.year}
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.score}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
