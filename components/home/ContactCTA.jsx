"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function ContactCTA({ locale, t }) {
  return (
    <section className="relative bg-[#1F2A44] px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* dotted gold pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C6A75E 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* floating shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-[#C6A75E]/25 rounded-full float-slow" />
      <div className="absolute -bottom-8 -right-8 w-56 h-56 border-2 border-[#C6A75E]/15 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 justify-center">
          <span className="h-px w-8 bg-[#C6A75E]" />
          <span className="text-[#C6A75E] uppercase tracking-[0.3em] text-xs font-semibold">
            Get In Touch
          </span>
          <span className="h-px w-8 bg-[#C6A75E]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          {t.contactHeading}
        </h2>

        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          {t.contactSubheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={`/${locale}/contact`}
            className="pulse-ring shine-btn btn-primary-gold group inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            {t.ctaConsultation}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="tel:+919027380268"
            className="btn-secondary-outline group inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Phone size={17} className="transition-transform group-hover:rotate-12" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
