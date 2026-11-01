import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { certifications } from '../data/portfolioData'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-wrap">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous Learning Credentials"
        subtitle="Recognitions that reflect practical skill development, workshop participation, and professional growth intent."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((certificate, index) => (
          <motion.article
            key={certificate}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card"
          >
            <Award className="mb-4 text-blue-500" size={20} />
            <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200">
              {certificate}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
