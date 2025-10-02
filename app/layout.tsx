import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Unity Dental Clinic | Premium Dental Care & Cosmetic Dentistry",
  description:
    "Experience world-class dental care at Unity Dental Clinic. Specializing in cosmetic dentistry, dental implants, orthodontics, and oral surgery with state-of-the-art technology.",
  keywords:
    "dental clinic, cosmetic dentistry, dental implants, orthodontics, oral surgery, teeth whitening, dental care",
  openGraph: {
    title: "Unity Dental Clinic | Premium Dental Care",
    description: "Experience world-class dental care with our expert team",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
