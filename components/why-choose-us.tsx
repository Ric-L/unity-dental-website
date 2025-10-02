"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Heart, Zap, Award, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and cutting-edge techniques for optimal results.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your comfort and satisfaction are our top priorities in every treatment.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Streamlined processes and same-day treatments when possible.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Highly qualified specialists with years of experience and training.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Comprehensive care for patients of all ages in a welcoming environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times including evenings and weekends.",
  },
]

export function WhyChooseUs() {
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
            Why Choose <span className="gold-text-gradient">Unity Dental</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine expertise, technology, and compassionate care to deliver exceptional dental experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
