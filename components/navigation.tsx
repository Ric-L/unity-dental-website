"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Oral & Maxillofacial Surgery",
    href: "/services/oral-surgery",
    description: "Advanced surgical procedures for complex dental conditions",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic-dentistry",
    description: "Transform your smile with our aesthetic treatments",
  },
  {
    title: "Dental Implants",
    href: "/services/dental-implants",
    description: "Permanent tooth replacement solutions",
  },
  {
    title: "Orthodontics",
    href: "/services/orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions",
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full blue-gradient flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-primary/20">
              <span className="text-2xl font-bold text-primary-foreground">U</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Unity Dental
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Oral Maxillofacial Surgery Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary transition-all duration-300">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 bg-card border border-border shadow-xl">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary hover:translate-x-2"
                            >
                              <div className="text-sm font-medium leading-none text-foreground">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/team"
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Our Team
            </Link>
            <Link
              href="/special"
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Special Offers
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button className="blue-gradient text-primary-foreground hover:opacity-90 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-muted-foreground">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-sm text-foreground hover:text-primary transition-colors py-2 pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/team"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/special"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Special Offers
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-accent font-medium mt-4">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
