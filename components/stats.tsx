const stats = [
  { value: "500+", label: "Equipos Reparados", description: "Computadoras y dispositivos" },
  { value: "50+", label: "Sitios Web Creados", description: "Para diversos clientes" },
  { value: "7", label: "Días a la Semana", description: "Atención todos los días" },
  { value: "98%", label: "Clientes Satisfechos", description: "Nos recomiendan" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
