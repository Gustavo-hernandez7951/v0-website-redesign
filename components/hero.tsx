"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              <span>Firma boutique especializada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Valuación de{" "}
              <span className="text-primary">Instrumentos Financieros</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Soluciones personalizadas con experiencia global. Socios dedicados que
              entienden la complejidad de sus necesidades financieras.
            </p>

            <p className="mt-4 text-2xl font-semibold text-accent">
              On Risk? Just get Onhedge
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                <a href="#contacto">
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#servicios">Conocer Servicios</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">+15</p>
                  <p className="text-sm text-muted-foreground">Años de Experiencia</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Trayectoria comprobada en mercados financieros nacionales e internacionales
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Confidencialidad</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">+500</p>
              <p className="text-sm text-muted-foreground">Proyectos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
