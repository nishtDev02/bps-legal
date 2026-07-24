"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Gavel,
  Users,
  Home,
  ShoppingCart,
  FileText,
} from "lucide-react";

const iconMap = { Shield, Gavel, Users, Home, ShoppingCart, FileText };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function PracticeAreasGrid({ locale, t, practiceAreas }) {
  return (
    <section className="relative bg-(--color-bg-secondary) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* diagonal decorative accent */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#E8B84B]/20 rounded-full float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-[#C9A227]/20 rotate-45 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#E8B84B]" />
            <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
              What We Do
            </span>
            <span className="h-px w-8 bg-[#E8B84B]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {t.practiceAreasHeading}
          </h2>
        </motion.div>

        {/* cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div key={area.slug} variants={card}>
                <Link
                  href={`/${locale}/practice-areas/${area.slug}`}
                  className="tilt-card group relative block bg-(--color-bg) border border-(--color-text-secondary)/10 rounded-xl p-7 h-full overflow-hidden hover:border-[#E8B84B] hover:shadow-2xl hover:shadow-[#E8B84B]/10"
                >
                  {/* number badge */}
                  <span className="absolute top-4 right-5 text-5xl font-black text-[#E8B84B]/10 group-hover:text-[#E8B84B]/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* icon */}
                  <div className="relative w-14 h-14 rounded-xl bg-[#E8B84B]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-[#E8B84B] group-hover:to-[#C9A227] group-hover:rotate-6 group-hover:scale-110">
                    <Icon
                      size={24}
                      className="text-[#E8B84B] group-hover:text-[#111111] transition-colors"
                    />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mb-4 group-hover:text-[#E8B84B] transition-colors">
                    {area.title}
                  </h3>

                  <span className="text-[#E8B84B] text-sm font-medium inline-flex items-center gap-1">
                    Learn More
                    <span className="inline-block transition-transform group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>

                  {/* bottom accent line */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#E8B84B] to-[#C9A227] group-hover:w-full transition-all duration-500" />
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
            className="shine-btn inline-flex items-center gap-2 bg-linear-to-r from-[#E8B84B] to-[#C9A227] text-[#111111] font-semibold px-8 py-3.5 rounded-md shadow-lg shadow-[#E8B84B]/25 hover:shadow-[#E8B84B]/50 hover:-translate-y-0.5 transition-all"
          >
            {t.practiceAreasCta}
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
