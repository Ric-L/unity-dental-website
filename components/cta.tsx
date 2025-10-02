"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance">
            Ready to Transform Your <span className="gold-text-gradient">Smile?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards a healthier, more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-medium group">
              Book Your Appointment
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 font-medium bg-transparent"
            >
              <Phone size={18} className="mr-2" />
              Call Us Now
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Or call us at{" "}
            <a href="tel:+1234567890" className="text-primary hover:text-accent font-semibold">
              +1 (234) 567-890
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
