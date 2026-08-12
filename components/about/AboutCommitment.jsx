"use client"
import React from 'react'
import { motion } from 'framer-motion'

const AboutCommitment = ({ t }) => {
    return (
        <section className="relative w-full bg-[#FAF6EF] text-[#101828] px-6 md:px-16 py-22.5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* LEFT BLOCK: 40% Split */}
            <div className="lg:col-span-5 space-y-4 text-left">
              {/* Animated Draw-in Stroke SVG Icon (Shield Check) */}
              <div className="w-16 h-16">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6E2C3E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <motion.path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="m9 12 2 2 4-4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                  />
                </svg>
              </div>
    
              <h3 className="text-[28px] font-serif font-bold text-[#101828] leading-tight pt-2">
                Client-First Commitment
              </h3>
            </div>
    
            {/* MIDDLE DIVIDER: Pale Gold Line (hidden on small screens, 60% height on desktop) */}
            <div className="lg:block lg:col-span-1 flex justify-center h-full">
              <div className="w-0.5 h-[60%] my-auto bg-[#E3C98A]" />
            </div>
    
            {/* RIGHT BLOCK: 60% Split */}
            <div className="lg:col-span-6 space-y-6 text-[#5C6472] text-[16px] leading-[1.7] max-w-130">
              <p>
                {t.commitmentParagraph1}
              </p>
              <p>
                {t.commitmentParagraph2}
              </p>
            </div>
    
          </div>
        </section>
      );
}

export default AboutCommitment
