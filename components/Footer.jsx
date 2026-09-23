import Link from "next/link";
import officeLocations from "@/lib/officeLocations";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = ({ locale }) => {
  const quickLinks = [
    { label: "About", href: `/${locale}/about` },
    { label: "Practice Areas", href: `/${locale}/practice-areas` },
    { label: "Articles", href: `/${locale}/blog` },
    { label: "Resources", href: `/${locale}/resources` },
    { label: "FAQ", href: `/${locale}/faq` },
    { label: "Contact", href: `/${locale}/contact` },
  ];

  const practiceLinks = [
    { label: "Cyber Law", href: `/${locale}/practice-areas/cyber-law` },
    { label: "Criminal Law", href: `/${locale}/practice-areas/criminal-law` },
    { label: "Bail Matters", href: `/${locale}/practice-areas/bail-matters` },
    { label: "Family Law", href: `/${locale}/practice-areas/family-law` },
    { label: "Immigration Law", href: `/${locale}/practice-areas/immigration-law` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: `/${locale}/privacy-policy` },
    { label: "Terms & Conditions", href: `/${locale}/terms` },
    { label: "Disclaimer", href: `/${locale}/disclaimer` },
    { label: "Cookie Policy", href: `/${locale}/cookie-policy` },
    { label: "Refund Policy", href: `/${locale}/refund-policy` },
  ];

  const socialLinks = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: WhatsAppIcon, href: "https://wa.me/919027380268", label: "WhatsApp" },
  ];

  return (
    <footer style={{ background: "#101828" }} className="px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Brand block */}
        <div className="mb-12 max-w-sm">
          <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            <span style={{ color: "#FAF6EF" }}>BPS </span>
            <span style={{ color: "#E3C98A" }}>Legal</span>
          </span>
          <p className="text-sm mt-3" style={{ color: "rgba(250,246,239,0.55)" }}>
            Trusted legal guidance in Criminal Law and Cyber Law, protecting your rights across India.
          </p>
        </div>

        {/* Links Grid: Expanded to 5 columns for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#E3C98A", letterSpacing: "1.5px" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-[0.55rem]" style={{ lineHeight: "2.1" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:opacity-100"
                    style={{ color: "rgba(250,246,239,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#E3C98A", letterSpacing: "1.5px" }}
            >
              Practice Areas
            </h4>
            <ul className="space-y-[0.55rem]" style={{ lineHeight: "2.1" }}>
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:opacity-100"
                    style={{ color: "rgba(250,246,239,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#E3C98A", letterSpacing: "1.5px" }}
            >
              Legal
            </h4>
            <ul className="space-y-[0.55rem]" style={{ lineHeight: "2.1" }}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:opacity-100"
                    style={{ color: "rgba(250,246,239,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#E3C98A", letterSpacing: "1.5px" }}
            >
              Contact
            </h4>
            <ul className="space-y-[0.55rem] text-sm" style={{ color: "rgba(250,246,239,0.7)" }}>
              <li>
                <a href="tel:+919027380268" className="transition hover:opacity-100">
                  +91 90273 80268
                </a>
              </li>
              <li>
                <a href="mailto:contact@bpslegal.com" className="transition hover:opacity-100">
                  contact@bpslegal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-xs font-semibold uppercase mb-4"
              style={{ color: "#E3C98A", letterSpacing: "1.5px" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition hover:bg-[#E3C98A]/10"
                  style={{
                    border: "1px solid rgba(227,201,138,0.4)",
                  }}
                >
                  <Icon width="15" height="15" style={{ color: "#E3C98A" }} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8" style={{ borderTop: "1px solid rgba(227,201,138,0.15)" }}>
          {officeLocations.map((loc) => (
            <div key={loc.name}>
              <p className="text-xs font-medium" style={{ color: "rgba(250,246,239,0.7)" }}>
                {loc.name}
              </p>
              <p className="text-[11px] mt-1" style={{ color: "rgba(250,246,239,0.4)" }}>
                {loc.chamber}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(227,201,138,0.15)" }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "rgba(250,246,239,0.4)" }}>
              © {new Date().getFullYear()} BPS Legal. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs" style={{ color: "rgba(250,246,239,0.5)" }}>
              <Link href={`/${locale}/privacy-policy`} className="hover:text-[#E3C98A] transition">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href={`/${locale}/terms-and-conditions`} className="hover:text-[#E3C98A] transition">
                Terms & Conditions
              </Link>
              <span>·</span>
              <Link href={`/${locale}/disclaimer`} className="hover:text-[#E3C98A] transition">
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-[10px] italic mt-3" style={{ color: "rgba(250,246,239,0.35)" }}>
            The Bar Council of India does not permit advertisement or solicitation by advocates.
            This website is for informational purposes only and does not constitute an advertisement
            or solicitation of work.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;