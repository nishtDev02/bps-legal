"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    // Simulated API call delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");

      // Reset back to idle state after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 600);
  };

  return (
    <section className="relative w-full bg-[#72233B] text-[#FAF8F5] py-25 px-6 md:px-10 overflow-hidden">
      <div className="max-w-140 mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-[32px] font-bold text-[#FAF8F5] leading-tight"
          style={{ fontFamily: "var(--font-heading, serif)" }}
        >
          Stay Ahead of the Law.
        </h2>

        {/* Subtitle */}
        <p className="text-[#C6A75E] text-[15px] leading-relaxed mt-3 mb-8">
          Get practical legal insights delivered straight to your inbox — no jargon, no spam.
        </p>

        {/* Unified Pill-Shaped Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center bg-white/10 backdrop-blur-md border border-[#C6A75E]/30 rounded-full p-1.5 focus-within:border-[#C6A75E] transition-colors duration-200 shadow-lg"
        >
          {/* Email Input Field */}
          <div className="relative flex-1 flex items-center pl-4 pr-2">
            <Mail size={18} className="text-[#C6A75E] shrink-0 mr-2.5" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full bg-transparent text-[#FAF8F5] placeholder:text-[#FAF8F5]/60 text-sm focus:outline-none"
            />
          </div>

          {/* Morphing Subscribe Button */}
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
            className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide shrink-0 transition-all duration-300 cursor-pointer min-w-32.5 h-11 ${
              status === "success"
                ? "bg-[#C6A75E] text-[#1F2A44]"
                : "bg-[#FAF8F5] text-[#72233B] hover:bg-[#C6A75E] hover:text-[#1F2A44]"
            }`}
          >
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-4 h-4 border-2 border-[#72233B] border-t-transparent rounded-full animate-spin"
                />
              )}

              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5"
                >
                  <Check size={16} className="stroke-3" />
                  <span>Subscribed</span>
                </motion.span>
              )}

              {status === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Subscribe
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterCTA;