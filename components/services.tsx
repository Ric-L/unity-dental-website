"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic treatments including veneers, whitening, and smile makeovers.",
    image: "/cosmetic-dentistry-teeth-whitening.jpg",
    href: "/services/cosmetic-dentistry",
    features: ["Teeth Whitening", "Veneers", "Smile Makeover"],
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    image: "/dental-implant-procedure.png",
    href: "/services/dental-implants",
    features: ["Single Implants", "Full Arch", "Same-Day Teeth"],
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions including Invisalign and traditional braces.",
    image: "/orthodontic-braces-invisalign.jpg",
    href: "/services/orthodontics",
    features: ["Invisalign", "Braces", "Retainers"],
  },
  {
    title: "Oral & Maxillofacial Surgery",
    description: "Expert surgical care for complex dental conditions, wisdom teeth, and jaw procedures.",
    image: "/oral-surgery-dental-procedure.jpg",
    href: "/services/oral-surgery",
    features: ["Wisdom Teeth", "Jaw Surgery", "Extractions"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-foreground">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Comprehensive Dental <span className="gold-text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From routine care to advanced procedures, we offer a full range of dental services to meet all your oral
            health needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-accent hover:bg-primary/10 p-0 h-auto font-medium group/btn transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300"
                      />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
