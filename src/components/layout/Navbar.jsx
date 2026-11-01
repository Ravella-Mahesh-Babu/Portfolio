import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, MoonStar, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, profile } from '../../data/portfolioData'

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="section-wrap py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-display text-sm font-semibold tracking-[0.2em] text-slate-900 dark:text-slate-100">
            RMB
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <MoonStar size={16} />}
            </button>

            <a
              href={profile.resumePath}
              download="Ravella_Mahesh_Babu_Resume.pdf"
              className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-glow lg:inline-flex"
            >
              <Download size={14} />
              Download Resume
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full border border-slate-300 p-2 lg:hidden dark:border-slate-700"
              aria-label="Open navigation"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mt-4 grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 lg:hidden"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumePath}
                  download="Ravella_Mahesh_Babu_Resume.pdf"
                  className="mt-1 block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Download Resume
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
