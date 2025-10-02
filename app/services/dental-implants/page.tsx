import type { Metadata } from "next"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Dental Implants | Unity Dental Clinic",
  description:
    "Permanent tooth replacement solutions with dental implants. Natural-looking, durable, and functional like your own teeth.",
}

const serviceData = {
  title: "Dental Implants",
  subtitle: "Permanent Tooth Replacement",
  description:
    "Dental implants are the gold standard for replacing missing teeth. Our advanced implant procedures restore both function and aesthetics with results that look, feel, and work like natural teeth.",
  image: "/dental-implant-procedure.png",
  treatments: [
    {
      name: "Single Tooth Implants",
      description:
        "Replace individual missing teeth with a permanent, natural-looking solution that preserves bone health.",
    },
    {
      name: "All-on-4 Implants",
      description:
        "Full arch restoration using just four strategically placed implants for a complete smile transformation.",
    },
    {
      name: "Implant-Supported Bridges",
      description: "Replace multiple missing teeth with a stable, permanent bridge supported by dental implants.",
    },
    {
      name: "Bone Grafting",
      description: "Rebuild bone density to support implants when natural bone loss has occurred.",
    },
  ],
  benefits: [
    "Permanent, long-lasting solution",
    "Natural appearance and function",
    "Preserves jawbone health",
    "No damage to adjacent teeth",
    "Improved chewing and speaking",
    "95% success rate",
  ],
  faqs: [
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care, dental implants can last 25 years or even a lifetime. The crown may need replacement after 10-15 years, but the implant itself is designed to be permanent.",
    },
    {
      question: "Is the implant procedure painful?",
      answer:
        "The procedure is performed under local anesthesia, so you won't feel pain during placement. Most patients report minimal discomfort afterward, manageable with over-the-counter pain medication.",
    },
    {
      question: "How long does the implant process take?",
      answer:
        "The complete process typically takes 3-6 months, allowing time for the implant to integrate with your jawbone. We also offer same-day teeth options for qualifying patients.",
    },
  ],
}

export default function DentalImplantsPage() {
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
