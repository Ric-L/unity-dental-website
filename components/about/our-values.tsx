"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Shield, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    description: "We maintain the highest standards of dental care through continuous learning and innovation.",
  },
  {
    icon: Users,
    title: "Patient Partnership",
    description: "We believe in collaborative care, involving patients in every decision about their treatment.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge technology and techniques to deliver superior results.",
  },
]

export function OurValues() {
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
            Our Core <span className="gold-text-gradient">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These principles guide everything we do and shape the exceptional care we provide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
