"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning, ArrowRight, Sparkles
} from "lucide-react";
import practiceAreas from "@/lib/practiceAreas";

const iconMap = {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning,
};

// Smooth Spring Transitions
const transitionEase = [0.22, 1, 0.36, 1];

const dashVariant = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease: transitionEase } },
};

const PracticeAreasListing = ({ locale }) => {
  const left = (practiceAreas || []).filter((_, i) => i % 2 === 0);
  const right = (practiceAreas || []).filter((_, i) => i % 2 !== 0);

  const Row = ({ area, globalIndex }) => {
    const Icon = iconMap[area?.icon] || Shield;
    const formattedIndex = String(globalIndex + 1).padStart(2, '0');

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: (globalIndex % 6) * 0.08, ease: transitionEase }}
        className="mb-3"
      >
        <Link
          href={`/${locale}/practice-areas/${area.slug}`}
          className="group relative flex items-center justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-[#E3C98A]/15 hover:border-[#E3C98A]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
        >
          {/* Active Left Gold Accent Line on Hover */}
          <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E3C98A] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r" />

          {/* Left Block: Index, Icon, Title */}
          <div className="relative flex items-center gap-4 md:gap-5 min-w-0 z-10">
            {/* Index Number */}
            <span className="font-mono text-[11px] font-semibold tracking-widest text-[#E3C98A]/40 group-hover:text-[#E3C98A] transition-colors shrink-0">
              {formattedIndex}
            </span>

            {/* Icon Box */}
            <div className="w-11 h-11 rounded-xl bg-[#E3C98A]/10 border border-[#E3C98A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E3C98A] group-hover:border-[#E3C98A] transition-all duration-300">
              <Icon 
                size={20} 
                strokeWidth={1.75} 
                className="text-[#E3C98A] group-hover:text-[#101828] transition-colors duration-300" 
              />
            </div>

            {/* Title & Teaser */}
            <div className="flex flex-col min-w-0">
              <h3
                className="text-[17px] md:text-[20px] font-semibold text-[#FAF6EF] group-hover:text-[#E3C98A] transition-colors truncate"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {area.title}
              </h3>
              
              {/* Teaser text visible on mobile too */}
              <p className="text-[13px] text-[#FAF6EF]/60 line-clamp-1 mt-0.5 font-sans">
                {area.teaser}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative flex items-center gap-2 shrink-0 z-10 pl-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#E3C98A] font-semibold bg-[#E3C98A]/10 group-hover:bg-[#E3C98A] group-hover:text-[#101828] px-3.5 py-1.5 rounded-full transition-all duration-300">
              Explore
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

            {/* Mobile Arrow Only */}
            <span className="sm:hidden w-8 h-8 rounded-full bg-[#E3C98A]/10 flex items-center justify-center text-[#E3C98A] group-hover:bg-[#E3C98A] group-hover:text-[#101828] transition-all duration-300">
              <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="relative bg-[#0E1524] px-6 md:px-16 pt-[140px] md:pt-[160px] pb-[100px] overflow-hidden text-[#FAF6EF]">
      
      {/* Background Soft Gold Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(227,201,138,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Faint Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          
          {/* Subtle Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E3C98A]/10 border border-[#E3C98A]/20 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[2px] text-[#E3C98A] mb-4"
          >
            <Sparkles size={12} />
            Legal Specializations
          </motion.div>

          {/* Heading with Gold Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 md:gap-6 mb-3"
          >
            <motion.span
              variants={dashVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ transformOrigin: "right" }}
              className="h-px w-8 md:w-12 bg-[#E3C98A]"
            />
            <h1
              className="text-3xl md:text-[44px] font-bold text-[#FAF6EF] tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              FIELDS OF EXPERTISE
            </h1>
            <motion.span
              variants={dashVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
              className="h-px w-8 md:w-12 bg-[#E3C98A]"
            />
          </motion.div>

          <p
            className="font-sans text-[13px] md:text-[14px] text-[#FAF6EF]/70 uppercase tracking-[3px] font-medium"
          >
            Clarity in Law, Confidence in Action
          </p>
        </div>

        {/* ================= TWO COLUMN GRID LIST ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12">
          <div>
            {left.map((area, i) => (
              <Row 
                key={area.slug || i} 
                area={area} 
                globalIndex={i * 2} 
              />
            ))}
          </div>
          <div>
            {right.map((area, i) => (
              <Row 
                key={area.slug || i} 
                area={area} 
                globalIndex={(i * 2) + 1} 
              />
            ))}
          </div>
        </div>

        {/* ================= BOTTOM GUIDANCE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 md:p-8 rounded-2xl bg-linear-to-r from-[#E3C98A]/10 via-white/[0.02] to-[#E3C98A]/10 border border-[#E3C98A]/25 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div>
            <h4 className="text-[17px] font-semibold text-[#FAF6EF]" style={{ fontFamily: "var(--font-heading)" }}>
              Unsure which legal domain applies to your case?
            </h4>
            <p className="text-[13px] text-[#FAF6EF]/60 font-sans mt-0.5">
              Book a direct initial assessment to discuss your situation confidentially.
            </p>
          </div>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[#E3C98A] hover:bg-[#d8bc7b] text-[#101828] font-sans font-semibold text-[13px] px-6 py-2.5 rounded-full transition-all duration-300 shrink-0 shadow-md"
          >
            Schedule Consultation
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PracticeAreasListing;