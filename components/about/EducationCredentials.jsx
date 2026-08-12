"use client";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";

const credentials = [
  {
    degree: "LL.B.",
    note: "Bachelor of Legislative Law",
    Icon: GraduationCap,
  },
  {
    degree: "Diploma in Cyber Law",
    note: "Specialized certification in cyber law",
    Icon: ShieldCheck,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function EducationCredentials({ t }) {
  return (
    <section className="relative w-full bg-[#101828] px-6 md:px-16 py-20 overflow-hidden">
      <div className="relative max-w-4xl mx-auto space-y-10">
        
        {/* Centered Subtitle / Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto space-y-2"
        >
          <p className="text-[#FAF6EF]/70 text-[16px] font-serif italic">
            {t.educationHeading}
          </p>
        </motion.div>

        {/* 2 Credential Cards (Compact & Centered) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {credentials.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group relative bg-[#141D2E] border border-[#E3C98A]/12 rounded-[14px] p-7 flex flex-col items-start gap-4 transition-all duration-300 hover:border-[#E3C98A]/30"
              >
                {/* Circular 44px Icon Badge */}
                <div 
                  className="w-11 h-11 shrink-0 rounded-full bg-[#E3C98A]/15 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(227,201,138,0.5)]"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#E3C98A]"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-serif text-[18px] font-semibold text-[#FAF6EF] leading-snug">
                    {item.degree}
                  </h3>
                  <p className="font-sans text-[#E3C98A] text-[13px] leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}