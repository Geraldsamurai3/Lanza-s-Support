import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente",
    content: "Llevé mi laptop con las bisagras rotas y la repararon perfectamente. Quedó como nueva y el servicio fue muy rápido. Totalmente recomendados.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Operaciones",
    content: "El plan empresarial nos ha ahorrado mucho dinero y tiempo. El mantenimiento preventivo evitó que tuviéramos fallas costosas.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Freelancer",
    content: "Mi laptop dejó de funcionar de repente y pensé que había perdido todo. Recuperaron mis archivos y la dejaron como nueva.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Director de PYME",
    content: "El soporte remoto es increíble. Resuelven problemas en minutos sin que tengamos que mover nuestros equipos. Servicio de primera.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Lo que dicen nuestros clientes
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground text-pretty">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
