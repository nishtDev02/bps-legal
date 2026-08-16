"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock,
} from "lucide-react";

const ContactForm = ({ locale, t }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const caseTypes = [
    "Criminal Law",
    "Cyber Law",
    "Bail Matters",
    "FIR & Police Matters",
    "Cyber Fraud",
    "Legal Consultation",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          caseType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44] mb-2"
          >
            Full Name <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <User
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40"
            />
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Adv. / Mr. / Ms. John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-[#1F2A44]/15 bg-[#F9F9FB] text-[#1F2A44] placeholder:text-[#1F2A44]/40 text-sm focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44] mb-2"
            >
              Phone Number <span className="text-[#C6A75E]">*</span>
            </label>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                placeholder="10-digit mobile number"
                title="Enter a valid 10-digit mobile number"
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-[#1F2A44]/15 bg-[#F9F9FB] text-[#1F2A44] placeholder:text-[#1F2A44]/40 text-sm focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44] mb-2"
            >
              Email Address <span className="text-[#C6A75E]">*</span>
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-[#1F2A44]/15 bg-[#F9F9FB] text-[#1F2A44] placeholder:text-[#1F2A44]/40 text-sm focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Case Type Select */}
        <div>
          <label
            htmlFor="caseType"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44] mb-2"
          >
            Practice Area / Matter Type <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <FileText
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40 pointer-events-none"
            />
            <select
              name="caseType"
              id="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-10 py-3.5 rounded-lg border border-[#1F2A44]/15 bg-[#F9F9FB] text-[#1F2A44] text-sm appearance-none focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-200 cursor-pointer"
            >
              <option value="" disabled>
                Select relevant category...
              </option>
              {caseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1F2A44]/40">
              ▼
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44] mb-2"
          >
            Brief Case Summary / Consultation Note <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-3.5 top-4 text-[#1F2A44]/40"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Provide a brief overview of your query or legal assistance required..."
              className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-[#1F2A44]/15 bg-[#F9F9FB] text-[#1F2A44] placeholder:text-[#1F2A44]/40 text-sm focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-200 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
          style={{
            background: "linear-gradient(135deg, #E0C179 0%, #C6A75E 100%)",
          }}
          className="w-full text-[#1F2A44] font-bold py-4 px-6 rounded-lg shadow-lg shadow-[#C6A75E]/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin text-[#1F2A44]" />
              <span>Processing Request...</span>
            </>
          ) : (
            <>
              <Send size={18} className="text-[#1F2A44]" />
              <span>Book Consultation Now</span>
            </>
          )}
        </motion.button>

        {/* Status Alerts */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 text-sm"
            >
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Request Sent Successfully!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Thank you for reaching out. Our legal team will review your case details and contact you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-4 text-sm"
            >
              <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to Send Message</p>
                <p className="text-xs text-rose-700 mt-0.5">
                  Something went wrong. Please check your network or reach out directly via WhatsApp / Call.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="pt-2 border-t border-[#1F2A44]/10 grid grid-cols-2 gap-4 text-xs text-[#1F2A44]/60">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#C6A75E] shrink-0" />
            <span>100% Attorney-Client Privilege</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#C6A75E] shrink-0" />
            <span>Typical Response: &lt; 24 Hrs</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;