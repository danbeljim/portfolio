import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero', id: 'hero' },
  { label: 'Sobre mí', href: '#about', id: 'about' },
  { label: 'Experiencia', href: '#experience', id: 'experience' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Contacto', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-blue-400 font-semibold text-lg tracking-tight">AC</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors relative pb-0.5 ${
                  active === l.id
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors ${active === l.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
