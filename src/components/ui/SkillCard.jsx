import { motion } from 'framer-motion'

export default function SkillCard({ group, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="surface-card"
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
        {group}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.article>
  )
}
