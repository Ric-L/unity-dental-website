"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Sparkles size={18} className="text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Premium Dental Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance text-foreground"
            >
              Your Smile, <br />
              <span className="blue-text-gradient relative inline-block">
                Our Passion
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 blue-gradient"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Experience world-class dental care with cutting-edge technology and a team dedicated to creating
              beautiful, healthy smiles that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="blue-gradient text-primary-foreground hover:opacity-90 font-medium group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Calendar size={18} className="mr-2" />
                  Book Appointment
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-foreground hover:bg-primary/10 font-medium bg-transparent transition-all duration-300 hover:scale-105 hover:border-accent group"
                >
                  <Phone size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Call Us Now
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10K+", label: "Happy Patients" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <img
                src="/modern-luxury-dental-clinic-interior-with-gold-acc.jpg"
                alt="Unity Dental Clinic"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-6 right-6 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-12 h-12 rounded-full blue-gradient flex items-center justify-center shadow-lg shadow-primary/30"
                  >
                    <Sparkles size={24} className="text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground">Award Winning</p>
                    <p className="font-semibold text-foreground">Dental Care</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md border border-primary/30 rounded-xl p-6 shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full blue-gradient flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-2xl font-bold text-primary-foreground">24/7</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Emergency Care</p>
                  <p className="font-semibold text-foreground">Always Available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
