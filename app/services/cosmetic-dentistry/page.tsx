import type { Metadata } from "next"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Unity Dental Clinic",
  description:
    "Transform your smile with our advanced cosmetic dentistry services including veneers, teeth whitening, and complete smile makeovers.",
}

const serviceData = {
  title: "Cosmetic Dentistry",
  subtitle: "Transform Your Smile",
  description:
    "Our cosmetic dentistry services combine artistry with advanced dental techniques to create beautiful, natural-looking smiles that boost your confidence.",
  image: "/cosmetic-dentistry-teeth-whitening.jpg",
  treatments: [
    {
      name: "Teeth Whitening",
      description:
        "Professional whitening treatments that brighten your smile by several shades safely and effectively.",
    },
    {
      name: "Porcelain Veneers",
      description: "Custom-crafted veneers that correct imperfections and create a flawless, natural-looking smile.",
    },
    {
      name: "Dental Bonding",
      description: "Quick and affordable solution to repair chips, cracks, and gaps in your teeth.",
    },
    {
      name: "Smile Makeover",
      description: "Comprehensive treatment plan combining multiple procedures for a complete smile transformation.",
    },
  ],
  benefits: [
    "Enhanced confidence and self-esteem",
    "Natural-looking, beautiful results",
    "Long-lasting improvements",
    "Minimally invasive procedures",
    "Customized treatment plans",
    "State-of-the-art technology",
  ],
  faqs: [
    {
      question: "How long do cosmetic dentistry results last?",
      answer:
        "Results vary by treatment. Teeth whitening lasts 1-3 years with proper care, while veneers can last 10-15 years or more. We provide detailed care instructions to maximize longevity.",
    },
    {
      question: "Is cosmetic dentistry painful?",
      answer:
        "Most cosmetic procedures are minimally invasive and cause little to no discomfort. We use local anesthesia when needed and offer sedation options for anxious patients.",
    },
    {
      question: "How much does a smile makeover cost?",
      answer:
        "Costs vary based on your specific needs and chosen treatments. We offer free consultations to assess your goals and provide detailed pricing. Financing options are available.",
    },
  ],
}

export default function CosmeticDentistryPage() {
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
