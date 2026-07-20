"use client";
import React from "react";
import Link from "next/link";
// import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: `/${locale}/about` },
    { label: "Practice Areas", href: `/${locale}/practice-areas` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: "Contact", href: `/${locale}/contact` },
  ];
  return <nav className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur border-b border-[#2d2d2d]">
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">

      {/* logo */}
      <Link
      href={`/${locale}`}
      onClick={() => setIsOpen(false)}
      className="text-2xl font-bold tracking-wide"
      style={{ fontFamily: "var(--font-heading)" }}
      >
      <span className="text-[#C9A227]">BPS</span>
      <span className="text-white"> Legal</span>
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
                isActive ? "text-[#C9A227]" : "text-[#F5F5F5]/80 hover:text-[#C9A227]"
              }`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* desktop cta */}
      <Link
      href={`/${locale}/contact`}
      className="hidden md:inline-block bg-[#C9A227] text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#b8931f] transition"
      >
        Book Consultation
      </Link>

      {/* mobile menu button */}
    </div>
  </nav>;
};

export default Navbar;
