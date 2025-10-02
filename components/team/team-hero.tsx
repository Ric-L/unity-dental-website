"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function TeamHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-4">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-foreground">Meet Our Team</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
            Expert Care from <span className="gold-text-gradient">Dedicated Professionals</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our team of board-certified specialists brings decades of combined experience and a passion for creating
            beautiful, healthy smiles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
