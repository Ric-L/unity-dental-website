import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurValues } from "@/components/about/our-values"
import { Certifications } from "@/components/about/certifications"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "About Us | Unity Dental Clinic",
  description:
    "Learn about Unity Dental Clinic's commitment to excellence in dental care. Meet our experienced team and discover our state-of-the-art facility.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
      <Certifications />
      <CTA />
    </>
  )
}
