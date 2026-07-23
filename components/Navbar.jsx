"use client";
import React from "react";
import Link from "next/link";
// import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: `/${locale}` },
    { label: "About", href: `/${locale}/about` },
    { label: "Practice Areas", href: `/${locale}/practice-areas` },
    { label: "FAQ", href: `/${locale}/faq` },
    { label: "Gallery", href: `/${locale}/gallery` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: "Contact", href: `/${locale}/contact` },
  ];
  return <nav className="sticky top-0 z-50 bg-(--color-bg)/95 backdrop-blur border-b border-(--color-bg-secondary) shadow-md">
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">

      {/* logo */}
      <Link
      href={`/${locale}`}
      onClick={() => setIsOpen(false)}
      className="text-2xl font-bold tracking-wide"
      style={{ fontFamily: "var(--font-heading)" }}
      >
      <span className="text-[#E8B84B]">BPS</span>
      <span className="text-(--color-text)"> Legal</span>
      </Link>

      {/* desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <li
            key={link.href}
            >
              <Link
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive ? "text-[#E8B84B]" : "text-(--color-text-secondary) hover:text-[#C9A227]"
              }`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* desktop cta */}
      <div className="hidden md:flex items-center gap-4">
      <ThemeToggle />
      <Link
      href={`/${locale}/contact`}
      className="hidden md:inline-block bg-[#E8B84B] text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#b8931f] transition"
      >
        Book Consultation
      </Link>
      </div>

      {/* mobile menu button */}
      <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-(--color-text)"
      aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
        )}
      </button>
    </div>

    {/* Mobile menu */}
    {isOpen && (
        <div className="md:hidden bg-(--color-bg) border-t border-(--color-bg-secondary) px-6 py-6 space-y-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-(--color-text-secondary) text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#C9A227] text-[#111111] font-semibold px-5 py-3 rounded-md"
          >
            Book Consultation
          </Link>
        </div>
      )}
  </nav>;
};

export default Navbar;
