"use client";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Confidential Consultation",
    description:
      "Client information and legal matters are handled with privacy, discretion, and professional confidentiality.",
  },
  {
    number: "02",
    title: "Professional Guidance",
    description:
      "Receive clear, practical legal guidance tailored to the circumstances of your matter.",
  },
  {
    number: "03",
    title: "Client-Focused Approach",
    description:
      "Every matter receives individual attention with an understanding of the client's concerns and objectives.",
  },
  {
    number: "04",
    title: "Practical Legal Solutions",
    description:
      "Focused legal strategies designed to address the specific circumstances and needs of each matter.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // 120ms stagger between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs({ t }) {
  return (
    <section className="relative w-full bg-[#FAF6EF] px-6 md:px-16 py-25 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <h2 className="font-serif text-3xl md:text-[38px] font-bold text-[#101828] leading-tight">
            {t.whyChooseHeading}
          </h2>
          <p className="font-sans text-[#5C6472] text-[15px] leading-relaxed">
            {t?.whyChooseSubtitle || "Professional legal guidance focused on your rights, your concerns, and your individual legal needs."}
          </p>
        </motion.div>

        {/* 4-Column Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-start cursor-default"
            >
              {/* Header Container with Ghost Numeral */}
              <div className="relative w-full pt-6 pb-2">
                {/* 56px Stroke-Only Serif Ghost Numeral */}
                <span
                  className="absolute -top-4 left-0 font-serif text-[56px] font-semibold leading-none select-none transition-colors duration-300 pointer-events-none text-transparent"
                  style={{
                    WebkitTextStroke: "1px #E3C98A",
                    opacity: 0.45,
                  }}
                >
                  {item.number}
                </span>

                {/* Feature Title */}
                <h3 className="relative z-10 font-serif text-[19px] font-semibold text-[#101828] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* 32px Gold Accent Underline */}
              <div className="w-8 h-px bg-[#E3C98A] my-3 transition-all duration-300 group-hover:w-12" />

              {/* Description Text */}
              <p className="font-sans text-[#5C6472] text-[14.5px] leading-[1.6]">
                {item.description}
              </p>

              {/* CSS Style Injection for Hover Color-Shift on Outline Text */}
              <style jsx>{`
                .group:hover span {
                  -webkit-text-stroke-color: #6e2c3e !important;
                  opacity: 0.8 !important;
                }
              `}</style>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}