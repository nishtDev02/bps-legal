"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA({ locale, t }) {
  return (
    <section className="relative bg-linear-to-br from-[#E8B84B] via-[#E8B84B] to-[#C9A227] px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* animated pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #111111 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* floating decorative shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-[#111111]/15 rounded-full float-slow" />
      <div className="absolute -bottom-8 -right-8 w-56 h-56 border-2 border-[#111111]/10 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#111111]">
          {t.contactHeading}
        </h2>

        <p className="text-[#111111]/80 text-base md:text-lg leading-relaxed">
          {t.contactSubheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={`/${locale}/contact`}
            className="pulse-ring group inline-flex items-center justify-center gap-2 bg-[#111111] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-black hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            {t.ctaConsultation}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href=""
            target="_blank"
            className="group inline-flex items-center justify-center gap-2 border-2 border-[#111111] text-[#111111] font-semibold px-8 py-3.5 rounded-md hover:bg-[#111111] hover:text-white hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform group-hover:rotate-12"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
            </svg>
            {t.ctaWhatsapp}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
