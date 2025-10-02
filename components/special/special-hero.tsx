"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"

export function SpecialHero() {
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
            <Gift size={16} className="text-primary" />
            <span className="text-sm text-foreground">Limited Time Offers</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
            Exclusive <span className="gold-text-gradient">Special Offers</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Take advantage of our premium dental services at exceptional value. Limited time promotions designed to make
            your dream smile more affordable.
          </p>

          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">Up to 30%</p>
              <p className="text-sm text-muted-foreground">Off Select Services</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">$0</p>
              <p className="text-sm text-muted-foreground">Consultation Fee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
