"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: `/${locale}` },
    { label: "About", href: `/${locale}/about` },
    { label: "Practice Areas", href: `/${locale}/practice-areas` },
    { label: "FAQ", href: `/${locale}/faq` },
    { label: "Gallery", href: `/${locale}/gallery` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-xl bg-(--color-bg)/85 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E8B84B]/40 shadow-[0_8px_30px_-10px_rgba(232,184,75,0.25)]"
          : "border-(--color-bg-secondary)"
      }`}
    >
      {/* animated gold top accent */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#E8B84B] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* logo */}
        <Link
          href={`/${locale}`}
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2 text-2xl font-bold tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <motion.span
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-[#E8B84B] to-[#C9A227] text-[#111111] shadow-lg shadow-[#E8B84B]/30"
          >
            BPS
          </motion.span>
          <span className="text-(--color-text) group-hover:text-[#E8B84B] transition-colors">
            Legal
          </span>
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "active text-[#E8B84B]"
                      : "text-(--color-text-secondary) hover:text-[#C9A227]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* desktop cta */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={`/${locale}/contact`}
            className="shine-btn relative inline-flex items-center gap-2 bg-linear-to-r from-[#E8B84B] to-[#C9A227] text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-md shadow-md shadow-[#E8B84B]/25 hover:shadow-[#E8B84B]/50 hover:-translate-y-0.5 transition-all"
          >
            Book Consultation
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-(--color-text) hover:bg-(--color-bg-secondary) transition"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-(--color-bg) border-t border-(--color-bg-secondary)"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-[#E8B84B]/10 text-[#E8B84B] border-l-4 border-[#E8B84B]"
                          : "text-(--color-text-secondary) hover:bg-(--color-bg-secondary) hover:text-[#E8B84B]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex items-center gap-3"
              >
                <ThemeToggle />
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="flex-1 shine-btn text-center bg-linear-to-r from-[#E8B84B] to-[#C9A227] text-[#111111] font-semibold px-5 py-3 rounded-md"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;