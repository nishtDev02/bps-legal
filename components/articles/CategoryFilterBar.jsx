"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  Users,
  Briefcase,
  FileText,
  Gavel,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All", icon: Scale },
  { id: "cyber-law", label: "Cyber Law", icon: ShieldAlert },
  { id: "criminal-law", label: "Criminal Law", icon: Gavel },
  { id: "family-law", label: "Family Law", icon: Users },
  { id: "corporate-law", label: "Corporate Law", icon: Briefcase },
  { id: "bail-matters", label: "Bail Matters", icon: FileText },
];

const CategoryFilterBar = ({ activeCategory, onSelectCategory }) => {
  const [selected, setSelected] = useState(activeCategory || "all");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky indicator border when scrolled
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (id) => {
    setSelected(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <div
      className={`sticky top-0 z-40 w-full bg-[#FAF8F5] transition-all duration-300 ${
        isSticky
          ? "border-b border-[#C6A75E]/15 shadow-sm py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Scrollable Container with Edge Fade Masking */}
        <div className="relative w-full overflow-x-auto no-scrollbar scroll-smooth mask-[linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
          <div className="flex items-center gap-2.5 min-w-max px-2 py-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selected === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#72233B] text-[#FAF8F5] shadow-sm"
                      : "bg-white text-[#1F2A44] border border-[#C6A75E]/40 hover:border-[#C6A75E] hover:shadow-xs"
                  }`}
                >
                  {/* Category Practice Area Icon */}
                  <Icon
                    size={16}
                    className={`transition-transform duration-200 group-hover:rotate-2 ${
                      isActive ? "text-[#FAF8F5]" : "text-[#72233B]"
                    }`}
                  />

                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterBar;