"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "¿Qué tipos de equipos reparan?",
    answer: "Reparamos computadoras de escritorio, laptops, tablets y dispositivos electrónicos en general. También trabajamos con impresoras, monitores y otros periféricos.",
  },
  {
    question: "¿Ofrecen garantía en sus reparaciones?",
    answer: "Sí, todas nuestras reparaciones incluyen garantía. El tiempo de garantía varía según el tipo de servicio, pero generalmente es de 30 a 90 días dependiendo del trabajo realizado.",
  },
  {
    question: "¿Cómo funciona el soporte remoto?",
    answer: "Nos conectamos a tu computadora de forma segura usando software especializado. Tú puedes ver todo lo que hacemos en tiempo real. Es ideal para problemas de software, configuraciones y optimizaciones.",
  },
  {
    question: "¿Cuánto tiempo tarda una reparación?",
    answer: "Depende del problema. Reparaciones simples pueden estar listas el mismo día. Problemas más complejos o que requieren piezas pueden tomar 2-5 días hábiles. Siempre te informamos el tiempo estimado antes de comenzar.",
  },
  {
    question: "¿Qué incluyen los planes empresariales?",
    answer: "Nuestros planes empresariales incluyen mantenimiento preventivo programado, soporte prioritario, atención a múltiples equipos, reportes mensuales y descuentos en reparaciones mayores.",
  },
  {
    question: "¿Hacen páginas web para cualquier tipo de negocio?",
    answer: "Sí, creamos sitios web para todo tipo de negocios: tiendas en línea, páginas corporativas, landing pages, blogs, portafolios y más. Cada proyecto se adapta a las necesidades específicas del cliente.",
  },
  {
    question: "¿Puedo solicitar servicio a domicilio?",
    answer: "Sí, ofrecemos servicio a domicilio para diagnósticos y reparaciones que no requieran trabajo de laboratorio. Contáctanos para coordinar una visita.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer: "Aceptamos efectivo, transferencias bancarias y pagos electrónicos. Para planes empresariales ofrecemos facturación mensual.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Preguntas Frecuentes
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
