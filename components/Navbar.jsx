"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Search, Globe, Phone, Mail, MessageCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Social Links Data for TopBar
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

// --- Sub-Component: TopBar ---
const TopBar = () => {
  return (
    <div className="relative border-b border-[#C6A75E]/25 bg-[#1F2A44] text-white/80 overflow-hidden text-xs">
      {/* Accent Vertical Bar */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#C6A75E] to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between gap-2">
        {/* Contact Info (Desktop) */}
        <div className="hidden sm:flex items-center gap-6">
          <motion.a
            href="tel:+919027380268"
            whileHover={{ x: 3, color: "#C6A75E" }}
            className="flex items-center gap-1.5 transition-colors"
          >
            <Phone size={13} className="text-[#C6A75E]" />
            +91 90273 80268
          </motion.a>
          <motion.a
            href="mailto:contact@bpslegal.com"
            whileHover={{ x: 3, color: "#C6A75E" }}
            className="flex items-center gap-1.5 transition-colors"
          >
            <Mail size={13} className="text-[#C6A75E]" />
            contact@bpslegal.com
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
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
              className="p-1.5 rounded-full text-white/80 hover:text-[#1F2A44] hover:bg-[#C6A75E] transition-colors"
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

// --- Main Header Component (TopBar + Navbar) ---
const Header = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Scroll & UI States
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll Detection Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Mobile menu open hai toh hide mat hone do
    if (isOpen) {
      setHidden(false);
      return;
    }

    // Top threshold (0 - 60px tak open rahega)
    if (latest < 60) {
      setHidden(false);
      return;
    }

    // Scroll Down -> Hide Header (after 100px threshold)
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      // Scroll Up -> Show Header
      setHidden(false);
    }
  });

  const links = [
    { label: "Home", href: `/${locale}` },
    { label: "About", href: `/${locale}/about` },
    { label: "Articles", href: `/${locale}/blog` },
    { label: "Resources", href: `/${locale}/resources` },
    { label: "FAQ", href: `/${locale}/faq` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  const practiceDropdown = [
    { label: "Criminal Law", href: `/${locale}/practice-areas/criminal-law` },
    { label: "Cyber Law", href: `/${locale}/practice-areas/cyber-law` },
    { label: "Bail Matters", href: `/${locale}/practice-areas/bail-matters` },
    { label: "FIR & Police Matters", href: `/${locale}/practice-areas/fir-matters` },
    { label: "Cyber Fraud", href: `/${locale}/practice-areas/cyber-fraud` },
    { label: "Legal Consultation", href: `/${locale}/practice-areas/legal-consultation` },
  ];

  // Language Switch
  const otherLocale = locale === "en" ? "hinglish" : "en";
  const switchLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/"));
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full shadow-lg"
    >
      {/* TOPBAR */}
      <TopBar />

      {/* MAIN NAVBAR */}
      <nav className="bg-[#1F2A44] backdrop-blur-xl transition-all duration-300">
        {/* Accent Gold Top Strip */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent opacity-80" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2.5 text-2xl font-bold tracking-wide shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <motion.span
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C6A75E] text-[#1F2A44] shadow-lg shadow-[#C6A75E]/30 text-base font-extrabold"
            >
              BPS
            </motion.span>
            <span className="text-white group-hover:text-[#C6A75E] transition-colors">
              Legal
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7">
            <motion.li initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Link
                href={links[0].href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === links[0].href ? "text-[#C6A75E]" : "text-white/80 hover:text-[#C6A75E]"
                }`}
              >
                {links[0].label}
              </Link>
            </motion.li>

            <motion.li initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
              <Link
                href={links[1].href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === links[1].href ? "text-[#C6A75E]" : "text-white/80 hover:text-[#C6A75E]"
                }`}
              >
                {links[1].label}
              </Link>
            </motion.li>

            {/* Practice Areas Dropdown */}
            <motion.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href={`/${locale}/practice-areas`}
                className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors ${
                  pathname.includes("practice-areas") ? "text-[#C6A75E]" : "text-white/80 hover:text-[#C6A75E]"
                }`}
              >
                Practice Areas
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-56"
                  >
                    <div className="bg-[#1F2A44] border border-[#C6A75E]/20 rounded-xl shadow-2xl py-2 overflow-hidden">
                      {practiceDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:bg-[#C6A75E]/15 hover:text-[#C6A75E] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {links.slice(2).map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      isActive ? "text-[#C6A75E]" : "text-white/80 hover:text-[#C6A75E]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={switchLanguage}
              aria-label="Change language"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white/80 hover:text-[#C6A75E] transition-colors"
            >
              <Globe size={14} />
              <span>{locale === "en" ? "EN" : "हिन्दी"}</span>
            </button>

            <button
              aria-label="Search"
              className="p-2 rounded-md text-white/80 hover:text-[#C6A75E] transition-colors"
            >
              <Search size={16} />
            </button>

            <ThemeToggle />

            <Link
              style={{
                background: "linear-gradient(135deg, #E0C179 0%, #C6A75E 100%)",
              }}
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md text-[#1F2A44] shadow-md shadow-[#C6A75E]/25 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Consultation
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                →
              </motion.span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
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

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#1F2A44] border-t border-[#C6A75E]/20"
            >
              <div className="px-6 py-6 space-y-1">
                <p className="text-[#C6A75E] uppercase tracking-[0.3em] text-xs font-semibold pb-3">
                  Menu
                </p>

                {[links[0], links[1], { label: "Practice Areas", href: `/${locale}/practice-areas` }, ...links.slice(2)].map(
                  (link, i) => {
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
                              ? "bg-[#C6A75E]/10 text-[#C6A75E] border-l-4 border-[#C6A75E]"
                              : "text-white/80 hover:bg-white/5 hover:text-[#C6A75E]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  }
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-5 grid grid-cols-4 gap-2"
                >
                  <button
                    onClick={switchLanguage}
                    aria-label="Language"
                    className="flex flex-col items-center gap-1 py-3 rounded-lg bg-white/5 hover:bg-[#C6A75E]/20 text-white/80 hover:text-[#C6A75E] transition"
                  >
                    <Globe size={18} />
                    <span className="text-[10px]">{locale === "en" ? "EN" : "हिन्दी"}</span>
                  </button>
                  <a
                    href="tel:+919027380268"
                    aria-label="Call"
                    className="flex flex-col items-center gap-1 py-3 rounded-lg bg-white/5 hover:bg-[#C6A75E]/20 text-white/80 hover:text-[#C6A75E] transition"
                  >
                    <Phone size={18} />
                    <span className="text-[10px]">Call</span>
                  </a>
                  <a
                    href="https://wa.me/9027380268"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex flex-col items-center gap-1 py-3 rounded-lg bg-white/5 hover:bg-[#C6A75E]/20 text-white/80 hover:text-[#C6A75E] transition"
                  >
                    <MessageCircle size={18} />
                    <span className="text-[10px]">WhatsApp</span>
                  </a>
                  <div className="flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="pt-3"
                >
                  <Link
                    href={`/${locale}/contact`}
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-[#C6A75E] text-[#1F2A44] font-semibold px-5 py-3 rounded-md hover:opacity-90 transition"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;