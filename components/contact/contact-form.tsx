"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="py-24 bg-card">
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
              Send Us a <span className="gold-text-gradient">Message</span>
            </h2>
            <p className="text-muted-foreground">Fill out the form below and we'll respond as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (234) 567-890" className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In</Label>
              <select
                id="service"
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a service</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="implants">Dental Implants</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="surgery">Oral Surgery</option>
                <option value="general">General Dentistry</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your dental needs..."
                rows={5}
                required
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-accent font-medium"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
