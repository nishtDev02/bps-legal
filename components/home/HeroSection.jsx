"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import HeroCarousel from "../HeroCarousel";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection({ locale, t }) {
  return (
    <section className="relative min-h-screen overflow-hidden text-white px-6 md:px-16 pt-36 pb-16 md:py-32 flex items-center justify-center">
      {/* <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/background-image.jpg')",
          filter: "blur(3px) grayscale(60%) brightness(0.7)", // Added grayscale & brightness tinting
          transform: "scale(1.05)",
        }}
      /> */}
      <HeroCarousel />

      <div className="absolute inset-0 bg-[#1F2A44]/70 pointer-events-none" />
      <div className="absolute inset-0 gold-grid-bg opacity-30 pointer-events-none" />

      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ transformOrigin: "left" }}
        className="absolute top-24 left-0 h-px w-40 bg-linear-to-r from-[#C6A75E] to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        style={{ transformOrigin: "right" }}
        className="absolute bottom-24 right-0 h-px w-56 bg-linear-to-l from-[#C6A75E] to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 flex flex-col items-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white"
          >
            {t.heroHeadline}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {t.heroParagraph}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 pt-2 justify-center w-full sm:w-auto"
          >
            <Link
              href={`/${locale}/contact`}
              style={{
                background: "linear-gradient(135deg, #E0C179 0%, #C6A75E 100%)",
              }}
              className="shine-btn group inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-md shadow-lg shadow-[#C6A75E]/25 bg-[#C6A75E] text-[#1F2A44] border-[1.5px] border-[#C6A75E] hover:bg-[#1F2A44] hover:border-[#C6A75E] hover:text-[#E8DCC8] transition-all duration-300"
            >
              {t.ctaConsultation}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="tel:+919027380268"
              className="btn-secondary-outline group inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-md hover:-translate-y-0.5"
            >
              <Phone
                size={17}
                className="transition-transform group-hover:rotate-12"
              />
              {t.ctaCallNow}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
