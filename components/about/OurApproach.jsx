"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Compass, CheckCircle } from "lucide-react";

const valuePoints = [
  { label: "Integrity", Icon: Shield },
  { label: "Confidentiality", Icon: Lock },
  { label: "Transparency", Icon: Eye },
  { label: "Personalized Guidance", Icon: Compass },
  { label: "Practical Solutions", Icon: CheckCircle },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06, // 60ms stagger per requirement
    },
  },
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function OurApproach({ t }) {
  return (
    <section className="relative w-full bg-[#FAF6EF] text-[#101828] px-6 md:px-16 py-22.5 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        
        {/* Top Paragraph Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-160 mx-auto text-[#5C6472] text-[16px] leading-[1.7]"
        >
          <p>
            {t.approachDescription}
          </p>
        </motion.div>

        {/* Horizontal Pill Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          {valuePoints.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={index}
                variants={pillVariant}
                className="group inline-flex items-center gap-2 bg-white/80 hover:bg-[#E3C98A]/15 border border-[#E3C98A] rounded-full px-5 py-2.5 cursor-default transition-all duration-300"
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#6E2C3E] group-hover:text-[#101828] transition-colors duration-300 shrink-0"
                />
                <span className="font-sans text-[14px] font-medium text-[#101828] transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}