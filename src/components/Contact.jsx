export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">Hablemos</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>
        <p className="text-gray-400 mb-12 max-w-lg">
          Si tienes un proyecto en mente o quieres ponerte en contacto, no dudes en escribirme.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:andrescalzado41@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            andrescalzado41@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/andresChicaCalzado"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Andrés Calzado Chica
      </div>
    </section>
  )
}
