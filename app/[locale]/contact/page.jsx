import React from "react";
import ContactForm from "@/components/ContactForm";
import officeLocations from "@/lib/officeLocations";
import langObj from "@/lib/dictionary";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactPage = async ({ params }) => {
  const { locale } = await params;
  const t = langObj[locale];

  return (
    <section className="relative bg-[#E8DCC8] px-6 md:px-16 pt-47.5 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <p className="text-[#C6A75E] uppercase tracking-widest text-sm font-medium">Contact</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1F2A44]">Book a Consultation</h1>
          <p className="text-[#1F2A44]/70 text-base md:text-lg">
            Reach out for confidential legal guidance - we typically respond
            within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-lg p-6 md:p-10 shadow-sm">
            <ContactForm locale={locale} t={t} />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1F2A44] rounded-lg p-6 space-y-4 text-white">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C6A75E]" />
                <a href="tel:+919027380268" className="text-sm hover:text-[#C6A75E] transition">
                  +91 90273 80268
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C6A75E]" />
                <a href="mailto:contact@bpslegal.com" className="text-sm hover:text-[#C6A75E] transition">
                  contact@bpslegal.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#C6A75E]" />
                <a
                  href="https://wa.me/919027380268"
                  target="_blank"
                  className="text-sm hover:text-[#C6A75E] transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {officeLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg p-5">
                  <h3 className="font-semibold text-[#1F2A44] text-sm">{location.name}</h3>
                  <p className="text-[#1F2A44]/70 text-sm mt-1">
                    {location.chamber} <br />
                    {location.address}
                  </p>
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
