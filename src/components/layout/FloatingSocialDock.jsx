import { Code2, Globe, Mail, Phone } from 'lucide-react'
import { profile } from '../../data/portfolioData'

const links = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Globe },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone}`, icon: Phone },
  { label: 'GitHub', href: profile.github, icon: Code2 },
]

export default function FloatingSocialDock() {
  return (
    <aside className="fixed bottom-5 right-4 z-40 hidden flex-col gap-2 lg:flex">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group glass-card !rounded-2xl !p-3"
            aria-label={link.label}
          >
            <Icon size={18} className="text-slate-700 transition group-hover:text-blue-500 dark:text-slate-300" />
          </a>
        )
      })}
    </aside>
  )
}
