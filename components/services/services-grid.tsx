"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smile, Sparkles, Stethoscope, Scissors, Shield, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, bonding, and complete smile makeovers.",
    href: "/services/cosmetic-dentistry",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeover", "Bonding"],
  },
  {
    icon: Stethoscope,
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
    href: "/services/dental-implants",
    features: ["Single Implants", "Full Arch Restoration", "All-on-4", "Bone Grafting"],
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Straighten your teeth with Invisalign, traditional braces, and modern orthodontic solutions.",
    href: "/services/orthodontics",
    features: ["Invisalign", "Traditional Braces", "Clear Aligners", "Retainers"],
  },
  {
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    description: "Expert surgical care for wisdom teeth, jaw surgery, and complex dental procedures.",
    href: "/services/oral-surgery",
    features: ["Wisdom Teeth Removal", "Jaw Surgery", "Extractions", "Bone Grafting"],
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Regular checkups, cleanings, and preventive treatments to maintain optimal oral health.",
    href: "/services",
    features: ["Dental Cleanings", "Exams", "X-Rays", "Fluoride Treatment"],
  },
  {
    icon: Zap,
    title: "Emergency Dental Care",
    description: "Immediate care for dental emergencies, available 24/7 for urgent situations.",
    href: "/contact",
    features: ["24/7 Availability", "Pain Relief", "Urgent Care", "Same-Day Treatment"],
  },
]

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group border-border hover:border-primary/50 transition-all duration-300 bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link href={service.href}>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-accent hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
