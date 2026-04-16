import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(30),
  email: z.string().email().max(200),
  service: z.enum(['repair', 'web', 'blog', 'enterprise', 'helpdesk', 'other']),
  message: z.string().min(1).max(2000),
})

const SERVICE_LABELS: Record<string, string> = {
  repair: 'Servicio Técnico',
  web: 'Desarrollo Web',
  blog: 'Blog / Sitio Informativo',
  enterprise: 'Plan Empresarial',
  helpdesk: 'Soporte Remoto',
  other: 'Otro',
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 422 })
  }

  const { name, phone, email, service, message } = parsed.data
  const serviceLabel = SERVICE_LABELS[service]

  const { error } = await resend.emails.send({
    from: 'Formulario Web <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL ?? 'contacto@lanzassupport.com',
    replyTo: email,
    subject: `Nuevo contacto: ${serviceLabel} — ${name}`,
    html: `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        <tr><td><strong>Nombre:</strong></td><td>${name}</td></tr>
        <tr><td><strong>Teléfono:</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>Servicio:</strong></td><td>${serviceLabel}</td></tr>
        <tr><td><strong>Mensaje:</strong></td><td style="white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  })

  if (error) {
    console.error('[contact] Resend error:', error)
    return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
