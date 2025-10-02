"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

export function LimitedTimeDeals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 34,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary/50 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm text-foreground">Flash Sale</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">
                  Weekend <span className="gold-text-gradient">Flash Sale</span>
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get 50% off on teeth whitening and 30% off on dental cleanings. This weekend only!
                </p>

                <div className="flex justify-center gap-4 py-8">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-primary-foreground">{value}</span>
                      </div>
                      <span className="text-sm text-muted-foreground capitalize">{unit}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-medium group">
                  Book Now & Save
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  *Offer valid for appointments booked and completed this weekend. Cannot be combined with other offers.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
