import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="group glass-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-blue-500/15 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-3 inline-flex rounded-full border border-blue-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          Project
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {project.description.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-500">
          Enterprise case study
          <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.article>
  )
}
