"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ArticleHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section
      ref={containerRef}
      /* Top padding fix: Added pt-36 on mobile and pt-44 on desktop to clear TopBar + Navbar */
      className="relative w-full bg-[#FAF8F5] text-[#1F2A44] pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Soft Wine Radial Glow (Top-Right) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-125 h-125 bg-[radial-gradient(circle,rgba(114,35,59,0.08)_0%,rgba(250,248,245,0)_70%)] pointer-events-none z-0"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Ghost Quotation Mark Background Glyph */}
        <motion.span
          style={{ y: quoteY }}
          aria-hidden="true"
          className="absolute -top-6 sm:-top-10 left-[20%] sm:left-[28%] text-8xl md:text-9xl font-serif text-[#C6A75E]/20 pointer-events-none select-none z-0 font-bold"
        >
          &ldquo;
        </motion.span>

        {/* Eyebrow with Gold Dash Flanks */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-4 z-10"
        >
          <span className="w-8 h-px bg-[#C6A75E]" />
          <p className="text-[#72233B] text-[13px] font-semibold tracking-[0.2em] uppercase">
            Legal Perspectives From BPS Legal
          </p>
          <span className="w-8 h-px bg-[#C6A75E]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#1F2A44] leading-tight tracking-tight z-10"
          style={{ fontFamily: "var(--font-heading, serif)" }}
        >
          Where the Law Meets Clarity.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-slate-600 text-base md:text-[16px] leading-relaxed max-w-140 mt-4 z-10"
        >
          Practical insights, explained in plain language — from the courtroom to your everyday questions.
        </motion.p>

      </div>
    </section>
  );
};

export default ArticleHero;