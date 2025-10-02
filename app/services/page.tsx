import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceProcess } from "@/components/services/service-process"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Our Services | Unity Dental Clinic",
  description:
    "Comprehensive dental services including cosmetic dentistry, dental implants, orthodontics, and oral surgery. Advanced care for all your dental needs.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <CTA />
    </>
  )
}
