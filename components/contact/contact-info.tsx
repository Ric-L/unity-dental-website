"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    action: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@unitydental.com", "appointments@unitydental.com"],
    action: "mailto:info@unitydental.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Dental Street", "Medical District, NY 10001"],
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
    action: null,
  },
]

export function ContactInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Contact <span className="gold-text-gradient">Information</span>
            </h2>
            <p className="text-muted-foreground">Reach out to us through any of these channels.</p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{detail.title}</h3>
                    {detail.details.map((line, i) => (
                      <p key={i} className="text-muted-foreground">
                        {detail.action && i === 0 ? (
                          <a href={detail.action} className="hover:text-primary transition-colors">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Emergency Care</h3>
            <p className="text-muted-foreground mb-4">
              For dental emergencies outside of business hours, please call our emergency line:
            </p>
            <a href="tel:+1234567899" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
              +1 (234) 567-899
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
