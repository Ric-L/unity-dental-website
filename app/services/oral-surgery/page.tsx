import type { Metadata } from "next"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Oral & Maxillofacial Surgery | Unity Dental Clinic",
  description:
    "Expert oral surgery including wisdom teeth removal, jaw surgery, and complex extractions. Board-certified surgeons.",
}

const serviceData = {
  title: "Oral & Maxillofacial Surgery",
  subtitle: "Expert Surgical Care",
  description:
    "Our board-certified oral surgeons provide advanced surgical treatments for complex dental conditions, using the latest techniques and technology for optimal outcomes and patient comfort.",
  image: "/oral-surgery-dental-procedure.jpg",
  treatments: [
    {
      name: "Wisdom Teeth Removal",
      description: "Safe, comfortable extraction of impacted or problematic wisdom teeth with minimal recovery time.",
    },
    {
      name: "Corrective Jaw Surgery",
      description: "Surgical correction of jaw misalignment to improve function, breathing, and facial aesthetics.",
    },
    {
      name: "Complex Extractions",
      description: "Removal of damaged or problematic teeth that require surgical intervention.",
    },
    {
      name: "Bone Grafting",
      description: "Rebuilding bone structure to support dental implants or improve facial contours.",
    },
  ],
  benefits: [
    "Board-certified surgeons",
    "Advanced surgical techniques",
    "Sedation options available",
    "Minimal recovery time",
    "Comprehensive aftercare",
    "State-of-the-art facility",
  ],
  faqs: [
    {
      question: "When should wisdom teeth be removed?",
      answer:
        "Wisdom teeth should be removed if they're impacted, causing pain, crowding other teeth, or at risk for infection. We typically recommend removal in late teens or early twenties for easier recovery.",
    },
    {
      question: "What sedation options are available?",
      answer:
        "We offer local anesthesia, nitrous oxide (laughing gas), oral sedation, and IV sedation. Your surgeon will recommend the best option based on the procedure and your comfort level.",
    },
    {
      question: "How long is recovery after oral surgery?",
      answer:
        "Recovery varies by procedure. Most patients return to normal activities within 3-7 days. We provide detailed post-operative instructions and are available 24/7 for any concerns.",
    },
  ],
}

export default function OralSurgeryPage() {
  return (
    <>
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.description}
        image={serviceData.image}
      />
      <ServiceDetails treatments={serviceData.treatments} />
      <ServiceBenefits benefits={serviceData.benefits} />
      <ServiceFAQ faqs={serviceData.faqs} />
      <CTA />
    </>
  )
}
