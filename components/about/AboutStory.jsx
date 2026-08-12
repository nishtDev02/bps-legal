"use client"
import React from "react";
import { motion } from "framer-motion";

const AboutStory = ({ t }) => {
  return (
    <section className="relative w-full bg-[#E8DCC8] text-[#1F2A44] px-6 md:px-16 py-25">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-175 mx-auto pl-8 md:pl-10"
      >
        {/* Manuscript Motif: Single 1px Gold Vertical Line along Left Margin */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#C6A75E]" />

        {/* Narrative Paragraphs */}
        <div className="space-y-7 text-[17px] leading-[1.75] font-sans text-[#1F2A44]/90">
          <p className="first-letter:float-left first-letter:text-[60px] first-letter:leading-none first-letter:font-serif first-letter:font-bold first-letter:text-[#6E2C3E] first-letter:mr-3 first-letter:mt-1">
            {t.storyIntro}
          </p>

          <p>
            {t.storyBody1}
          </p>

          <p>
            {t.storyBody2}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStory;
