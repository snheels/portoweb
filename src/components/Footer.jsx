import { Github, Instagram } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl text-pink tracking-wide">Yuha</p>
            <p className="text-cream/50 text-xs tracking-[0.2em] uppercase mt-1 font-body">
              · Student
            </p>
          </div>

          <div className="flex gap-8">
            {[['Home', '/'], ['Portfolio', '/portfolio']].map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className="font-body text-sm text-cream/60 hover:text-pink transition-colors"
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/snheels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:border-pink group-hover:bg-pink/10 transition-all duration-300">
                <Github size={17} className="text-cream/60 group-hover:text-pink transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/yae_hhhha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:border-pink group-hover:bg-pink/10 transition-all duration-300">
                <Instagram size={17} className="text-cream/60 group-hover:text-pink transition-colors" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-cream/30 text-xs font-body tracking-wide">
            © 2026 Siti Yayuh Addawiyyah Pitalokasari. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs font-body italic">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}