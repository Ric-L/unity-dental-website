"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function JoinTeam() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-background to-card border border-primary/20 p-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary mb-4">
                <Users size={32} className="text-primary-foreground" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
                Join Our <span className="gold-text-gradient">Team</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're always looking for talented dental professionals who share our commitment to excellence and
                patient care. Explore career opportunities at Unity Dental.
              </p>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-medium group">
                View Open Positions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
