"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "/professional-woman-smiling.png",
    rating: 5,
    text: "Unity Dental transformed my smile completely! The team is professional, caring, and the results exceeded my expectations. I can't stop smiling now!",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/professional-man-smiling.png",
    rating: 5,
    text: "Best dental experience I've ever had. The technology they use is impressive, and the staff made me feel comfortable throughout the entire process.",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/professional-woman-happy.jpg",
    rating: 5,
    text: "From the moment I walked in, I felt welcomed. Dr. Smith and the team are amazing! My dental implants look and feel completely natural.",
  },
]

export function Testimonials() {
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
            What Our Patients <span className="gold-text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 bg-card">
                <CardContent className="p-6 space-y-4">
                  <Quote size={32} className="text-primary/30" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">{testimonial.text}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
