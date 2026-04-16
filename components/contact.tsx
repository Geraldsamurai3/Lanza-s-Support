"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MessageCircle, Clock } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error ?? 'Error al enviar el mensaje')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el mensaje')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              ¿Listo para resolver tu problema tecnológico?
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Contáctanos y te ayudaremos a encontrar la mejor solución para tus necesidades.
              Respuesta rápida garantizada.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="https://wa.me/50686979541"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-green-500 transition-colors">WhatsApp</p>
                  <p className="mt-1 text-muted-foreground">+506 8697 9541</p>
                  <p className="text-sm text-green-500">Click para chatear</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="mt-1 text-muted-foreground">andreylanza3@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario de Atención</p>
                  <p className="mt-1 text-muted-foreground">Todos los días</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-semibold text-foreground mb-4">Síguenos en redes sociales</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/lanzasupport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">¡Mensaje Enviado!</h3>
                <p className="mt-2 text-muted-foreground">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <Button className="mt-6" onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu teléfono"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-md border border-input bg-input px-3 py-2 text-foreground"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="repair">Servicio Técnico</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="blog">Blog / Sitio Informativo</option>
                    <option value="enterprise">Plan Empresarial</option>
                    <option value="helpdesk">Soporte Remoto</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu problema o necesidad..."
                    rows={4}
                    required
                    className="mt-2"
                  />
                </div>

                {error && (
                  <p className="rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
