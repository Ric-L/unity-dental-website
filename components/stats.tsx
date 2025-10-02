"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Patients",
    description: "Trusted by thousands",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Exceptional results",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Care",
    description: "Always available",
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, oklch(0.75 0.15 85) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center space-y-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-primary group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500"
                >
                  <Icon size={32} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
