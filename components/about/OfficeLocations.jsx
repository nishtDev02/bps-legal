"use client";
import { motion } from "framer-motion";
import { Landmark, MapPin } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function OfficeLocations({ t, officeLocations }) {
  return (
    <section className="relative bg-(--color-bg-secondary) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute top-16 left-10 w-24 h-24 border-2 border-[#E8B84B]/15 rounded-full float-slow pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-16 h-16 border-2 border-[#C9A227]/20 rotate-45 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#E8B84B]" />
            <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
              Where We Practice
            </span>
            <span className="h-px w-8 bg-[#E8B84B]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            {t.officeLocationsHeading}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {officeLocations.map((location, index) => (
            <motion.div
              key={index}
              variants={card}
              className="tilt-card group relative bg-(--color-bg) border border-(--color-text-secondary)/10 rounded-xl p-6 space-y-4 overflow-hidden hover:border-[#E8B84B] hover:shadow-2xl hover:shadow-[#E8B84B]/10 transition-all duration-500"
            >
              {/* top-right pin icon on hover */}
              <MapPin
                size={16}
                className="absolute top-4 right-4 text-[#E8B84B]/30 group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500"
              />

              <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-[#E8B84B] group-hover:to-[#C9A227] group-hover:rotate-6 group-hover:scale-110">
                <Landmark
                  size={22}
                  className="text-[#E8B84B] group-hover:text-[#111111] transition-colors"
                />
              </div>

              <h3 className="font-semibold text-base leading-snug group-hover:text-[#E8B84B] transition-colors">
                {location.name}
              </h3>

              <p className="text-(--color-text-secondary) text-sm leading-relaxed">
                {location.chamber}
                <br />
                {location.address}
              </p>

              {/* bottom accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#E8B84B] to-[#C9A227] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
