"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface Treatment {
  name: string
  description: string
}

interface ServiceDetailsProps {
  treatments: Treatment[]
}

export function ServiceDetails({ treatments }: ServiceDetailsProps) {
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Treatment <span className="gold-text-gradient">Options</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a comprehensive range of treatments tailored to your specific needs and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{treatment.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
