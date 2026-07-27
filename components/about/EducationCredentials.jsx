"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const credentials = [
  { degree: "LL.B.", note: "Bachelor of Legislative Law" },
  {
    degree: "Diploma in Cyber Law",
    note: "Specialized certification in Cyber Law",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function EducationCredentials({ t }) {
  return (
    <section className="relative bg-(--color-bg) px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* soft radial highlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,75,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">
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
              Credentials
            </span>
            <span className="h-px w-8 bg-[#E8B84B]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            {t.educationHeading}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="tilt-card group relative bg-(--color-bg-secondary) border border-(--color-text-secondary)/10 rounded-xl p-7 flex items-start gap-4 overflow-hidden hover:border-[#E8B84B] hover:shadow-2xl hover:shadow-[#E8B84B]/10 transition-all duration-500"
            >
              {/* large number badge */}
              <span className="absolute top-4 right-5 text-5xl font-black text-[#E8B84B]/10 group-hover:text-[#E8B84B]/25 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E8B84B]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-[#E8B84B] group-hover:to-[#C9A227] group-hover:rotate-6 group-hover:scale-110">
                <GraduationCap
                  size={22}
                  className="text-[#E8B84B] group-hover:text-[#111111] transition-colors"
                />
              </div>

              <div className="relative">
                <h3 className="font-semibold text-lg group-hover:text-[#E8B84B] transition-colors">
                  {item.degree}
                </h3>
                <p className="text-(--color-text-secondary) text-sm mt-1.5 leading-relaxed">
                  {item.note}
                </p>
              </div>

              {/* bottom accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#E8B84B] to-[#C9A227] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
