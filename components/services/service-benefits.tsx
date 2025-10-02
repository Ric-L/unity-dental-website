"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

interface ServiceBenefitsProps {
  benefits: string[]
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Key <span className="gold-text-gradient">Benefits</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the advantages of choosing our advanced treatment options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Sparkles size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
