import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle mt-3">{subtitle}</p>
    </motion.div>
  )
}
