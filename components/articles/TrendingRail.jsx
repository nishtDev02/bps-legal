"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const TrendingRail = ({ trendingArticles = [], locale = "en" }) => {
  const railRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const defaultTrending = [
    {
      title: "Landmark Judgments on Cyber Financial Frauds & Recovery",
      category: "Cyber Law",
      slug: "landmark-judgments-cyber-financial-frauds",
    },
    {
      title: "New Criminal Laws (BNS 2023): What Changes For Bail?",
      category: "Criminal Law",
      slug: "bns-2023-changes-for-bail-proceedings",
    },
    {
      title: "Key Pre-nuptial Agreement Validity Rules in Indian Courts",
      category: "Family Law",
      slug: "prenuptial-agreement-validity-indian-courts",
    },
    {
      title: "Director Liability in Cheque Bounce Cases under Section 138",
      category: "Corporate Law",
      slug: "director-liability-cheque-bounce-section-138",
    },
    {
      title: "How to Obtain Immediate Stay Orders in Civil Disputes",
      category: "Civil Matters",
      slug: "how-to-obtain-stay-orders-civil-disputes",
    },
  ];

  const articles = trendingArticles.length > 0 ? trendingArticles : defaultTrending;

  // FIX: Value check before setState to break the infinite loop
  useEffect(() => {
    if (railRef.current) {
      const scrollWidth = railRef.current.scrollWidth;
      const offsetWidth = railRef.current.offsetWidth;
      const newLeft = -(scrollWidth - offsetWidth);

      setDragConstraints((prev) => {
        if (prev.left === newLeft && prev.right === 0) return prev; // Avoid unnecessary re-render
        return { left: newLeft, right: 0 };
      });
    }
  }, [articles.length]); // Track length instead of whole array object

  return (
    <section className="relative w-full bg-[#1F2A44] text-[#FAF8F5] py-17.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Row */}
        <div className="flex items-center gap-3 mb-8">
          <Flame size={24} className="text-[#C6A75E] shrink-0" />
          
          <h2
            className="text-2xl sm:text-[26px] font-bold text-[#FAF8F5] flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            <span>Trending This Week</span>
            
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#72233B]"
              />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#72233B]" />
            </span>
          </h2>
        </div>

        {/* Drag-to-scroll Container */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={railRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            className="flex items-center gap-4 w-max pr-12 md:pr-24"
          >
            {articles.slice(0, 5).map((item, index) => {
              const rank = (index + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={item.slug || index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group relative w-50 h-42.5 shrink-0 bg-[#283655] rounded-xl p-5 flex flex-col justify-between select-none shadow-md border border-white/5 hover:border-[#C6A75E]/30 transition-colors duration-200"
                >
                  <span className="text-[32px] font-serif font-bold text-[#C6A75E]/40 group-hover:text-[#C6A75E] transition-colors duration-200 leading-none">
                    {rank}
                  </span>

                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold text-[#C6A75E] tracking-wider uppercase block">
                      {item.category || "Legal Insight"}
                    </span>
                    
                    <h3
                      className="text-[#FAF8F5] text-[14px] font-bold leading-snug line-clamp-2 group-hover:text-[#C6A75E] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-heading, serif)" }}
                    >
                      <Link
                        href={`/${locale}/blog/${item.slug}`}
                        draggable={false}
                      >
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrendingRail;