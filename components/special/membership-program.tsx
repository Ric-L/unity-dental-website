"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Crown } from "lucide-react"

const plans = [
  {
    name: "Individual Plan",
    price: "$299",
    period: "per year",
    features: [
      "2 Routine Cleanings",
      "2 Comprehensive Exams",
      "All Necessary X-Rays",
      "20% Off All Treatments",
      "Emergency Care Priority",
      "No Waiting Periods",
    ],
    popular: false,
  },
  {
    name: "Family Plan",
    price: "$799",
    period: "per year",
    features: [
      "Up to 4 Family Members",
      "2 Cleanings Per Person",
      "2 Exams Per Person",
      "All Necessary X-Rays",
      "25% Off All Treatments",
      "Emergency Care Priority",
      "No Waiting Periods",
      "Free Fluoride Treatments",
    ],
    popular: true,
  },
]

export function MembershipProgram() {
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
            <Crown size={32} className="text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Membership <span className="gold-text-gradient">Program</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Save more with our exclusive membership plans. Perfect for individuals and families without dental
            insurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full border-border hover:border-primary/50 transition-all duration-300 bg-background relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full font-medium ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-accent"
                        : "bg-secondary text-foreground hover:bg-primary/10 border border-primary"
                    }`}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Questions about our membership program?{" "}
            <a href="/contact" className="text-primary hover:text-accent font-semibold">
              Contact us
            </a>{" "}
            for more information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
