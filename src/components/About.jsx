import FadeIn from './FadeIn'

const skills = [
  { name: 'Java 8',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Oracle DB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'SQL',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'HTML',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'REST APIs',    icon: null },
  { name: 'Agile',        icon: null },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">Conóceme</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Sobre mí</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
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
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-white font-semibold mb-6">Tecnologías</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-750 transition-colors group"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="w-8 h-8 flex items-center justify-center text-blue-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path d="M17 14l-5 5-5-5M17 10l-5-5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                  <span className="text-gray-400 text-xs text-center leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
