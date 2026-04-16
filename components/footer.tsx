import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  servicios: [
    { name: "Servicio Técnico", href: "#servicios" },
    { name: "Desarrollo Web", href: "#servicios" },
    { name: "Planes Empresariales", href: "#empresas" },
    { name: "Soporte Remoto", href: "#contacto" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Contacto", href: "#contacto" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Privacidad", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Lanza.png" alt="Lanza's Support" width={80} height={80} className="rounded-lg" />
              <span className="text-xl font-bold text-foreground">
                Lanza&apos;s Support
              </span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tu aliado tecnológico de confianza. Servicio técnico profesional, desarrollo web y soporte remoto para particulares y empresas.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              📍 Santa Cruz, Guanacaste, Costa Rica
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lanza&apos;s Support. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
