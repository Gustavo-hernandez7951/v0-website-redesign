"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  LineChart,
  BarChart3,
  PieChart,
  Calculator,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: LineChart,
    title: "Valuación de Derivados",
    description:
      "Forwards, futuros, opciones, swaps y derivados exóticos. Modelos avanzados para una valuación precisa.",
    features: ["Opciones plain vanilla y exóticas", "Swaps de tasas y divisas", "Derivados de crédito"],
  },
  {
    icon: BarChart3,
    title: "Instrumentos de Deuda",
    description:
      "Bonos, certificados bursátiles y estructuras complejas de deuda con análisis de riesgo integral.",
    features: ["Bonos corporativos y soberanos", "Papel comercial", "Obligaciones subordinadas"],
  },
  {
    icon: PieChart,
    title: "Instrumentos de Capital",
    description:
      "Acciones, certificados de participación y estructuras de equity para una visión completa.",
    features: ["Valuación de acciones", "Warrants y derechos", "Instrumentos híbridos"],
  },
  {
    icon: Calculator,
    title: "Productos Estructurados",
    description:
      "Notas estructuradas, CLOs, CDOs y otros instrumentos complejos con metodologías robustas.",
    features: ["Notas ligadas a índices", "Productos de capital protegido", "Estructuras a medida"],
  },
  {
    icon: FileText,
    title: "Reportes Regulatorios",
    description:
      "Documentación y reportes que cumplen con los estándares regulatorios nacionales e internacionales.",
    features: ["IFRS 9 y IFRS 13", "US GAAP", "Normativa local CNBV"],
  },
  {
    icon: Building2,
    title: "Asesoría Especializada",
    description:
      "Consultoría en gestión de riesgos, estrategias de cobertura y optimización de portafolios.",
    features: ["Diseño de coberturas", "Análisis de sensibilidad", "Stress testing"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Soluciones integrales en valuación
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Ofrecemos una gama completa de servicios de valuación para todo tipo de
            instrumentos financieros, respaldados por metodologías de clase mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/0 group-hover:bg-primary rounded-t-2xl transition-colors" />
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
            <a href="#contacto">
              Solicitar Información
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
