"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning,
  ArrowLeft, ArrowRight,
} from "lucide-react";

const iconMap = {
  Shield, Scale, Key, Heart, Globe, Tag,
  Briefcase, Handshake, FileSignature, Lightbulb, FileWarning,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const GoldDivider = () => (
  <div className="flex justify-center py-2">
    <motion.span 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-px w-12 bg-[#E3C98A]/60 origin-center" 
    />
  </div>
);

const BodySection = ({ eyebrow, heading, text }) => {
  if (!text) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-[720px] mx-auto text-center md:text-left"
    >
      <div className="inline-flex items-center gap-2 mb-2 justify-center md:justify-start">
        <span className="h-px w-4 bg-[#E3C98A]" />
        <p
          className="font-sans text-[11px] uppercase text-[#E3C98A] font-semibold tracking-[2px]"
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className="text-[22px] md:text-[26px] font-bold text-[#101828] mb-3 leading-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {heading}
      </h2>

      <p className="font-sans text-[16px] md:text-[17px] leading-[1.8] text-[#5C6472]">
        {text}
      </p>
    </motion.div>
  );
};

const PracticeAreaDetail = ({ area, locale }) => {
  // Safe Fallback Icon lookup
  const Icon = iconMap[area?.icon] || Shield;

  return (
    <div className="bg-[#FAF6EF] min-h-screen text-[#101828] overflow-hidden">
      
      {/* ================= HEADER HERO SECTION ================= */}
      <section className="relative overflow-hidden px-6 md:px-16 pt-[140px] md:pt-[160px] pb-[70px]">
        
        {/* Soft Wine Radial Glow (Top-Right) */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(circle at top right, #6E2C3E 0%, transparent 70%)",
          }}
        />

        {/* Floating Back Navigation Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href={`/${locale}/practice-areas`}
            className="group inline-flex items-center gap-2 font-sans text-[12px] uppercase font-semibold text-[#6E2C3E] tracking-[1.5px] bg-[#6E2C3E]/5 hover:bg-[#6E2C3E]/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Practice Areas</span>
          </Link>
        </div>

        {/* Main Title & Hero Content Block */}
        <div className="relative max-w-4xl mx-auto flex gap-6 md:gap-8 items-start">
          
          {/* Vertical Wine Accent Bar with Reveal Animation */}
          <motion.span 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="hidden md:block w-[4px] self-stretch bg-[#6E2C3E] rounded-full shrink-0" 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1"
          >
            {/* Animated Icon Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-14 rounded-2xl bg-[#6E2C3E]/10 border border-[#6E2C3E]/15 flex items-center justify-center mb-6 text-[#6E2C3E]"
            >
              <Icon size={32} strokeWidth={1.5} />
            </motion.div>

            <h1
              className="text-3xl md:text-[44px] font-bold text-[#101828] mb-4 leading-[1.15]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {area?.title}
            </h1>

            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-[#5C6472] max-w-[680px]">
              {area?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BODY CONTENT SECTION ================= */}
      <section className="px-6 md:px-16 pb-[90px] space-y-12">
        
        <BodySection 
          eyebrow="Overview" 
          heading="Introduction" 
          text={area?.introduction} 
        />

        <GoldDivider />

        <BodySection 
          eyebrow="Scope of Representation" 
          heading="Services Offered" 
          text={area?.services} 
        />

        {/* Key Areas Tag Chips */}
        {area?.tags && area.tags.length > 0 && (
          <div className="max-w-[720px] mx-auto pt-2">
            <p
              className="font-sans text-[11px] uppercase text-[#E3C98A] font-semibold mb-4 text-center md:text-left tracking-[2px]"
            >
              Key Practice Specialties
            </p>
            
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              {area.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.88, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-[#E3C98A] rounded-full px-4 py-2 font-sans text-[13px] font-medium text-[#101828] shadow-xs hover:border-[#6E2C3E] hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  <Tag size={13} className="text-[#6E2C3E]" />
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        <GoldDivider />

        <BodySection 
          eyebrow="Common Scenarios" 
          heading="Client Situations" 
          text={area?.clientSituations} 
        />

        <GoldDivider />

        <BodySection 
          eyebrow="Methodology" 
          heading="Our Legal Approach" 
          text={area?.ourApproach} 
        />

        <GoldDivider />

        <BodySection 
          eyebrow="Ongoing Representation" 
          heading="Professional Support" 
          text={area?.professionalSupport} 
        />
      </section>

      {/* ================= CLOSING CTA PANEL ================= */}
      <section className="px-6 md:px-16 pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[92%] md:max-w-4xl mx-auto bg-[#EDE4D3] border border-[#E3C98A]/40 rounded-[28px] p-8 md:p-14 text-center overflow-hidden shadow-sm"
        >
          {/* Subtle Inner Glow */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(circle at center, rgba(227,201,138,0.2) 0%, transparent 70%)"
            }}
          />

          <div className="relative z-10 max-w-[580px] mx-auto space-y-4">
            <h3
              className="text-2xl md:text-[32px] font-bold text-[#101828] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Need Confidential Legal Guidance?
            </h3>

            <p className="font-sans text-[15px] leading-relaxed text-[#5C6472]">
              Connect directly with Advocate Bhanu Pratap Sagar for strategic legal consultation tailored to your specific case requirements.
            </p>

            <div className="pt-2">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2.5 bg-[#6E2C3E] text-[#FAF6EF] font-sans font-semibold text-[14px] px-8 py-3.5 rounded-full shadow-md hover:bg-[#5A2333] hover:shadow-lg transition-all duration-300"
              >
                <span>Request Private Consultation</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PracticeAreaDetail;