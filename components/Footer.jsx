import React from "react";
import Link from "next/link";

const Footer = ({ locale }) => {
  const quickLinks = [
    { label: "Home", href: `/${locale}` },
    { label: "About", href: `/${locale}/about` },
    { label: "Practice Areas", href: `/${locale}/practice-areas` },
    { label: "Articles", href: `/${locale}/blog` },
    { label: "Resources", href: `/${locale}/resources` },
    { label: "FAQ", href: `/${locale}/faq` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: `/${locale}/privacy-policy` },
    { label: "Terms & Conditions", href: `/${locale}/terms` },
    { label: "Disclaimer", href: `/${locale}/disclaimer` },
    { label: "Refund Policy", href: `/${locale}/refund-policy` },
    { label: "Cookie Policy", href: `/${locale}/cookie-policy` },
  ];

  const practiceLinks = [
    { label: "Criminal Law", href: `/${locale}/practice-areas/criminal-law` },
    { label: "Cyber Law", href: `/${locale}/practice-areas/cyber-law` },
    { label: "Bail Matters", href: `/${locale}/practice-areas/bail-matters` },
    { label: "FIR Matters", href: `/${locale}/practice-areas/fir-matters` },
    { label: "Cyber Fraud", href: `/${locale}/practice-areas/cyber-fraud` },
  ];
  return (
    <footer className="bg-[#1F2A44] text-white/80 px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Brand row */}
        <div className="mb-12">
          <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-[#C6A75E]">BPS</span> <span className="text-white">Legal</span>
          </span>
          <p className="text-white/60 text-sm mt-3 max-w-md">
            Trusted legal guidance in Criminal Law and Cyber Law, protecting
            your rights across India.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Quick links */}
          <div>
            <h4 className="text-[#C6A75E] text-sm font-semibold uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#C6A75E] transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h4 className="text-[#C6A75E] text-sm font-semibold uppercase tracking-wide mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#C6A75E] transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[#C6A75E] text-sm font-semibold uppercase tracking-wide mb-4">Practice Areas</h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[#C6A75E] transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C6A75E] text-sm font-semibold uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>Patiala House Courts, New Delhi</li>
              <li>
                <a href="tel:+919027380268" className="hover:text-[#C6A75E] transition">+91 90273 80268</a>
              </li>
              <li>
                <a href="mailto:contact@bpslegal.com" className="hover:text-[#C6A75E] transition">contact@bpslegal.com</a>
              </li>
              <li>
                <a href="https://wa.me/919027380268" target="_blank" className="hover:text-[#C6A75E] transition">WhatsApp Us</a>
              </li>
              <li>Mon – Sat: 10:00 AM – 6:00 PM</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[#C6A75E] text-sm font-semibold uppercase tracking-wide mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                aria-label="YouTube"
                className="text-white/70 hover:text-[#C6A75E] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <polygon
                    points="10,9 16,12 10,15"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Instagram"
                className="text-white/70 hover:text-[#C6A75E] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Facebook"
                className="text-white/70 hover:text-[#C6A75E] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="X (Twitter)"
                className="text-white/70 hover:text-[#C6A75E] transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} BPS Legal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
