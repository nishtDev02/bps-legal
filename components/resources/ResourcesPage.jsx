"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Shield,
  BookOpen,
  Download,
  ExternalLink,
  ArrowRight,
  Search,
} from "lucide-react";
import { resources, glossary, usefulLinks } from "@/lib/resourcesData";

const iconMap = { FileText, ClipboardCheck, Shield, BookOpen };
const tabs = ["Guides & E-Books", "Checklists", "Glossary", "Useful Links"];

const ResourcesPage = ({ locale }) => {
  const [activeTab, setActiveTab] = useState("Guides & E-Books");
  const glossaryRef = useRef(null);
  const linksRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Glossary") {
      glossaryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (tab === "Useful Links") {
      linksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredResources = resources.filter((r) => r.type === activeTab);
  const showGrid =
    activeTab === "Guides & E-Books" || activeTab === "Checklists";

  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#101828] selection:bg-[#6E2C3E] selection:text-[#FAF6EF]">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 md:pt-40 pb-12 text-center overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 pointer-events-none opacity-40 blur-3xl z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(110,44,62,0.12) 0%, rgba(227,201,138,0.08) 60%, transparent 80%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto z-10">
          <span className="inline-block text-[#6E2C3E] uppercase text-[11px] font-bold tracking-[2px] mb-3">
            Guides, Tools & Legal References
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#101828] leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Legal Knowledge & Resources
          </h1>

          <p className="text-[#5C6472] text-base md:text-[17px] leading-relaxed max-w-xl mx-auto font-normal">
            Practical guides, downloadable checklists, and essential references
            designed to help you navigate complex legal procedures.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <div className="sticky top-20 z-20 px-6 md:px-16 mb-10 py-3 bg-[#FAF6EF]/80 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#E3C98A] text-[#101828] shadow-xs"
                    : "bg-white/80 border border-[#101828]/10 text-[#5C6472] hover:border-[#6E2C3E] hover:text-[#6E2C3E]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. RESOURCE CARDS GRID */}
      {showGrid && (
        <section className="px-6 md:px-16 mb-16">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredResources.map((item) => {
                  const Icon = iconMap[item.icon] || FileText;
                  return (
                    <div
                      key={item[locale].title}
                      className="group bg-white border border-[#6E2C3E]/15 hover:border-[#E3C98A] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon Badge */}
                        <div className="w-10 h-10 rounded-xl bg-[#6E2C3E]/8 text-[#6E2C3E] flex items-center justify-center mb-4 group-hover:bg-[#6E2C3E] group-hover:text-[#FAF8F5] transition-colors duration-300">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        {/* Title */}
                        <h3
                          className="text-[16px] font-semibold text-[#101828] mb-2 leading-snug group-hover:text-[#6E2C3E] transition-colors"
                          style={{ fontFamily: "var(--font-heading, serif)" }}
                        >
                          {item[locale].title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#5C6472] text-[13.5px] leading-relaxed line-clamp-3 mb-6">
                          {item[locale].description}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#101828]/8">
                        <span className="bg-[#EDE4D3]/60 text-[#6E2C3E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#6E2C3E]/10">
                          {item.format}
                        </span>

                        <a
                          href={item.downloadUrl || "#"}
                          download
                          className="inline-flex items-center gap-1.5 text-[#6E2C3E] text-xs font-bold hover:underline"
                        >
                          <span>Download</span>
                          <Download
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-y-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* 4. LEGAL GLOSSARY */}
      <section
        ref={glossaryRef}
        className="px-6 md:px-16 py-16 scroll-mt-28 border-t border-[#101828]/8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E2C3E]" />
            <span className="text-[#6E2C3E] text-xs font-bold uppercase tracking-wider">
              Legal Dictionary
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-[#101828] mb-8"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Legal Glossary
          </h2>

          <div className="bg-white rounded-2xl border border-[#6E2C3E]/15 p-6 md:p-8 shadow-xs divide-y divide-[#E3C98A]/40">
            {glossary.map((entry) => (
              <motion.div
                key={entry[locale].term}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-4 first:pt-0 last:pb-0"
              >
                <div className="sm:col-span-4">
                  <span
                    className="text-[#101828] font-bold text-[14.5px] block"
                    style={{ fontFamily: "var(--font-heading, serif)" }}
                  >
                    {entry[locale].term}
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-[#5C6472] text-[13.5px] leading-relaxed">
                    {entry[locale].definition}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. USEFUL EXTERNAL LINKS */}
      <section
        ref={linksRef}
        className="px-6 md:px-16 pb-16 scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E2C3E]" />
            <span className="text-[#6E2C3E] text-xs font-bold uppercase tracking-wider">
              Verified Portals
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-[#101828] mb-6"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Useful External Links & Portals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {usefulLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-[#6E2C3E]/15 hover:border-[#E3C98A] hover:bg-[#EDE4D3]/30 rounded-[14px] px-5 py-4 transition-all duration-200 shadow-2xs"
              >
                <span className="text-[#101828] text-sm font-semibold group-hover:text-[#6E2C3E] transition-colors pr-2">
                  {link.label}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#6E2C3E]/5 text-[#6E2C3E] flex items-center justify-center shrink-0 group-hover:bg-[#6E2C3E] group-hover:text-white transition-colors duration-200">
                  <ExternalLink size={14} strokeWidth={1.8} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-4xl mx-auto bg-[#6E2C3E] rounded-[20px] p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3
              className="text-[#FAF8F5] text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              Can't find what you're looking for?
            </h3>
            <p className="text-[#E3C98A] text-sm md:text-base mt-2 max-w-md mx-auto">
              Our legal team is available to assist you with specific inquiries and consultation services.
            </p>
            <div className="mt-6">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#6E2C3E] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#E3C98A] hover:text-[#101828] transition-colors duration-200 shadow-md"
              >
                <span>Contact Our Legal Counsel</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;