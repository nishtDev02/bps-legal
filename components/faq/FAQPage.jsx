"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Scale, Shield, Heart, FileWarning, ArrowRight } from "lucide-react";
import faqData from "@/lib/faqData";

const iconMap = { Scale, Shield, Heart, FileWarning };

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

const FAQPage = ({ locale }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const categories = ["All", ...faqData.map((g) => g.category)];

  const filteredGroups = faqData
    .filter((group) => activeCategory === "All" || group.category === activeCategory)
    .map((group) => ({
      ...group,
      questions: group.questions.filter((q) =>
        q[locale].question.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2A44] selection:bg-[#C6A75E] selection:text-[#1F2A44]">
      {/* 1. HEADER SECTION */}
      <section className="px-6 md:px-16 pt-32 md:pt-40 pb-8 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="uppercase text-[12px] font-bold tracking-[2.5px] text-[#C6A75E] mb-2">
            GOT QUESTIONS?
          </p>
          <h1
            className="text-[34px] font-bold text-[#1F2A44] leading-tight"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Frequently Asked Questions
          </h1>
        </motion.div>
      </section>

      {/* 2. SEARCH BAR SECTION */}
      <section className="px-6 md:px-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-xl mx-auto relative"
        >
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C6A75E]"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your question..."
            className="w-full pl-12 pr-5 py-3.5 rounded-full outline-none transition-all duration-200 bg-white text-[#1F2A44] text-sm placeholder:text-[#5C6472]"
            style={{
              border: "1.5px solid #C6A75E",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#C6A75E";
              e.target.style.boxShadow = "0 0 0 4px rgba(198, 167, 94, 0.25)";
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "none";
            }}
          />
        </motion.div>
      </section>

      {/* 3. CATEGORY FILTER PILLS */}
      <section className="px-6 md:px-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                layout
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#C6A75E] text-[#1F2A44] shadow-xs"
                    : "bg-white border border-[#C6A75E] text-[#1F2A44] hover:bg-[#C6A75E]/10"
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      {/* 4. GROUPED ACCORDION LIST */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <AnimatePresence mode="wait">
            {filteredGroups.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-[#5C6472] text-sm py-8"
              >
                No questions found matching your search term.
              </motion.p>
            ) : (
              <motion.div
                key={activeCategory + search}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                className="space-y-10"
              >
                {filteredGroups.map((group) => {
                  const GroupIcon = iconMap[group.icon] || Scale;
                  return (
                    <motion.div key={group.category} variants={itemVariants}>
                      {/* Category Sub-Header */}
                      <div className="flex items-center gap-2 mb-4">
                        {GroupIcon && <GroupIcon size={16} className="text-[#C6A75E]" />}
                        <p className="uppercase text-[12px] font-bold text-[#C6A75E] tracking-[1.5px]">
                          {group.category}
                        </p>
                      </div>

                      {/* Accordion Questions */}
                      <div className="space-y-3">
                        {group.questions.map((faq, index) => {
                          const id = `${group.category}-${index}`;
                          const isOpen = openId === id;
                          return (
                            <motion.div
                              key={id}
                              layout
                              className={`rounded-[10px] overflow-hidden bg-white transition-all duration-200 ${
                                isOpen
                                  ? "border-l-[3px] border-l-[#C6A75E] shadow-xs"
                                  : "border-l-[3px] border-l-transparent"
                              }`}
                            >
                              <button
                                onClick={() => setOpenId(isOpen ? null : id)}
                                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                              >
                                <span
                                  className="text-[13.5px] font-semibold text-[#1F2A44]"
                                  style={{ fontFamily: "var(--font-heading, serif)" }}
                                >
                                  {faq[locale].question}
                                </span>

                                {/* Plus/Minus Badge */}
                                <motion.span
                                  animate={{ rotate: isOpen ? 45 : 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="w-7 h-7 rounded-full bg-[#C6A75E]/20 flex items-center justify-center shrink-0"
                                >
                                  <Plus size={14} className="text-[#72233B]" strokeWidth={2.5} />
                                </motion.span>
                              </button>

                              {/* Framer Motion Height Accordion */}
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
                                    <p className="px-5 pb-4 text-[11px] leading-[1.6] text-[#5C6472]">
                                      {faq[locale].answer}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-[#72233B] rounded-2xl p-8 md:p-10 text-center shadow-md"
        >
          <h3
            className="text-[#FAF8F5] text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Still have questions?
          </h3>
          <div className="mt-5">
            <Link href={`/${locale}/contact`}>
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#1F2A44] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#E3C98A] transition-colors duration-200"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={15} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQPage;