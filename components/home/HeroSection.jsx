"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSubtitle from "../HeroSubtitle";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection({ locale, t }) {
  return (
    <section className="relative overflow-hidden bg-(--color-bg-secondary) text-(--color-text) px-6 md:px-16 py-20 md:py-28">
      {/* Ghosted background image */}
      <div
        className="absolute inset-0 opacity-[0.12] grayscale bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/background-image.jpg')" }}
      />
      {/* Animated gold grid overlay */}
      <div className="absolute inset-0 gold-grid-bg opacity-40 pointer-events-none" />

      {/* Decorative diagonal gold lines */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-16 left-0 h-px w-40 bg-linear-to-r from-[#E8B84B] to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
        className="absolute bottom-16 right-0 h-px w-56 bg-linear-to-l from-[#E8B84B] to-transparent"
      />

      {/* Vertical tag */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 vertical-tag text-[10px] text-(--color-accent)/70 font-semibold">
        EST · TRUST · JUSTICE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* CONTENT — 7 cols */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7 space-y-5"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#E8B84B]" />
            <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
              {t.heroTagline}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            {t.heroTitle}
            <span className="inline-block ml-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#E8B84B] align-middle animate-pulse" />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-(--color-text-secondary) text-sm md:text-base max-w-xl"
          >
            {t.heroCredentials}
          </motion.p>

          <motion.div variants={item}>
            <HeroSubtitle text={t.heroSubTitle} locale={locale} />
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="shine-btn group inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#E8B84B] to-[#C9A227] text-[#111111] font-semibold px-7 py-3.5 rounded-md shadow-lg shadow-[#E8B84B]/25 hover:shadow-[#E8B84B]/50 hover:-translate-y-0.5 transition-all"
            >
              {t.ctaConsultation}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="https://wa.me/9027380268"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 border-2 border-[#E8B84B] text-[#E8B84B] font-semibold px-7 py-3.5 rounded-md hover:bg-[#E8B84B] hover:text-[#111111] transition-all hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:rotate-12">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
              </svg>
              {t.ctaWhatsapp}
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE — 5 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative"
        >
          {/* Floating gold frame */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#E8B84B] rounded-lg float-slow" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#C9A227] rounded-lg" />

          <div className="relative bg-(--color-bg) w-full h-80 md:h-120 rounded-lg overflow-hidden flex items-center justify-center text-(--color-text-secondary) shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-linear-to-tr from-[#111111]/40 via-transparent to-[#E8B84B]/10 pointer-events-none z-10" />
            Photo Placeholder
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -right-2 md:-right-6 bg-(--color-bg) border border-[#E8B84B]/40 rounded-lg shadow-xl px-5 py-3 z-20"
          >
            <div className="text-2xl font-bold text-[#E8B84B]">15+</div>
            <div className="text-xs text-(--color-text-secondary) uppercase tracking-wider">
              Years Experience
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

