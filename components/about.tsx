"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Globe, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description:
      "Cada proyecto es único. Desarrollamos soluciones a medida que se adaptan perfectamente a sus necesidades específicas.",
  },
  {
    icon: Users,
    title: "Socios Dedicados",
    description:
      "Trabaje directamente con expertos senior que entienden la complejidad de los mercados financieros.",
  },
  {
    icon: Globe,
    title: "Experiencia Global",
    description:
      "Conocimiento profundo de mercados internacionales y regulaciones locales para una visión completa.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    description:
      "Metodologías actualizadas y tecnología de punta para resultados precisos y confiables.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Sobre Nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Una firma boutique con visión global
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Somos especialistas en valuación de instrumentos financieros, combinando
            expertise técnico con un profundo entendimiento de las necesidades de
            nuestros clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
