import type { Metadata } from "next"
import { SpecialHero } from "@/components/special/special-hero"
import { SpecialOffers } from "@/components/special/special-offers"
import { LimitedTimeDeals } from "@/components/special/limited-time-deals"
import { MembershipProgram } from "@/components/special/membership-program"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Special Offers & Promotions | Unity Dental Clinic",
  description:
    "Exclusive dental care promotions and special offers. Save on cosmetic dentistry, dental implants, and more. Limited time deals available.",
}

export default function SpecialPage() {
  return (
    <>
      <SpecialHero />
      <SpecialOffers />
      <LimitedTimeDeals />
      <MembershipProgram />
      <CTA />
    </>
  )
}
