"use client"

import { Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Derivados", href: "#servicios" },
    { label: "Deuda", href: "#servicios" },
    { label: "Capital", href: "#servicios" },
    { label: "Estructurados", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contacto@onhedge.com.mx", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">on</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">onhedge</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm mb-6">
              Firma boutique especializada en valuación de instrumentos financieros.
              Soluciones personalizadas con experiencia global.
            </p>
            <p className="text-lg font-semibold">On Risk? Just get Onhedge</p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} onhedge. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Garza García, Nuevo León, México
          </p>
        </div>
      </div>
    </footer>
  )
}
