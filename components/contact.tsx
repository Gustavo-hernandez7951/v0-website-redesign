"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Garza García, Nuevo León, México",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 (81) 1234-5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@onhedge.com.mx",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes, 9:00 - 18:00",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Hablemos de su proyecto
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Estamos listos para ayudarle. Contáctenos para discutir sus necesidades
            de valuación y cómo podemos apoyarle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl bg-muted overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Garza García, N.L.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-muted-foreground">
                    Nos pondremos en contacto con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        placeholder="Su nombre"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        placeholder="Nombre de su empresa"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="correo@empresa.com"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+52 (81) 1234-5678"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de Interés</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="derivados">Valuación de Derivados</option>
                      <option value="deuda">Instrumentos de Deuda</option>
                      <option value="capital">Instrumentos de Capital</option>
                      <option value="estructurados">Productos Estructurados</option>
                      <option value="regulatorio">Reportes Regulatorios</option>
                      <option value="asesoria">Asesoría Especializada</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Cuéntenos sobre su proyecto..."
                      required
                      className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 rounded border-input"
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal">
                      He leído y acepto la{" "}
                      <a href="#" className="text-primary hover:underline">
                        política de privacidad
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full gap-2">
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
