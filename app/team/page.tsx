import type { Metadata } from "next"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { JoinTeam } from "@/components/team/join-team"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Our Team | Unity Dental Clinic",
  description:
    "Meet our experienced team of dental professionals. Board-certified specialists dedicated to providing exceptional care.",
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <JoinTeam />
      <CTA />
    </>
  )
}
