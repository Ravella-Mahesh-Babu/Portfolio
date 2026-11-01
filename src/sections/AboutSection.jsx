import { motion } from 'framer-motion'
import { GraduationCap, Handshake, Lightbulb, Target } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Academic foundation',
    text: 'B.Tech in Electronics and Communication Engineering from GITAM University with a CGPA of 9.27.',
  },
  {
    icon: Lightbulb,
    title: 'Software direction',
    text: 'Building toward frontend and software roles with React, JavaScript, and Python.',
  },
  {
    icon: Target,
    title: 'Systems thinking',
    text: 'Comfortable moving between hardware-aware problem solving and clean application logic.',
  },
  {
    icon: Handshake,
    title: 'Collaborative delivery',
    text: 'Clear communicator who works well in teams and focuses on shipping reliable outcomes.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading
        eyebrow="About"
        title="ECE background, software trajectory"
        subtitle="I bring engineering rigor from electronics into modern software and frontend work."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card"
            >
              <Icon className="mb-4 text-blue-500" size={22} />
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {pillar.text}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
