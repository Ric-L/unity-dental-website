"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
}

export function ServiceHero({ title, subtitle, description, image }: ServiceHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-foreground">Specialty Service</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance mb-4">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl font-serif text-primary mb-6">{subtitle}</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-medium group">
                Schedule Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 font-medium bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
