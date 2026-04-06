export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full py-24 md:py-0 flex flex-col md:flex-row md:items-center md:gap-16">
        <img
          src="/fotologin.jpg"
          alt="Andrés Calzado Chica"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-700 shrink-0 mb-8 md:mb-0"
        />
        <div>
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Hola, soy</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Andrés<br />
          <span className="text-gray-400">Calzado Chica</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">Desarrollador FullStack</p>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          Especializado en backend con Java y Spring. Construyo aplicaciones robustas, APIs REST y sistemas escalables.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            Contactar
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar CV
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
