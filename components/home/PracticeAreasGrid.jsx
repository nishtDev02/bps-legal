"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning
} from "lucide-react";

const iconMap = {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning,
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function PracticeAreasGrid({ locale, t, practiceAreas }) {
  return (
    <section className="relative bg-(--color-bg-secondary) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#C6A75E]/20 rounded-full float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-[#C6A75E]/20 rotate-45 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#C6A75E]" />
            <span className="text-[#C6A75E] uppercase tracking-[0.3em] text-xs font-semibold">
              What We Do
            </span>
            <span className="h-px w-8 bg-[#C6A75E]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-(--color-text)">
            {t.practiceAreasHeading}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon] || Shield; // Default to Shield if icon not found
            return (
              <motion.div key={area.slug} variants={card}>
                <Link
                  href={`/${locale}/practice-areas/${area.slug}`}
                  className="tilt-card group relative block bg-(--color-bg) border border-[#1F2A44]/10 rounded-xl p-7 h-full overflow-hidden hover:border-[#C6A75E] hover:shadow-2xl hover:shadow-[#C6A75E]/10"
                >
                  <span className="absolute top-4 right-5 text-5xl font-black text-[#C6A75E]/10 group-hover:text-[#C6A75E]/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative w-14 h-14 rounded-xl bg-[#C6A75E]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={24} className="text-[#C6A75E] group-hover:text-[#1F2A44] transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mb-4 text-(--color-text) group-hover:text-[#C6A75E] transition-colors">
                    {area.title}
                  </h3>

                  <span className="text-[#C6A75E] text-sm font-medium inline-flex items-center gap-1">
                    Learn More
                    <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span>
                  </span>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#C6A75E] group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link
            href={`/${locale}/practice-areas`}
            className="shine-btn btn-primary-gold inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-md shadow-lg shadow-[#C6A75E]/25 hover:-translate-y-0.5"
          >
            {t.practiceAreasCta}
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
