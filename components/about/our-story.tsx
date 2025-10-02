"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function OurStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
              Our <span className="gold-text-gradient">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Unity Dental Clinic was founded in 2009 with a simple yet powerful vision: to provide world-class dental
                care that combines advanced technology with genuine compassion and personalized attention.
              </p>
              <p>
                What started as a small practice has grown into a comprehensive dental center, serving thousands of
                patients and building lasting relationships based on trust, excellence, and exceptional results.
              </p>
              <p>
                Today, we continue to invest in the latest dental technologies and ongoing education for our team,
                ensuring that every patient receives the highest standard of care in a comfortable, welcoming
                environment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img
                src="/modern-luxury-dental-clinic-interior-with-gold-acc.jpg"
                alt="Unity Dental Clinic Interior"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
