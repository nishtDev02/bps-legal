"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Fallback data if no faqs array is passed
  const defaultFaqs = [
    {
      question: "What legal documents do I need to initiate a corporate consultation?",
      answer:
        "You should bring relevant corporate incorporation certificates, existing contract agreements, and any dispute notices or correspondence related to your case.",
    },
    {
      question: "How long does the bail application process usually take in High Court?",
      answer:
        "The duration depends on court listings and procedural arguments. Typically, urgent bail petitions are listed within 2 to 5 working days from filing.",
    },
  ];

  const faqList = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full border-t border-[#E3C98A]/40 divide-y divide-[#E3C98A]/40">
      {faqList.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`relative transition-colors duration-300 ${
              isOpen ? "bg-white/50" : "bg-transparent"
            }`}
          >
            {/* Active State Accent Bar (Left Edge) */}
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-[#E3C98A] origin-top"
            />

            {/* Question Toggle Button */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-4 px-3 sm:px-4 text-left cursor-pointer group focus:outline-none"
            >
              <span
                className={`text-[15px] font-semibold transition-colors duration-200 ${
                  isOpen
                    ? "text-[#1F2A44]"
                    : "text-[#101828] group-hover:text-[#6E2C3E]"
                }`}
                style={{ fontFamily: "var(--font-heading, serif)" }}
              >
                {faq.question}
              </span>

              {/* Plus/Close Icon Pill Badge */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#6E2C3E] text-[#FAF8F5] shadow-xs"
                    : "bg-[#6E2C3E]/5 text-[#6E2C3E] group-hover:bg-[#6E2C3E]/15"
                }`}
              >
                <Plus
                  size={15}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Answer Collapse Section */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-[#5C6472] text-[13.5px] leading-relaxed pb-5 px-3 sm:px-4 pr-8">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;