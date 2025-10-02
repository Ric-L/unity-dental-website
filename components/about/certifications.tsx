"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, CheckCircle } from "lucide-react"

const certifications = [
  "American Dental Association (ADA) Member",
  "Academy of General Dentistry (AGD) Fellow",
  "International Congress of Oral Implantologists (ICOI)",
  "American Academy of Cosmetic Dentistry (AACD)",
  "Board Certified in Oral & Maxillofacial Surgery",
  "Invisalign Platinum Provider",
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary mb-6">
            <Award size={32} className="text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Certifications & <span className="gold-text-gradient">Memberships</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to excellence is reflected in our professional affiliations and certifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
