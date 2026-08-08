"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview({ locale, t }) {
  return (
    <section className="relative bg-(--color-bg) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* soft radial highlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,75,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full"
        >
          {/* Decorative Gold Accent Frame */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#E8B84B]/30 rounded-2xl pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#E8B84B] rounded-2xl pointer-events-none" />

          {/* Photo Box Container */}
          <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-(--color-bg-secondary) border border-[#E8B84B]/20 shadow-2xl">
            <Image
              src="/images/advocate-photo.jpeg" // CHANGE THIS TO YOUR IMAGE PATH
              alt="Profile Photo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#E8B84B]" />
            <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
              About
            </span>
          </div>

          <h2 className="relative inline-block text-3xl md:text-4xl font-bold leading-tight text-(--color-text)">
            {t.aboutHeading}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
              className="absolute -bottom-2 left-0 h-1 w-24 bg-linear-to-r from-[#E8B84B] to-[#C9A227] rounded-full"
            />
          </h2>

          <p className="text-(--color-text-secondary) text-base md:text-lg leading-relaxed pt-2">
            {t.aboutPreview}
          </p>

          <div>
            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center gap-2 text-[#E8B84B] font-semibold pt-2"
            >
              <span className="relative">
                {t.aboutCta}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#E8B84B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}