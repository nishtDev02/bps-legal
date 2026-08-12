"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // 100ms stagger for 2x2 grid pattern
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OfficeLocations({ t, officeLocations }) {
  // Fallback array if officeLocations prop isn't passed yet
  const defaultLocations = [
    {
      name: "High Court of Judicature",
      chamber: "Chamber No. 42, Lawyers Block",
      address: "Allahabad High Court, Prayagraj",
    },
    {
      name: "District & Sessions Court",
      chamber: "Chamber No. 18, Main Block",
      address: "District Court Complex, New Delhi",
    },
    {
      name: "Supreme Court of India",
      chamber: "Chamber No. 102, Extension Block",
      address: "Supreme Court Complex, Tilak Marg, New Delhi",
    },
    {
      name: "Central Administrative Tribunal",
      chamber: "Chamber No. 05, Legal Block",
      address: "CAT Principal Bench, New Delhi",
    },
  ];

  const locationsList =
    officeLocations && officeLocations.length > 0
      ? officeLocations
      : defaultLocations;

  return (
    <section className="relative w-full bg-[#FAF6EF] px-4 md:px-8 py-16 overflow-hidden">
      {/* Inset Rounded Panel (~92% width, 24px border-radius, Beige background) */}
      <div className="max-w-[92%] mx-auto bg-[#E8DCC8] rounded-3xl p-8 md:p-16">
        
        {/* Panel Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto space-y-2 mb-12"
        >
          <h2 className="font-serif text-3xl md:text-[36px] font-bold text-[#101828] leading-tight">
            Where We Practice
          </h2>
          <p className="font-sans text-[#5C6472] text-[15px]">
            {t.officeLocationsSubtitle}
          </p>
        </motion.div>

        {/* 2x2 Grid of Location Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {locationsList.map((location, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="group relative bg-white border border-[#101828]/8 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:border-[#6E2C3E] cursor-pointer"
            >
              {/* Top-Right Interactivity Arrow */}
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-[#6E2C3E] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              />

              {/* Top Outline Map Pin Icon */}
              <div className="text-[#6E2C3E]">
                <MapPin size={28} strokeWidth={1.5} />
              </div>

              {/* Court Name & Details */}
              <div className="space-y-1.5">
                <h3 className="font-serif text-[18px] font-semibold text-[#101828] leading-snug">
                  {location.name}
                </h3>
                <p className="font-sans text-[#5C6472] text-[14px] leading-[1.6]">
                  {location.chamber && (
                    <>
                      {location.chamber}
                      <br />
                    </>
                  )}
                  {location.address}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}