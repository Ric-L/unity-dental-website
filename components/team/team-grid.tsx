"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "DDS, FAGD",
    specialty: "Cosmetic Dentistry & Prosthodontics",
    image: "/professional-female-dentist-portrait.jpg",
    bio: "Dr. Mitchell is a Fellow of the Academy of General Dentistry with over 15 years of experience in cosmetic dentistry. She specializes in smile makeovers, veneers, and full-mouth reconstructions.",
    education: ["DDS - Harvard School of Dental Medicine", "Fellowship - Academy of General Dentistry"],
    certifications: ["AACD Accredited Member", "Invisalign Platinum Provider"],
    email: "s.mitchell@unitydental.com",
    linkedin: "#",
  },
  {
    name: "Dr. James Chen",
    title: "DMD, MS",
    specialty: "Oral & Maxillofacial Surgery",
    image: "/professional-male-dentist-portrait.jpg",
    bio: "Dr. Chen is a board-certified oral surgeon with expertise in dental implants, wisdom teeth extraction, and corrective jaw surgery. He completed his residency at Johns Hopkins Hospital.",
    education: ["DMD - University of Pennsylvania", "MS - Johns Hopkins Hospital"],
    certifications: ["Board Certified Oral Surgeon", "ICOI Diplomate"],
    email: "j.chen@unitydental.com",
    linkedin: "#",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "DDS, MS",
    specialty: "Orthodontics",
    image: "/professional-female-orthodontist-portrait.jpg",
    bio: "Dr. Rodriguez is a certified orthodontist specializing in Invisalign and traditional braces for patients of all ages. She has transformed over 2,000 smiles throughout her career.",
    education: ["DDS - Columbia University", "MS Orthodontics - NYU College of Dentistry"],
    certifications: ["American Board of Orthodontics", "Invisalign Diamond Provider"],
    email: "e.rodriguez@unitydental.com",
    linkedin: "#",
  },
  {
    name: "Dr. Michael Thompson",
    title: "DDS, FICOI",
    specialty: "Implantology & Periodontics",
    image: "/professional-male-periodontist-portrait.jpg",
    bio: "Dr. Thompson is a Fellow of the International Congress of Oral Implantologists, specializing in dental implants and periodontal surgery. He has placed over 5,000 successful implants.",
    education: ["DDS - UCLA School of Dentistry", "Residency - University of Michigan"],
    certifications: ["FICOI Fellow", "Board Certified Periodontist"],
    email: "m.thompson@unitydental.com",
    linkedin: "#",
  },
]

export function TeamGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 bg-background h-full">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{doctor.name}</h3>
                    <p className="text-sm text-primary font-semibold">{doctor.title}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{doctor.specialty}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{doctor.bio}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Education</h5>
                    <ul className="space-y-1">
                      {doctor.education.map((edu, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Certifications</h5>
                    <div className="flex flex-wrap gap-2">
                      {doctor.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-primary/20"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-foreground hover:bg-primary/10 bg-transparent"
                    >
                      <Mail size={16} className="mr-2" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-foreground hover:bg-primary/10 bg-transparent"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
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
