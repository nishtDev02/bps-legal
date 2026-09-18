"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Image as ImageIcon,
  Send,
  Loader2,
  AlertCircle,
  Sparkles,
  FileText,
  HelpCircle,
  Tag,
  BookOpen,
} from "lucide-react";

const categories = [
  "Cyber Law",
  "Criminal Law",
  "Bail Matters",
  "Family Law",
  "Immigration Law",
  "Consumer Law",
  "Corporate Law",
  "Arbitration & ADR",
  "Legal Drafting & Documentation",
  "Intellectual Property Rights (IPR)",
  "Cheque Bounce & Negotiable Instruments",
];

const inputClass =
  "w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-[#C6A75E] text-[#1F2A44] text-xs placeholder:text-[#64748B] outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all";
const labelClass =
  "block text-[11px] font-bold text-[#1F2A44] uppercase tracking-wider mb-1";
const sectionClass =
  "bg-[#FAF8F5] text-[#1F2A44] rounded-[16px] p-6 shadow-2xl shadow-black/40 border border-[#C6A75E]/30 space-y-4 relative";
const sectionTitleClass =
  "text-sm font-bold text-[#1F2A44] flex items-center gap-2 border-b border-[#C6A75E]/20 pb-2.5";

const BlogForm = ({ initialData, blogId }) => {
  const router = useRouter();
  const isEditMode = Boolean(blogId);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    subtitle: initialData?.subtitle || "",
    slug: initialData?.slug || "",
    category: initialData?.category || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    locale: initialData?.locale || "en",
    topic: initialData?.topic || "",
    relevantLaw: initialData?.relevantLaw || "",
    keyTakeaways: initialData?.keyTakeaways?.join("\n") || "",
    relevantSections: initialData?.relevantSections?.join("\n") || "",
    tags: initialData?.tags?.join("\n") || "",
  });

  const [faqs, setFaqs] = useState(
    initialData?.faqs?.length ? initialData.faqs : []
  );

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FAQ helpers
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const payload = {
      ...formData,
      keyTakeaways: formData.keyTakeaways
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      relevantSections: formData.relevantSections
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      tags: formData.tags
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      faqs: faqs.filter((f) => f.question.trim() && f.answer.trim()),
    };

    const url = isEditMode ? `/api/blogs/${blogId}` : "/api/blogs";
    const method = isEditMode ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch (error) {
      setError("Network error, please try again");
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-3xl mx-auto"
    >
      {/* 1. BASIC INFO SECTION */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
          <FileText size={16} className="text-[#C6A75E]" />
          <span>Basic Article Details</span>
        </h3>

        {/* Title */}
        <div>
          <label className={labelClass}>
            Article Title <span className="text-[#C6A75E]">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g. Navigating Cyber Fraud Laws in 2026"
            className={inputClass}
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className={labelClass}>Subtitle / Brief Description</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="One-line summary shown right below the main title"
            className={inputClass}
          />
        </div>

        {/* Slug */}
        <div>
          <label className={labelClass}>
            URL Slug <span className="text-[#C6A75E]">*</span>
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            placeholder="e.g. navigating-cyber-fraud-laws-2026"
            className={inputClass}
          />
        </div>

        {/* Category & Language Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Category <span className="text-[#C6A75E]">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Language <span className="text-[#C6A75E]">*</span>
            </label>
            <select
              name="locale"
              value={formData.locale}
              onChange={handleChange}
              required
              className={`${inputClass} cursor-pointer`}
            >
              <option value="en">English</option>
              <option value="hinglish">Hinglish</option>
            </select>
          </div>
        </div>

        {/* Cover Image */}
        <div>
          <label className={labelClass}>Cover Image</label>
          {formData.coverImage && (
            <div className="relative mb-3 rounded-[10px] overflow-hidden border border-[#C6A75E]/40 group max-h-52">
              <img
                src={formData.coverImage}
                alt="Cover preview"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            onSuccess={(result) => {
              setFormData((prev) => ({
                ...prev,
                coverImage: result.info.secure_url,
              }));
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs font-bold hover:bg-[#C6A75E]/10 transition cursor-pointer"
              >
                <ImageIcon size={15} className="text-[#C6A75E]" />
                <span>{formData.coverImage ? "Change Image" : "Upload Image"}</span>
              </button>
            )}
          </CldUploadWidget>
        </div>

        {/* Excerpt */}
        <div>
          <label className={labelClass}>
            Excerpt / Meta Description <span className="text-[#C6A75E]">*</span>
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={2}
            placeholder="Short introductory summary for cards and search engines..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Main Content */}
        <div>
          <label className={labelClass}>
            Main Content (Markdown supported: ## for headings, - for lists) <span className="text-[#C6A75E]">*</span>
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            placeholder="Write article content here..."
            className={`${inputClass} font-mono`}
          />
        </div>
      </div>

      {/* 2. ARTICLE AT A GLANCE SECTION */}
      <div className={sectionClass}>
        <div>
          <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
            <Sparkles size={16} className="text-[#C6A75E]" />
            <span>Article at a Glance</span>
          </h3>
          <p className="text-[10px] text-[#1F2A44]/60 mt-1">
            Optional — Displays in the quick summary box on the article page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Criminal Procedure Reform"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Relevant Law</label>
            <input
              type="text"
              name="relevantLaw"
              value={formData.relevantLaw}
              onChange={handleChange}
              placeholder="e.g. BNSS, 2023 / BNS"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* 3. KEY TAKEAWAYS SECTION */}
      <div className={sectionClass}>
        <div>
          <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
            <BookOpen size={16} className="text-[#C6A75E]" />
            <span>Key Takeaways</span>
          </h3>
          <p className="text-[10px] text-[#1F2A44]/60 mt-1">
            Optional — Enter one takeaway point per line.
          </p>
        </div>
        <textarea
          name="keyTakeaways"
          value={formData.keyTakeaways}
          onChange={handleChange}
          rows={4}
          placeholder={
            "BNSS has replaced the CrPC with revised bail timelines\nFirst-time offenders now have clearer eligibility criteria"
          }
          className={inputClass}
        />
      </div>

      {/* 4. RELEVANT SECTIONS */}
      <div className={sectionClass}>
        <div>
          <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
            <Tag size={16} className="text-[#C6A75E]" />
            <span>Relevant Sections / Acts Referenced</span>
          </h3>
          <p className="text-[10px] text-[#1F2A44]/60 mt-1">
            Optional — Enter one legal section per line.
          </p>
        </div>
        <textarea
          name="relevantSections"
          value={formData.relevantSections}
          onChange={handleChange}
          rows={3}
          placeholder={"Section 480, BNSS\nSection 482, BNSS"}
          className={inputClass}
        />
      </div>

      {/* 5. FAQS SECTION */}
      <div className={sectionClass}>
        <div>
          <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
            <HelpCircle size={16} className="text-[#C6A75E]" />
            <span>Frequently Asked Questions</span>
          </h3>
          <p className="text-[10px] text-[#1F2A44]/60 mt-1">
            Optional — Add collapsible Q&A items for legal readers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#C6A75E]/30 rounded-[10px] bg-white p-3.5 space-y-2.5 relative shadow-sm"
            >
              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="absolute top-3 right-3 text-rose-500 hover:text-rose-700 transition"
                aria-label="Remove FAQ"
              >
                <Trash2 size={15} />
              </button>

              <div>
                <label className="block text-[10px] font-bold text-[#1F2A44]/70 uppercase mb-1">
                  Question #{index + 1}
                </label>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => updateFaq(index, "question", e.target.value)}
                  placeholder="e.g. Can I apply for anticipatory bail under BNSS?"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#1F2A44]/70 uppercase mb-1">
                  Answer
                </label>
                <textarea
                  value={faq.answer}
                  onChange={(e) => updateFaq(index, "answer", e.target.value)}
                  rows={2}
                  placeholder="Provide a concise legal answer..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addFaq}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F2A44] border border-[#C6A75E] bg-white px-3.5 py-2 rounded-lg hover:bg-[#C6A75E]/10 transition cursor-pointer"
        >
          <Plus size={15} className="text-[#C6A75E]" />
          <span>Add FAQ Item</span>
        </button>
      </div>

      {/* 6. TAGS SECTION */}
      <div className={sectionClass}>
        <div>
          <h3 className={sectionTitleClass} style={{ fontFamily: "var(--font-heading, serif)" }}>
            <Tag size={16} className="text-[#C6A75E]" />
            <span>Search Tags</span>
          </h3>
          <p className="text-[10px] text-[#1F2A44]/60 mt-1">
            Optional — Enter one keyword per line (do not include `#`).
          </p>
        </div>
        <textarea
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          rows={3}
          placeholder={"Bail\nBNSS2023\nCriminalLaw"}
          className={inputClass}
        />
      </div>

      {/* ERROR ALERT */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-3 text-xs"
          >
            <AlertCircle size={16} className="text-rose-600 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 px-6 rounded-full bg-[#72233B] text-[#FAF8F5] text-xs font-bold tracking-wide uppercase shadow-lg shadow-black/30 hover:bg-[#8B2D4A] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin text-[#FAF8F5]" />
            <span>Processing Post...</span>
          </>
        ) : (
          <>
            <Send size={15} className="text-[#FAF8F5]" />
            <span>{isEditMode ? "Update Article" : "Publish Article"}</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default BlogForm;