import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const jobs = [
  {
    company: 'NTTData',
    role: 'Desarrollador Fullstack',
    period: 'Jul 2021 – Jun 2023',
    bullets: [
      'Desarrollo backend con Java Spring y frontend con ZK Framework',
      'Integración con base de datos Oracle',
      'Desarrollo de interfaces con SAP Fiori UI5',
    ],
  },
  {
    company: 'AYESA',
    role: 'Desarrollador Backend',
    period: 'Jun 2023 – Feb 2024',
    bullets: [
      'Desarrollo backend con Java Spring y base de datos Oracle',
      'Monitorización y análisis de logs con Kibana',
      'Testing con JUnit e integración continua con Jenkins',
    ],
  },
  {
    company: 'BROOKTEC',
    role: 'Desarrollador Fullstack',
    period: 'Feb 2024 – Abr 2024',
    bullets: [
      'Desarrollo de APIs REST con Node.js',
      'Desarrollo frontend con React, HTML, CSS y Bootstrap',
    ],
  },
  {
    company: 'NTTData',
    role: 'Desarrollador Fullstack',
    period: 'Jul 2024 – Presente',
    bullets: [
      'Desarrollo backend con Java Spring y frontend con ZK Framework',
      'Gestión e integración con base de datos Oracle',
    ],
    current: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">Trayectoria</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Experiencia</h2>
        </FadeIn>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-px md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {jobs.map((job, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                  className={`relative pl-8 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 md:self-start' : 'md:pl-12 md:self-end md:ml-auto'}`}
                >
                  {/* Dot */}
                  <div className={`absolute top-1.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-gray-950 left-[-5px] md:top-2 ${isEven ? 'md:left-auto md:right-[-7px]' : 'md:left-[-7px]'}`} />

                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">{job.role}</h3>
                        <p className="text-blue-400 font-medium text-sm mt-0.5">{job.company}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border shrink-0 ${job.current ? 'bg-blue-900/30 border-blue-700 text-blue-300' : 'bg-gray-800 border-gray-700 text-gray-400'}`}>
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
