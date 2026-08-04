"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutIntro({ t }) {
  return (
    <section className="relative bg-(--color-bg-secondary) px-6 md:px-16 pt-50 pb-20 md:pb-28 overflow-hidden">
      {/* Animated gold grid drift */}
      <div className="absolute inset-0 gold-grid-bg opacity-30 pointer-events-none" />

      {/* Decorative diagonal gold lines */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-14 left-0 h-px w-44 bg-linear-to-r from-[#E8B84B] to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
        className="absolute bottom-14 right-0 h-px w-60 bg-linear-to-l from-[#E8B84B] to-transparent"
      />

      {/* Floating ring */}
      <div className="absolute -top-16 right-16 w-40 h-40 border-2 border-[#E8B84B]/15 rounded-full float-slow pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 justify-center">
          <span className="h-px w-8 bg-[#E8B84B]" />
          <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
            About
          </span>
          <span className="h-px w-8 bg-[#E8B84B]" />
        </motion.div>

        <motion.h2
          variants={item}
          className="relative inline-block text-3xl md:text-5xl font-bold leading-tight"
        >
          {t.aboutHeading}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 w-24 bg-linear-to-r from-[#E8B84B] to-[#C9A227] rounded-full"
          />
        </motion.h2>

        <motion.p variants={item} className="text-(--color-text-secondary) text-sm md:text-base pt-2">
          {t.heroCredentials}
        </motion.p>

        <motion.p
          variants={item}
          className="text-(--color-text-secondary) text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {t.aboutFullBio}
        </motion.p>
      </motion.div>
    </section>
  );
}
