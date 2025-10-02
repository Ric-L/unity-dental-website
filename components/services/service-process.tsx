"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, FileText, Stethoscope, Smile } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book your initial appointment online or by phone at your convenience.",
  },
  {
    icon: FileText,
    title: "Comprehensive Exam",
    description: "We conduct a thorough examination and discuss your goals and concerns.",
  },
  {
    icon: Stethoscope,
    title: "Personalized Treatment",
    description: "Receive customized care tailored to your specific needs and preferences.",
  },
  {
    icon: Smile,
    title: "Enjoy Your Smile",
    description: "Experience the confidence that comes with a healthy, beautiful smile.",
  },
]

export function ServiceProcess() {
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
            Your Journey to a <span className="gold-text-gradient">Perfect Smile</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our streamlined process ensures you receive exceptional care every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center space-y-4"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary relative z-10">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground pt-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
