"use client";

import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Visit Our <span className="gold-text-gradient">Clinic</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Located in the heart of the Medical District, our state-of-the-art facility is easily accessible.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-2xl h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3860.0670165729553!2d93.95407052297949!3d24.80500480942269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749277753f8b9a3%3A0xa662d1094b0e152d!2sUnity%20dental%20clinic!5e0!3m2!1sen!2sin!4v1759416806206!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185492346468!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704901234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Unity Dental Clinic Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
