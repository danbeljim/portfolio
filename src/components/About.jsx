const skills = [
  'Java 8', 'Spring Boot', 'Spring MVC', 'REST APIs',
  'SQL', 'Oracle DB', 'Git', 'Metodologías Ágiles',
  'React', 'JavaScript', 'HTML/CSS',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">Conóceme</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Sobre mí</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Desarrollador Fullstack con <span className="text-white font-medium">3-4 años de experiencia</span>, especializado principalmente en backend con Java 8 y Spring. Enfocado en el desarrollo de aplicaciones robustas y escalables, diseño de APIs REST y gestión de bases de datos SQL Oracle.
            </p>
            <p>
              Experiencia participando en el ciclo completo de desarrollo, desde el análisis técnico y la implementación de la lógica de negocio hasta la integración con frontend y sistemas externos.
            </p>
            <p>
              Interesado en escribir código limpio, mantenible y orientado a rendimiento. Acostumbrado a trabajar en entornos colaborativos y metodologías ágiles, aportando soluciones prácticas enfocadas en la calidad del software y la mejora continua.
            </p>
          </div>

          <div>
            <img src="/fotologin.jpg" alt="Andrés Calzado Chica" className="w-40 h-40 rounded-full object-cover mb-6 border-2 border-gray-700" />
            <h3 className="text-white font-semibold mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
