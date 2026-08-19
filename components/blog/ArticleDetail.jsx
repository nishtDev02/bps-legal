"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import {
  Shield,
  Scale,
  Key,
  Heart,
  Globe,
  Tag as TagIcon,
  Briefcase,
  Handshake,
  FileSignature,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";

import ArticleAtAGlance from "./ArticleAtAGlance";
import ShareButtons from "./ShareButtons";
import FAQAccordion from "./FAQAccordion";
import { calculateReadTime } from "@/lib/readTime";

const iconMap = {
  Shield,
  Scale,
  Key,
  Heart,
  Globe,
  Tag: TagIcon,
  Briefcase,
  Handshake,
  FileSignature,
  Lightbulb,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ArticleDetail = ({
  blog,
  categoryIcon,
  relatedArticles = [],
  locale,
  currentUrl,
}) => {
  const Icon = iconMap[categoryIcon] || TagIcon;
  const readTime = calculateReadTime(blog?.content || "");
  const updatedAt = blog?.updatedAt
    ? new Date(blog.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  const initials = blog?.author
    ? blog.author
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "BPS";

  return (
    <article className="min-h-screen bg-[#FAF6EF] text-[#101828] selection:bg-[#6E2C3E] selection:text-[#FAF6EF]">
      {/* 1. ARTICLE HEADER SECTION */}
      <section className="relative pt-32 md:pt-40 pb-8 px-6 md:px-12 overflow-hidden">
        {/* Ambient Top Glow */}
        <div
          className="absolute top-0 right-0 w-125 h-125 pointer-events-none opacity-40 blur-3xl z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(110,44,62,0.12) 0%, rgba(227,201,138,0.05) 50%, transparent 70%)",
          }}
        />

        <div className="relative max-w-190 mx-auto z-10">
          {/* Category Chip */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-1.5 border border-[#6E2C3E]/30 bg-[#6E2C3E]/5 text-[#6E2C3E] rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider">
              <Icon size={14} strokeWidth={1.8} />
              {blog.category}
            </span>
          </motion.div>

          {/* Article Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#101828] leading-[1.2] mt-4 mb-3"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            {blog.title}
          </motion.h1>

          {/* Article Subtitle */}
          {blog.subtitle && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-[#5C6472] text-base md:text-[17px] leading-relaxed mb-6 font-normal"
            >
              {blog.subtitle}
            </motion.p>
          )}

          {/* Author Metadata Bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#101828]/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#101828] text-[#E3C98A] flex items-center justify-center text-[11px] font-bold tracking-wider shadow-xs">
                {initials}
              </div>
              <div className="flex items-center gap-2 text-[#5C6472] text-xs font-medium">
                <span className="text-[#101828] font-semibold">{blog.author}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} className="text-[#6E2C3E]" />
                  {updatedAt}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} className="text-[#6E2C3E]" />
                  {readTime} min read
                </span>
              </div>
            </div>

            <ShareButtons title={blog.title} url={currentUrl} />
          </motion.div>

          {/* Main Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full h-65 sm:h-95 md:h-105 rounded-2xl overflow-hidden mt-8 shadow-md border border-[#101828]/10"
          >
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. AT A GLANCE SUMMARY BOX */}
      <section className="px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-190 mx-auto"
        >
          <ArticleAtAGlance
            category={blog.category}
            topic={blog.topic}
            relevantLaw={blog.relevantLaw}
            readTime={readTime}
            updatedAt={updatedAt}
          />
        </motion.div>
      </section>

      {/* 3. MARKDOWN CONTENT BODY */}
      <section className="px-6 md:px-12 py-4">
        <div className="max-w-180 mx-auto prose-custom">
          <Markdown
            components={{
              h2: ({ children }) => (
                <div className="flex items-center gap-3 mt-10 mb-4 pt-4 border-t border-[#101828]/10">
                  <span className="w-1 h-6 bg-[#6E2C3E] rounded-full shrink-0" />
                  <h2
                    className="text-xl md:text-2xl font-bold text-[#101828]"
                    style={{ fontFamily: "var(--font-heading, serif)" }}
                  >
                    {children}
                  </h2>
                </div>
              ),
              h3: ({ children }) => (
                <h3
                  className="text-lg md:text-xl font-semibold text-[#101828] mt-6 mb-3"
                  style={{ fontFamily: "var(--font-heading, serif)" }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[#5C6472] text-[15.5px] leading-[1.8] mb-5">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2.5 my-5 pl-1">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-2.5 text-[#5C6472] text-[15px] leading-[1.75]">
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#6E2C3E] mt-1 shrink-0"
                  />
                  <span>{children}</span>
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-6 p-4 border-l-2 border-[#C6A75E] bg-[#EDE4D3]/40 rounded-r-lg italic text-[#101828]">
                  {children}
                </blockquote>
              ),
            }}
          >
            {blog.content}
          </Markdown>
        </div>
      </section>

      {/* 4. KEY TAKEAWAYS */}
      {blog.keyTakeaways?.length > 0 && (
        <section className="px-6 md:px-12 my-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-180 mx-auto bg-white border-l-4 border-[#C6A75E] rounded-r-2xl p-6 shadow-xs border-y border-r"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-full bg-[#6E2C3E]/10 text-[#6E2C3E]">
                <Lightbulb size={16} strokeWidth={2} />
              </div>
              <h3
                className="text-[#101828] text-base font-bold tracking-wide"
                style={{ fontFamily: "var(--font-heading, serif)" }}
              >
                Key Takeaways
              </h3>
            </div>
            <ul className="space-y-2.5 list-disc pl-5">
              {blog.keyTakeaways.map((point, i) => (
                <li
                  key={i}
                  className="text-[#5C6472] text-[14px] leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* 5. RELEVANT SECTIONS REFERENCED */}
      {blog.relevantSections?.length > 0 && (
        <section className="px-6 md:px-12 my-6">
          <div className="max-w-180 mx-auto">
            <p
              className="text-[#6E2C3E] text-[10px] uppercase font-bold tracking-[1.5px] mb-3"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              Relevant Sections Referenced
            </p>
            <div className="flex flex-wrap gap-2">
              {blog.relevantSections.map((sec) => (
                <span
                  key={sec}
                  className="bg-white border border-[#C6A75E]/50 rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#101828] shadow-2xs"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQS ACCORDION */}
      {blog.faqs?.length > 0 && (
        <section className="px-6 md:px-12 mt-10">
          <div className="max-w-180 mx-auto">
            <h3
              className="text-[#101828] text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              Common Questions
            </h3>
            <FAQAccordion faqs={blog.faqs} />
          </div>
        </section>
      )}

      {/* 7. LEGAL DISCLAIMER */}
      <section className="px-6 md:px-12 mt-8">
        <div className="max-w-180 mx-auto pt-5 border-t border-[#101828]/10">
          <p className="text-[#5C6472] text-[11px] leading-relaxed italic bg-[#EDE4D3]/30 p-3.5 rounded-lg border border-[#101828]/5">
            <strong>Disclaimer:</strong> This article is published for general informational purposes only and does not constitute formal legal advice. Readers should consult a qualified legal practitioner regarding specific matters before taking action.
          </p>
        </div>
      </section>

      {/* 8. AUTHOR BIO CARD */}
      <section className="px-6 md:px-12 mt-8">
        <div className="max-w-180 mx-auto bg-[#101828] rounded-2xl p-6 flex items-center gap-4 border border-[#C6A75E]/20 shadow-md">
          <div className="w-12 h-12 rounded-full bg-[#C6A75E] text-[#101828] flex items-center justify-center text-base font-bold shrink-0 shadow-inner">
            {initials}
          </div>
          <div>
            <p
              className="text-[#FAF8F5] text-base font-bold"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              {blog.author}
            </p>
            <p className="text-[#C6A75E] text-xs mt-0.5 leading-normal">
              Legal Practitioner specializing in Litigation, Corporate Law, and Constitutional Law across Delhi and High Courts.
            </p>
          </div>
        </div>
      </section>

      {/* 9. TAGS */}
      {blog.tags?.length > 0 && (
        <section className="px-6 md:px-12 mt-6">
          <div className="max-w-180 mx-auto flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#6E2C3E]/10 text-[#6E2C3E] rounded-full px-3.5 py-1 text-xs font-semibold hover:bg-[#6E2C3E] hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 10. RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="px-6 md:px-12 mt-14">
          <div className="max-w-190 mx-auto">
            <h3
              className="text-[#101828] text-xl font-bold mb-5"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${locale}/blog/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#101828]/8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-32 overflow-hidden bg-gray-100">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 250px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[#6E2C3E] text-[11px] font-bold uppercase tracking-wider mb-1.5">
                        {related.category}
                      </p>
                      <h4 className="text-[#101828] text-sm font-semibold leading-snug group-hover:text-[#6E2C3E] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-0 flex items-center text-[#6E2C3E] text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. CLOSING CONSULTATION CTA */}
      <section className="px-6 md:px-12 mt-14 pb-20">
        <div className="max-w-190 mx-auto bg-[#6E2C3E] rounded-[20px] p-8 md:p-10 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3
              className="text-[#FAF8F5] text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading, serif)" }}
            >
              Need Tailored Legal Advice?
            </h3>
            <p className="text-[#C6A75E] text-sm md:text-base mt-2 max-w-md mx-auto">
              Our team of experienced advocates is ready to assist you with dedicated counsel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-6">
              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto bg-[#FAF8F5] text-[#6E2C3E] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#C6A75E] hover:text-[#101828] transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto border border-[#FAF8F5]/40 text-[#FAF8F5] font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#FAF8F5]/10 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticleDetail;