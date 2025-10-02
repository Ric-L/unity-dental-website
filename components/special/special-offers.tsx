"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

const offers = [
  {
    title: "New Patient Special",
    discount: "FREE",
    description: "Comprehensive exam, X-rays, and consultation",
    originalPrice: "$299",
    savings: "Save $299",
    terms: "For new patients only. Cannot be combined with insurance.",
  },
  {
    title: "Teeth Whitening Package",
    discount: "40% OFF",
    description: "Professional in-office whitening treatment",
    originalPrice: "$599",
    newPrice: "$359",
    savings: "Save $240",
    terms: "Limited time offer. Includes take-home maintenance kit.",
  },
  {
    title: "Invisalign Special",
    discount: "$1,000 OFF",
    description: "Complete Invisalign treatment package",
    originalPrice: "$5,500",
    newPrice: "$4,500",
    savings: "Save $1,000",
    terms: "Includes all aligners, retainers, and follow-up visits.",
  },
  {
    title: "Dental Implant Promotion",
    discount: "20% OFF",
    description: "Single tooth implant with crown",
    originalPrice: "$4,000",
    newPrice: "$3,200",
    savings: "Save $800",
    terms: "Includes implant, abutment, and crown. Financing available.",
  },
]

export function SpecialOffers() {
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
            Current <span className="gold-text-gradient">Promotions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take advantage of these exclusive offers and start your journey to a perfect smile today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 bg-background relative overflow-hidden group">
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm">
                  {offer.discount}
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Sparkles size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground">{offer.description}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 py-4 border-y border-border">
                    {offer.newPrice ? (
                      <>
                        <span className="text-3xl font-bold text-primary">{offer.newPrice}</span>
                        <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-primary">{offer.discount}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent">{offer.savings}</p>
                    <p className="text-xs text-muted-foreground">{offer.terms}</p>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-medium group/btn">
                    Claim This Offer
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
