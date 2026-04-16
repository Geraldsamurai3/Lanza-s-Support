import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Monitor, Globe, Headphones } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Atención todos los días de la semana
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Soluciones tecnológicas{" "}
            <span className="text-primary">para tu negocio</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            Servicio técnico profesional, desarrollo web y soporte remoto.
            Todo lo que necesitas para mantener tu tecnología funcionando perfectamente.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="#contacto">
                Solicitar Servicio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Monitor className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Servicio Técnico</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reparación y mantenimiento de equipos de cómputo y electrónica
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Desarrollo Web</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Creación de páginas web profesionales y personalizadas
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Help Desk Remoto</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Soporte técnico en línea sin necesidad de movilizarte
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
