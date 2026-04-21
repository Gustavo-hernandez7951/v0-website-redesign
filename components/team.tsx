"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Carlos Mendoza",
    role: "Socio Director",
    bio: "MBA por IPADE, +20 años de experiencia en mercados financieros. Ex Director de Derivados en institución financiera líder.",
    image: "/team/carlos.jpg",
  },
  {
    name: "Ana Sofía Reyes",
    role: "Socia - Valuación",
    bio: "PhD en Finanzas Cuantitativas por MIT. Especialista en modelos de valuación y gestión de riesgos.",
    image: "/team/ana.jpg",
  },
  {
    name: "Roberto García",
    role: "Socio - Regulatorio",
    bio: "CFA Charterholder, +15 años en cumplimiento regulatorio. Experto en IFRS y normativa CNBV.",
    image: "/team/roberto.jpg",
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="equipo" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Nuestro Equipo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Expertos a su servicio
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Un equipo de profesionales con experiencia internacional y profundo
            conocimiento de los mercados financieros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
                {/* Placeholder for team photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a
                    href="#contacto"
                    className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
