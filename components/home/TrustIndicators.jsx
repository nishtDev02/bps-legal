"use client";
import { motion } from "framer-motion";
import { Lock, Award, Zap, Laptop } from "lucide-react";

const indicators = [
  { icon: Lock, label: "Confidential", desc: "Your matters, private" },
  { icon: Award, label: "Professional", desc: "Court-tested expertise" },
  { icon: Zap, label: "Responsive", desc: "Prompt communication" },
  { icon: Laptop, label: "Digital Legal Support", desc: "Cyber-first approach" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustIndicators() {
  return (
    <section className="relative bg-[#E8DCC8] border-y border-[#C6A75E]/25 px-6 md:px-16 py-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-4"
      >
        {indicators.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#C6A75E]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:rotate-6 group-hover:scale-110">
                <Icon size={18} className="text-[#C6A75E] group-hover:text-[#1F2A44] transition-colors" />
              </div>
              <div className="leading-tight">
                <div className="text-[#1F2A44] text-sm font-semibold">{it.label}</div>
                <div className="text-[#1F2A44]/60 text-[11px] hidden md:block">{it.desc}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
