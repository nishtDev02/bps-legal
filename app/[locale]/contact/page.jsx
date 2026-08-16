import React from "react";
import ContactForm from "@/components/ContactForm";
import officeLocations from "@/lib/officeLocations";
import langObj from "@/lib/dictionary";
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldAlert } from "lucide-react";

const ContactPage = async ({ params }) => {
  const { locale } = await params;
  const t = langObj[locale];

  return (
    <section className="relative min-h-screen bg-[#F4EFEC] text-[#1F2A44] px-6 md:px-16 pt-32 lg:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative Gold Radial Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#C6A75E]/10 via-[#C6A75E]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2A44]/5 border border-[#C6A75E]/30 text-[#C6A75E] text-xs font-semibold tracking-widest uppercase">
            <ShieldAlert size={14} /> Confidential Assistance
          </span>
          <h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1F2A44]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book a Legal Consultation
          </h1>
          <p className="text-[#1F2A44]/75 text-base md:text-lg leading-relaxed">
            Reach out for direct and confidential legal assistance. Our advocacy team usually responds within 24 hours.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Form Container */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl shadow-[#1F2A44]/5 border border-[#1F2A44]/10">
            <div className="mb-6 pb-4 border-b border-[#1F2A44]/10">
              <h2 className="text-xl font-bold text-[#1F2A44]">Consultation Request Form</h2>
              <p className="text-xs text-[#1F2A44]/60 mt-0.5">
                Fill in the details below to schedule an in-person or remote legal session.
              </p>
            </div>

            <ContactForm locale={locale} t={t} />
          </div>

          {/* Right Sidebar - Contact Details & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Options */}
            <div className="bg-[#1F2A44] rounded-2xl p-6 md:p-8 space-y-5 text-white shadow-xl shadow-[#1F2A44]/10 border border-[#C6A75E]/20 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#C6A75E]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-lg font-bold text-[#C6A75E] tracking-wide">
                  Direct Line & Support
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  For urgent bail or police matter consultations:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919027380268"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C6A75E]/15 hover:border-[#C6A75E]/40 text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#C6A75E] text-[#1F2A44] group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Phone Call</span>
                    <span className="text-sm font-semibold tracking-wide">+91 90273 80268</span>
                  </div>
                </a>

                <a
                  href="mailto:contact@bpslegal.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C6A75E]/15 hover:border-[#C6A75E]/40 text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#C6A75E] text-[#1F2A44] group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Email Desk</span>
                    <span className="text-sm font-semibold tracking-wide">contact@bpslegal.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919027380268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#25D366] text-white group-hover:scale-105 transition-transform">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-[#25D366]">Instant Legal Help</span>
                    <span className="text-sm font-semibold tracking-wide">Chat on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Locations Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider px-1">
                Chamber & Office Locations
              </h3>

              {officeLocations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-[#1F2A44]/10 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#1F2A44]/5 text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-[#1F2A44] transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2A44] text-base">{location.name}</h4>
                      <p className="text-[#C6A75E] font-medium text-xs mt-0.5">
                        {location.chamber}
                      </p>
                      <p className="text-[#1F2A44]/70 text-xs mt-1.5 leading-relaxed">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;