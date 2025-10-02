import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us | Unity Dental Clinic",
  description:
    "Get in touch with Unity Dental Clinic. Schedule an appointment, ask questions, or visit our office. We're here to help with all your dental needs.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <MapSection />
    </>
  )
}
