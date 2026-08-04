"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Globe, Phone, MessageCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isHome = pathname === `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Language switch logic
  const otherLocale = locale === "en" ? "hinglish" : "en";
  const switchLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/"));
  };

  // Background: transparent at top only on home page, solid on other pages
  const navBg = scrolled || !isHome
    ? "bg-[#1F2A44] shadow-[0_8px_30px_-10px_rgba(31,42,68,0.4)]"
    : "bg-transparent";

  // Text: always white for guaranteed contrast against dark hero / solid navy
  const textColor = "text-white";
  const textSecondary = "text-white/80";

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`backdrop-blur-xl transition-all duration-500 ${navBg}`}
    >
      <div className="h-0.5 w-full bg-lienar-to-r from-transparent via-[#C6A75E] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* LEFT — logo */}
        <Link
          href={`/${locale}`}
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5 text-2xl font-bold tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <motion.span
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 260, damping: 15 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C6A75E] text-[#1F2A44] shadow-lg shadow-[#C6A75E]/30 text-base"
          >
            BPS
          </motion.span>
          <span className={`${textColor} group-hover:text-[#C6A75E] transition-colors`}>
            Legal
          </span>
        </Link>

        {/* CENTER — desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          <motion.li initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link
              href={links[0].href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === links[0].href ? "text-[#C6A75E]" : `${textSecondary} hover:text-[#C6A75E]`
              }`}
            >
              {links[0].label}
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
            <Link
              href={links[1].href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === links[1].href ? "text-[#C6A75E]" : `${textSecondary} hover:text-[#C6A75E]`
              }`}
            >
              {links[1].label}
            </Link>
          </motion.li>

          {/* Practice Areas dropdown */}
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href={`/${locale}/practice-areas`}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                pathname.includes("practice-areas") ? "text-[#C6A75E]" : `${textSecondary} hover:text-[#C6A75E]`
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
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-3 w-56"
                >
                  <div className="bg-[#1F2A44] border border-[#C6A75E]/20 rounded-lg shadow-xl py-2">
                    {practiceDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-[#C6A75E]/10 hover:text-[#C6A75E] transition-colors"
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
                    isActive ? "text-[#C6A75E]" : `${textSecondary} hover:text-[#C6A75E]`
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* RIGHT — utilities + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={switchLanguage}
            aria-label="Change language"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors hover:text-[#C6A75E] ${textSecondary}`}
          >
            <Globe size={14} />
            <span>{locale === "en" ? "EN" : "हिन्दी"}</span>
          </button>

          <button
            aria-label="Search"
            className={`p-2 rounded-md transition-colors hover:text-[#C6A75E] ${textSecondary}`}
          >
            <Search size={16} />
          </button>

          <ThemeToggle />

          <Link
          style={{
            background: "linear-gradient(135deg, #E0C179 0%, #C6A75E 100%)",
          }}
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md text-[#1F2A44] shadow-md shadow-[#C6A75E]/25 hover:opacity-90 hover:-translate-y-0.5 transition"
          >
            Book Consultation
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              →
            </motion.span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-md transition ${textColor} hover:bg-white/10`}
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

      {/* Mobile drawer */}
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
    </motion.nav>
  );
};

export default Navbar;