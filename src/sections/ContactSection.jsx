import { motion } from 'framer-motion'
import { CheckCircle2, Globe, LoaderCircle, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import { profile } from '../data/portfolioData'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const FORMSPREE_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null

const initialForm = {
  name: '',
  email: '',
  message: '',
  website: '', // honeypot
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      setErrorMessage('Contact form is not configured yet. Please email me directly.')
      return
    }

    if (form.website) {
      setStatus('success')
      setForm(initialForm)
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: `Portfolio inquiry from ${form.name}`,
        }),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(payload?.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="section-wrap">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        subtitle="Open to software roles, internships, and collaborative engineering work."
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="surface-card"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-start gap-4 py-6">
              <CheckCircle2 className="text-emerald-500" size={28} />
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Message sent
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                  placeholder="Share a role, project, or introduction..."
                />
              </div>

              <motion.button
                whileTap={status === 'submitting' ? undefined : { scale: 0.98 }}
                whileHover={status === 'submitting' ? undefined : { scale: 1.01 }}
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <LoaderCircle size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {errorMessage}{' '}
                  <a href={`mailto:${profile.email}`} className="font-semibold underline">
                    {profile.email}
                  </a>
                </p>
              )}
            </form>
          )}
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="surface-card"
        >
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
            Direct contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Mail size={16} className="text-blue-500" />
              <a href={`mailto:${profile.email}`} className="hover:text-blue-500">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Phone size={16} className="text-blue-500" />
              <a href={`tel:${profile.phone}`} className="hover:text-blue-500">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Globe size={16} className="text-blue-500" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500">
                linkedin.com/in/mahesh-babu-ravella/
              </a>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
