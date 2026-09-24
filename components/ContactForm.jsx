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
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name + Phone (2-column row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[11px] font-bold text-[#FFFFF0] uppercase tracking-wider mb-1"
            >
              Full Name <span className="text-[#C6A75E]">*</span>
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40 pointer-events-none"
              />
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Bhanu Pratap"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs placeholder:text-[#64748B] outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[11px] font-bold text-[#FFFFF0] uppercase tracking-wider mb-1"
            >
              Phone Number <span className="text-[#C6A75E]">*</span>
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40 pointer-events-none"
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
                placeholder="+91 98765 43210"
                title="Enter a valid 10-digit mobile number"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs placeholder:text-[#64748B] outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Email (Full width) */}
        <div>
          <label
            htmlFor="email"
            className="block text-[11px] font-bold text-[#FFFFF0] uppercase tracking-wider mb-1"
          >
            Email Address <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40 pointer-events-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="bhanu@gmail.com"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs placeholder:text-[#64748B] outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all"
            />
          </div>
        </div>

        {/* Practice Area (Dropdown, Full width) */}
        <div>
          <label
            htmlFor="caseType"
            className="block text-[11px] font-bold text-[#FFFFF0] uppercase tracking-wider mb-1"
          >
            Practice Area <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <FileText
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2A44]/40 pointer-events-none"
            />
            <select
              name="caseType"
              id="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select a Legal Category
              </option>
              {caseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1F2A44]/40 text-[10px]">
              ▼
            </div>
          </div>
        </div>

        {/* Message (Textarea, Full width) */}
        <div>
          <label
            htmlFor="message"
            className="block text-[11px] font-bold text-[#FFFFF0] uppercase tracking-wider mb-1"
          >
            Message <span className="text-[#C6A75E]">*</span>
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-3.5 top-3 text-[#1F2A44]/40 pointer-events-none"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Briefly describe your legal query..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white border border-[#C6A75E] text-[#1F2A44] text-xs placeholder:text-[#64748B] outline-none focus:ring-2 focus:ring-[#C6A75E]/40 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button (Solid Wine, full-width pill) */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
          className="w-full py-3.5 px-6 rounded-full bg-[#72233B] text-[#FAF8F5] text-xs font-bold tracking-wide uppercase shadow-md hover:bg-[#8B2D4A] transition-colors cursor-pointer mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin text-[#FAF8F5]" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send size={15} className="text-[#FAF8F5]" />
              <span>Send Message</span>
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
              className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-3 text-xs"
            >
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Request Sent Successfully!</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">
                  Thank you for reaching out. Our legal team will review your details and contact you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-3 text-xs"
            >
              <AlertCircle size={18} className="text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to Send Message</p>
                <p className="text-[11px] text-rose-700 mt-0.5">
                  Something went wrong. Please check your connection or contact us directly via WhatsApp / Call.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="pt-3 border-t border-[#1F2A44]/10 grid grid-cols-2 gap-2 text-[11px] text-[#1F2A44]/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#C6A75E] shrink-0" />
            <span>100% Privilege</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={15} className="text-[#C6A75E] shrink-0" />
            <span>Response &lt; 24 Hrs</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;