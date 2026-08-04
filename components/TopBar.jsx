"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
];

const TopBar = () => {
  return (
    <div className="relative border-b border-[#C6A75E]/25 bg-(--color-bg) overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#C6A75E] to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="hidden sm:flex items-center gap-6 text-xs text-(--color-text-secondary)">
          <motion.a
            href="tel:+919027380268"
            whileHover={{ x: 3, color: "#C6A75E" }}
            className="flex items-center gap-1.5"
          >
            <Phone size={13} className="text-[#C6A75E]" />
            +91 90273 80268
          </motion.a>
          <motion.a
            href="mailto:contact@bpslegal.com"
            whileHover={{ x: 3, color: "#C6A75E" }}
            className="flex items-center gap-1.5"
          >
            <Mail size={13} className="text-[#C6A75E]" />
            contact@bpslegal.com
          </motion.a>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              aria-label={s.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -2, scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-full text-(--color-text-secondary) hover:text-[#1F2A44] hover:bg-[#C6A75E] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {s.svg}
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
