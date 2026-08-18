"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Scale, ShieldAlert, Users, Briefcase, FileText, Gavel } from "lucide-react";

// Practice Area Icons Mapping
const CATEGORY_ICONS = {
  "Cyber Law": ShieldAlert,
  "Criminal Law": Gavel,
  "Family Law": Users,
  "Corporate Law": Briefcase,
  "Bail Matters": FileText,
  "Legal Insight": Scale,
};

const ArticlesGrid = ({ articles = [], locale = "en" }) => {
  // Demo Fallback Data if MongoDB list is empty
  const dummyArticles = [
    {
      title: "How to File for Anticipatory Bail in High Court Proceedings",
      excerpt: "A comprehensive guide on section 438 IPC safeguards, necessary documentation, and procedural strategies for urgent bail applications.",
      slug: "filing-anticipatory-bail-guide",
      category: "Bail Matters",
      readTime: "5 min read",
      date: "14 Aug 2026",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Governance & Compliance Trends for Startup Founders",
      excerpt: "Essential legal checklists for directors, regulatory compliance requirements, and risk mitigation strategies in Indian corporate structure.",
      slug: "corporate-governance-startup-trends",
      category: "Corporate Law",
      readTime: "7 min read",
      date: "10 Aug 2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Child Custody Laws: Navigating Mediation & Family Court Orders",
      excerpt: "Understanding child welfare principles, joint custody arrangements, and legal rights of parents in family law disputes.",
      slug: "child-custody-laws-family-court",
      category: "Family Law",
      readTime: "6 min read",
      date: "05 Aug 2026",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const displayList = articles.length > 0 ? articles : dummyArticles;

  return (
    <section className="w-full bg-[#FAF8F5] py-25 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayList.map((item, index) => {
            const Icon = CATEGORY_ICONS[item.category] || Scale;
            const columnIndex = index % 3; // 0 (left), 1 (center), 2 (right)

            return (
              <motion.article
                key={item.slug || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: columnIndex * 0.08, // Staggered wave effect (left -> center -> right)
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-t-2xl rounded-b-xl overflow-hidden shadow-[0_4px_20px_rgba(31,42,68,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container (4:3 Ratio, Rounded Top Corners) */}
                  <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-2xl">
                    {/* Light Duotone Overlays */}
                    <div className="absolute inset-0 bg-[#1F2A44]/20 mix-blend-multiply z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-[#C6A75E]/15 mix-blend-color z-10 pointer-events-none" />

                    <Image
                      src={
                        item.image ||
                        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category Tag Pill (Frosted glass floating over bottom-left) */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/80 text-[#72233B] border border-white/40 group-hover:bg-[#72233B] group-hover:text-[#FAF8F5] transition-colors duration-300">
                        <Icon size={13} className="shrink-0" />
                        {item.category || "Legal Insight"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col">
                    {/* Title */}
                    <h3
                      className="text-[#1F2A44] text-[18px] font-bold leading-snug line-clamp-2 group-hover:text-[#72233B] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-heading, serif)" }}
                    >
                      <Link href={`/${locale}/blog/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-2 mt-2">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Section with Divider */}
                <div className="p-5 pt-0">
                  {/* Hairline Gold Divider */}
                  <div className="w-full h-px bg-[#C6A75E]/30 my-3" />

                  {/* Meta Row */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#1F2A44] text-[#C6A75E] text-[9px] font-bold flex items-center justify-center shrink-0">
                        BPS
                      </div>
                      <span>{item.date || "12 Aug 2026"}</span>
                    </div>

                    {/* Read Time Creative Chip */}
                    <span className="inline-flex items-center gap-1 bg-[#C6A75E]/15 text-[#72233B] font-medium px-2 py-0.5 rounded-full">
                      <Clock size={11} className="shrink-0" />
                      {item.readTime || "6 min read"}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;