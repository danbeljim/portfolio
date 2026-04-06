const projects = [
  {
    title: 'Socios Fidelity App',
    logo: '/logo.webp',
    description: 'Aplicación móvil para fidelizar comercios y clientes mediante tarjetas de sellos y puntos. Disponible en Android e iOS.',
    tags: ['Android', 'iOS', 'App Móvil'],
    platforms: ['android', 'ios'],
    urlAndroid: 'https://play.google.com/store/apps/details?id=com.adndevs.socios&pcampaignid=web_share',
    urlIos: 'https://apps.apple.com/es/app/socios-fidelity-app/id6752959010',
    type: 'app',
  },
  {
    title: 'Socios Plus Fidelity App',
    logo: '/logo.webp',
    description: 'Aplicación móvil para comercios. Gestiona tus tarjetas de fidelización, clientes y recompensas desde tu negocio. Disponible en Android e iOS.',
    tags: ['Android', 'iOS', 'App Móvil'],
    platforms: ['android', 'ios'],
    urlAndroid: 'https://play.google.com/store/apps/details?id=com.adndevs.sociosbusiness',
    urlIos: 'https://apps.apple.com/es/app/socios-plus-fidelity-app/id6751712065',
    type: 'app',
  },
  {
    title: 'sociosapp.es',
    logo: '/logo.webp',
    description: 'Web oficial de Socios Fidelity App. Presenta las funcionalidades de la aplicación y permite a los usuarios conocer la plataforma.',
    tags: ['Web', 'Landing Page'],
    platforms: [],
    url: 'https://sociosapp.es',
    type: 'web',
  },
  {
    title: 'Próximamente...',
    description: 'Nuevo proyecto en desarrollo. Pronto disponible.',
    tags: [],
    platforms: [],
    url: null,
    type: 'coming',
  },
]

function AndroidIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a.754.754 0 01-.758-.755.754.754 0 01.758-.756.754.754 0 01.758.756.754.754 0 01-.758.755zm-11.046 0a.754.754 0 01-.758-.755.754.754 0 01.758-.756.754.754 0 01.757.756.754.754 0 01-.757.755zM17.78 9.87l1.518-2.63a.315.315 0 00-.115-.43.315.315 0 00-.43.114l-1.538 2.664A9.386 9.386 0 0012 8.5a9.386 9.386 0 00-5.215 1.088L5.247 6.924a.315.315 0 00-.43-.114.315.315 0 00-.115.43L6.22 9.87C3.876 11.174 2.289 13.5 2 16.25h20c-.289-2.75-1.876-5.076-4.22-6.38z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">Mi trabajo</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Proyectos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl border p-6 flex flex-col gap-4 transition-colors ${
                project.type === 'coming'
                  ? 'border-gray-800 bg-gray-900/40 opacity-60'
                  : 'border-gray-800 bg-gray-900 hover:border-gray-600'
              }`}
            >
              {/* Type badge + Logo */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  {project.type === 'app' && (
                    <>
                      <AndroidIcon />
                      <AppleIcon />
                      <span>App móvil</span>
                    </>
                  )}
                  {project.type === 'web' && (
                    <>
                      <WebIcon />
                      <span>Web</span>
                    </>
                  )}
                </div>
                {project.logo && (
                  <img src={project.logo} alt={`${project.title} logo`} className="w-12 h-12 rounded-xl object-contain" />
                )}
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-blue-900/30 text-blue-400 border border-blue-800/50 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(project.url || project.urlAndroid || project.urlIos) && (
                <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-gray-800">
                  {project.urlAndroid && (
                    <a
                      href={project.urlAndroid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <AndroidIcon />
                      Google Play
                      <svg className="w-3 h-3 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {project.urlIos && (
                    <a
                      href={project.urlIos}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <AppleIcon />
                      App Store
                      <svg className="w-3 h-3 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Ver proyecto
                      <svg className="w-3 h-3 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
