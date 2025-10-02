import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-foreground">Unity Dental</span>
                <span className="text-xs text-muted-foreground tracking-wider">PREMIUM CARE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience world-class dental care with our expert team. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <Facebook size={18} className="text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <Instagram size={18} className="text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <Twitter size={18} className="text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
              >
                <Linkedin size={18} className="text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/special" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-implants"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orthodontics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/oral-surgery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Oral Surgery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">123 Dental Street, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@unitydental.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@unitydental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Unity Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
