export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full py-24 md:py-0">
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
        </div>
      </div>
    </section>
  )
}
