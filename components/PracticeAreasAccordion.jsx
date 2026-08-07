"use client";
import React from "react";
import { useState } from "react";
import practiceAreas from "@/lib/practiceAreas";
import {
  Gavel,
  Shield,
  Scale,
  FileText,
  AlertTriangle,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const iconMap = {
  Gavel,
  Shield,
  Scale,
  FileText,
  AlertTriangle,
  MessageSquare,
};

const PracticeAreasAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {practiceAreas.map((area, index) => {
        const Icon = iconMap[area.icon] || Shield; // Default to Shield if icon not found
        const isOpen = openIndex === index;

        return (
          <div key={area.slug} className="bg-white rounded-lg border border-[#1F2A44]/10 overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#C6A75E]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#C6A75E]" />
                </div>
                <span className="font-semibold text-[#1F2A44] text-base md:text-lg">
                  {area.title}
                </span>
              </div>

              <ChevronDown
                size={20}
                className={`text-[#1F2A44]/50 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pl-19 space-y-4">
                  <p className="text-[#1F2A44]/70 text-sm md:text-base leading-relaxed">
                    {area.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#1F2A44]/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PracticeAreasAccordion;
