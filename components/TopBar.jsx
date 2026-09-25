"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919027380268",
    svg: (
      <>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
        </svg>
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adv_bhanu_pratap_sagar?stkn=MW1jMHhtYm43N2VzYw==",
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
