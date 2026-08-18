"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";

const FeaturedSpotlight = ({ article, locale }) => {
  // Safe Fallback Object
  const featured = {
    title:
      article?.title ||
      "Understanding Cyber Crime Protections in Modern Indian Law",
    excerpt:
      article?.excerpt ||
      "An in-depth analysis of legal remedies, procedural safeguards, and immediate actions to take when navigating complex legal challenges.",
    slug: article?.slug || "featured-article",
    category: article?.category || "Legal Insight",
    readTime: article?.readTime || "6 min read",
    date: article?.date
      ? new Date(article.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "12 Aug 2026",
    author: article?.author || "Advocate Bhanu Pratap Sagar",
    image:
      article?.image ||
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
  };

  return (
    <section className="relative w-full bg-[#E8DCC8] text-[#1F2A44] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-130">
        {/* Left Column: 55% Asymmetric Image */}
        <div className="lg:col-span-7 relative min-h-85 lg:min-h-full overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full relative min-h-85"
          >
            <div className="absolute inset-0 bg-[#1F2A44]/30 mix-blend-multiply z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[#C6A75E]/20 mix-blend-color z-10 pointer-events-none" />

            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </motion.div>
        </div>

        {/* Right Column: 45% Content Block */}
        <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-14 lg:p-20 bg-[#E8DCC8]">
          <div className="space-y-4 max-w-xl">
            {/* Badges Row */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="bg-[#72233B] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                EDITOR'S PICK
              </span>
              <span className="inline-flex items-center gap-1.5 border border-[#72233B] text-[#72233B] text-xs font-semibold px-3 py-0.5 rounded-full">
                <Scale size={12} className="text-[#72233B]" />
                {featured.category}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1F2A44] leading-tight"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              <Link
                href={`/${locale}/blog/${featured.slug}`}
                className="hover:text-[#72233B] transition-colors"
              >
                {featured.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-slate-700 text-[15px] leading-relaxed line-clamp-3">
              {featured.excerpt}
            </p>

            {/* Meta Row */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded-full bg-[#1F2A44] text-[#C6A75E] text-xs font-bold flex items-center justify-center shrink-0">
                BPS
              </div>
              <p className="text-slate-600 text-[12px] tracking-tight">
                <span className="font-semibold text-[#1F2A44]">
                  {featured.author}
                </span>{" "}
                · {featured.readTime} · {featured.date}
              </p>
            </div>

            {/* Read Article Link */}
            <div className="pt-3">
              <Link
                href={`/${locale}/blog/${featured.slug}`}
                className="group inline-flex items-center gap-2 text-[#72233B] font-bold text-sm tracking-wide transition-colors"
              >
                <span>Read Article</span>
                <motion.span
                  className="inline-block"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-200"
                  />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlight;