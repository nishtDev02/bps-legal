"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutIntro({ t }) {
  const containerRef = useRef(null);
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#FAF6EF] text-[#101828] px-6 md:px-16 pt-32 pb-24 md:pt-30 md:pb-25 overflow-hidden"
    >
      {/* Soft Wine-Tinted Radial Glow Wash (Top-Right) */}
      <div 
        className="absolute top-0 right-0 w-125 h-125 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle at top right, #6E2C3E 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* LEFT COLUMN: 55% Split */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-1"
          >
            <span className="text-[#6E2C3E] text-[13px] font-semibold uppercase tracking-[2px]">
              THE PRACTICE BEHIND BPS LEGAL
            </span>
            <div className="h-0.5 w-6 bg-[#C6A75E]" />
          </motion.div>

          {/* Main Heading (Two-part statement) */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl md:text-[52px] leading-[1.1] font-semibold text-[#101828] tracking-tight"
            >
              Committed to Protecting Your Rights.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-[52px] leading-[1.1] font-normal italic font-serif text-[#101828] tracking-tight"
            >
              Guided by the Law.
            </motion.h1>
          </div>

          {/* Optional CTA Hint / Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-[#101828]/60 font-medium"
          >
            <span>Scroll to know more</span>
            <span className="inline-block animate-bounce">↓</span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 45% Split (Portrait) */}
        <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full flex items-center justify-center lg:justify-end mt-6 lg:mt-12">
          <div className="relative w-full aspect-4/5 max-w-95">
            
            {/* Frame-behind-frame depth (1px Gold Hairline Border offset 8px) */}
            <div className="absolute top-2 left-2 w-full h-full border border-[#C6A75E] rounded-xl pointer-events-none z-0" />

            {/* Main Portrait Box */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ y: imageY }}
              className="relative w-full h-full rounded-xl overflow-hidden z-10 shadow-xl border border-[#101828]/10 bg-[#101828]"
            >
              <Image
                src="/images/advocate-photo-2.png" // UPDATE TO YOUR PHOTO PATH
                alt="Advocate Bhanu Pratap Sagar"
                fill
                className="object-cover contrast-[1.05] brightness-[0.95] grayscale-20" 
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}