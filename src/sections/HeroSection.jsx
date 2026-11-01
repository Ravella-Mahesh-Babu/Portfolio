import { motion } from 'framer-motion'
import { ArrowDownRight, Eye, Globe, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'
import useTypewriter from '../hooks/useTypewriter'

const rotatingRoles = ['ECE Graduate', 'Frontend Developer', 'Python Enthusiast']

export default function HeroSection() {
  const typedText = useTypewriter(rotatingRoles, 80, 1400)

  return (
    <section id="home" className="relative section-wrap pb-14 pt-20 sm:pt-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-12 sm:px-10 sm:py-16 dark:border-slate-800 dark:bg-slate-900/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_42%)]"
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Portfolio
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-200">
              {typedText}
              <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-500 align-middle" />
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                <Eye size={16} />
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white dark:text-blue-300"
              >
                <Globe size={16} />
                LinkedIn
              </a>
            </div>

            <a
              href="#about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-500 dark:text-slate-300"
            >
              Explore Profile
              <ArrowDownRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <img
              src={profile.photoPath}
              alt={`${profile.name} headshot`}
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
