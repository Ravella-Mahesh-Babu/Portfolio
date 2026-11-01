export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section-wrap flex flex-col items-center justify-between gap-3 py-0 text-sm text-slate-600 dark:text-slate-300 sm:flex-row">
        <p>Ravella Mahesh Babu • Portfolio</p>
        <p>© {new Date().getFullYear()} Ravella Mahesh Babu. All rights reserved.</p>
      </div>
    </footer>
  )
}
