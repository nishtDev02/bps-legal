import React from "react";
import ContactForm from "@/components/ContactForm";
import officeLocations from "@/lib/officeLocations";
import langObj from "@/lib/dictionary";
import { Phone, Mail, MessageCircle, MapPin, Clock, Contact } from "lucide-react";

const ContactPage = async ({ params }) => {
  const { locale } = await params;
  const t = langObj[locale];

  return (
    <section className="relative min-h-screen bg-[#1F2A44] text-[#FAF8F5] px-6 md:px-16 pt-32 lg:pt-40 pb-16 overflow-hidden selection:bg-[#C6A75E] selection:text-[#1F2A44]">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C6A75E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <p className="uppercase text-[12px] font-bold tracking-[2.5px] text-[#C6A75E]">
            LET'S TALK
          </p>
          <h1
            className="text-[34px] font-bold text-[#FAF8F5] leading-tight"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Get in Touch
          </h1>
          <p className="text-[#FAF8F5]/60 text-sm leading-relaxed">
            Reach out for confidential legal support. Our team typically responds within 24 hours.
          </p>
        </div>

        {/* 2. FORM & DIRECT CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Ivory Contact Form Card */}
          <div className="lg:col-span-7">
            <ContactForm locale={locale} t={t} />
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* 3. Direct Contact Info Layout (3 Side-by-Side Compact Tiles) */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#C6A75E]">
                Direct Lines
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {/* Phone */}
                <a
                  href="tel:+919027380268"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161F30] border border-[#C6A75E]/25 hover:border-[#C6A75E] transition-all text-center group"
                >
                  <Phone size={16} className="text-[#C6A75E] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[9.5px] font-medium text-[#FAF8F5] leading-tight">
                    Call Us
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@bpslegal.com"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161F30] border border-[#C6A75E]/25 hover:border-[#C6A75E] transition-all text-center group"
                >
                  <Mail size={16} className="text-[#C6A75E] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[9.5px] font-medium text-[#FAF8F5] leading-tight">
                    Email Desk
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919027380268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161F30] border border-[#C6A75E]/25 hover:border-[#C6A75E] transition-all text-center group"
                >
                  <MessageCircle size={16} className="text-[#C6A75E] mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[9.5px] font-medium text-[#FAF8F5] leading-tight">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* 4. Office Locations (Compact 2-Column List) */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#C6A75E]">
                Chamber Locations
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {officeLocations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#161F30] border border-[#C6A75E]/15 text-left"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin size={14} className="text-[#C6A75E] shrink-0" />
                      <h4 className="text-xs font-bold text-[#FAF8F5] truncate">
                        {loc.chamber || loc.name}
                      </h4>
                    </div>
                    <p className="text-[10px] text-[#FAF8F5]/60 line-clamp-2 leading-relaxed pl-5">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Office Hours */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#C6A75E]">
                Working Hours
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#161F30] border border-[#C6A75E]/20 text-xs text-[#FAF8F5]">
                <Clock size={14} className="text-[#C6A75E]" />
                <span>Mon – Sat, 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. BCI DISCLAIMER SECTION */}
        <div className="pt-10">
          <div className="w-full h-px bg-[#C6A75E]/15 mb-6" />
          <p className="text-center text-[11px] italic text-[#FAF8F5]/40 leading-relaxed max-w-3xl mx-auto">
            The Bar Council of India does not permit advertisement or solicitation by advocates. This form does not create an advocate-client relationship until formally engaged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;