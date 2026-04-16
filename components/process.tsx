import { MessageSquare, Search, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Contacto Inicial",
    description: "Nos escribes por WhatsApp, formulario o redes sociales describiendo tu problema o necesidad.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Diagnóstico",
    description: "Evaluamos tu caso y te damos un diagnóstico con cotización sin compromiso. Si es remoto, nos conectamos a tu equipo.",
    icon: Search,
  },
  {
    step: "03",
    title: "Solución",
    description: "Trabajamos en la reparación, desarrollo web o soporte técnico según lo acordado.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Entrega y Garantía",
    description: "Te entregamos el trabajo finalizado con garantía y seguimiento post-servicio.",
    icon: CheckCircle,
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Proceso
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            ¿Cómo trabajamos?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Un proceso simple y transparente para resolver tus problemas tecnológicos
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary bg-card">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <span className="mt-4 text-sm font-bold text-primary">{step.step}</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
