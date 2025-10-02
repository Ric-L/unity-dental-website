import type { Metadata } from "next"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Orthodontics | Unity Dental Clinic",
  description:
    "Straighten your teeth with Invisalign clear aligners or traditional braces. Expert orthodontic care for all ages.",
}

const serviceData = {
  title: "Orthodontics",
  subtitle: "Straighten Your Smile",
  description:
    "Our orthodontic treatments use the latest technology to straighten teeth, correct bite issues, and create beautiful, healthy smiles for patients of all ages.",
  image: "/orthodontic-braces-invisalign.jpg",
  treatments: [
    {
      name: "Invisalign Clear Aligners",
      description: "Virtually invisible aligners that straighten teeth without metal brackets or wires.",
    },
    {
      name: "Traditional Braces",
      description: "Time-tested metal braces that effectively correct even complex orthodontic issues.",
    },
    {
      name: "Ceramic Braces",
      description: "Tooth-colored braces that blend with your natural teeth for a more discreet appearance.",
    },
    {
      name: "Retainers",
      description: "Custom retainers to maintain your beautiful new smile after orthodontic treatment.",
    },
  ],
  benefits: [
    "Improved bite and jaw alignment",
    "Enhanced facial aesthetics",
    "Easier cleaning and maintenance",
    "Reduced risk of tooth damage",
    "Boosted confidence",
    "Treatment options for all ages",
  ],
  faqs: [
    {
      question: "How long does orthodontic treatment take?",
      answer:
        "Treatment duration varies based on complexity, typically ranging from 12-24 months. Invisalign cases often complete faster, while complex cases may take longer.",
    },
    {
      question: "Am I too old for braces?",
      answer:
        "You're never too old! We successfully treat patients of all ages. Adult orthodontics is increasingly common, with many discreet options like Invisalign available.",
    },
    {
      question: "How much do braces or Invisalign cost?",
      answer:
        "Costs vary based on treatment complexity and duration. We offer free consultations to assess your needs and provide accurate pricing. Flexible payment plans are available.",
    },
  ],
}

export default function OrthodonticsPage() {
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
