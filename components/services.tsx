import { 
  Monitor, 
  Globe, 
  Headphones, 
  Building2, 
  Cpu, 
  Smartphone,
  Code,
  BookOpen,
  Shield,
  Wifi,
  HardDrive,
  Settings
} from "lucide-react"

const services = [
  {
    category: "Servicio Técnico",
    icon: Monitor,
    description: "Reparación y mantenimiento de todo tipo de equipos",
    items: [
      { icon: Cpu, name: "Reparación de PCs", desc: "Diagnóstico y reparación de computadoras de escritorio y laptops" },
      { icon: Smartphone, name: "Electrónica", desc: "Servicio técnico para dispositivos electrónicos diversos" },
      { icon: HardDrive, name: "Recuperación de Datos", desc: "Recuperamos información de discos dañados o formateados" },
      { icon: Settings, name: "Mantenimiento Preventivo", desc: "Limpieza y optimización para prolongar la vida de tus equipos" },
    ]
  },
  {
    category: "Desarrollo Web",
    icon: Globe,
    description: "Creamos tu presencia digital profesional",
    items: [
      { icon: Code, name: "Sitios Web Personalizados", desc: "Diseño y desarrollo a medida según tus necesidades" },
      { icon: BookOpen, name: "Blogs y Sitios Informativos", desc: "Sitios de contenido, noticias y portafolios para negocios o personas" },
      { icon: Shield, name: "Hosting y Dominio", desc: "Gestión completa de tu presencia en internet" },
      { icon: Wifi, name: "SEO y Marketing", desc: "Optimización para que te encuentren en Google" },
    ]
  },
]

const enterpriseFeatures = [
  "Mantenimiento masivo de equipos",
  "Contratos de soporte continuo",
  "Atención prioritaria",
  "Técnicos dedicados",
  "Reportes mensuales",
  "Descuentos especiales",
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros Servicios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Desde reparaciones hasta desarrollo web, cubrimos todo el espectro de servicios tecnológicos
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.category}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.category}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="empresas" className="mt-16 rounded-3xl border border-primary/30 bg-linear-to-br from-primary/5 to-primary/10 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
                <Building2 className="h-4 w-4" />
                Planes Empresariales
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                Soluciones a medida para tu empresa
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ofrecemos planes especiales para empresas que necesitan mantenimiento masivo de equipos.
                Reduce costos, aumenta la productividad y mantén tu infraestructura tecnológica en óptimas condiciones.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Headphones className="h-12 w-12 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Help Desk Remoto</p>
                  <p className="text-sm text-muted-foreground">
                    Soporte técnico en línea sin necesidad de movilización
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="grid gap-3 sm:grid-cols-2">
                {enterpriseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <svg className="h-3.5 w-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
