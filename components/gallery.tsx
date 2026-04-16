import { Monitor, Globe, Server, Smartphone } from "lucide-react"

const projects = [
  {
    category: "Desarrollo Web",
    title: "Blog Corporativo",
    description: "Sitio informativo con blog integrado, SEO optimizado y panel de gestión de contenidos.",
    icon: Globe,
    tags: ["Next.js", "SEO", "CMS"],
  },
  {
    category: "Servicio Técnico",
    title: "Recuperación de Datos",
    description: "Recuperación exitosa de disco duro dañado con más de 500GB de información empresarial.",
    icon: Server,
    tags: ["HDD", "Recuperación", "Empresarial"],
  },
  {
    category: "Desarrollo Web",
    title: "Landing Page Corporativa",
    description: "Sitio web profesional para empresa de consultoría con formulario de contacto integrado.",
    icon: Monitor,
    tags: ["WordPress", "SEO", "Responsive"],
  },
  {
    category: "Plan Empresarial",
    title: "Mantenimiento Masivo",
    description: "Mantenimiento preventivo y correctivo de 50+ equipos para empresa de manufactura.",
    icon: Smartphone,
    tags: ["Preventivo", "Correctivo", "Soporte"],
  },
  {
    category: "Desarrollo Web",
    title: "Sistema de Reservaciones",
    description: "Aplicación web para gestión de citas y reservaciones con notificaciones automáticas.",
    icon: Globe,
    tags: ["Full Stack", "Base de Datos", "API"],
  },
  {
    category: "Help Desk",
    title: "Soporte Remoto Continuo",
    description: "Contrato de soporte técnico remoto para oficina con 20 empleados.",
    icon: Monitor,
    tags: ["Remoto", "Mensual", "Ilimitado"],
  },
]

export function Gallery() {
  return (
    <section id="trabajos" className="border-y border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portafolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Algunos de nuestros trabajos
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Proyectos reales que demuestran nuestra experiencia y calidad de servicio
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{project.category}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
