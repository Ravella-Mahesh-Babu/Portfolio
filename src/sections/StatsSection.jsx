import { motion } from 'framer-motion'
import { stats } from '../data/portfolioData'

export default function StatsSection() {
  return (
    <section className="section-wrap py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="surface-card"
          >
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
