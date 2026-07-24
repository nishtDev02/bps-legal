"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview({ locale, t }) {
  return (
    <section className="relative bg-(--color-bg) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* soft radial highlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,75,0.08),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl mx-auto text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 justify-center">
          <span className="h-px w-8 bg-[#E8B84B]" />
          <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
            About
          </span>
          <span className="h-px w-8 bg-[#E8B84B]" />
        </div>

        <h2 className="relative inline-block text-3xl md:text-4xl font-bold leading-tight">
          {t.aboutHeading}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ transformOrigin: "left" }}
            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 w-24 bg-linear-to-r from-[#E8B84B] to-[#C9A227] rounded-full"
          />
        </h2>

        <p className="text-(--color-text-secondary) text-base md:text-lg leading-relaxed pt-2">
          {t.aboutPreview}
        </p>

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
      </motion.div>
    </section>
  );
}
