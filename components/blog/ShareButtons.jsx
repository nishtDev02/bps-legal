"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.481 1.34 4.997L2 22l5.144-1.35a9.96 9.96 0 004.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm5.847 15.845a8.3 8.3 0 01-5.847 2.418h-.003a8.34 8.34 0 01-4.25-1.164l-.305-.181-3.152.827.842-3.075-.198-.315a8.32 8.32 0 01-1.276-4.44c0-4.596 3.741-8.337 8.34-8.337 2.226 0 4.318.868 5.892 2.443a8.28 8.28 0 012.442 5.892 8.3 8.3 0 01-2.485 5.932z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ShareButtons = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-[#6E2C3E]/15 shadow-xs">
      
      {/* Share Label */}
      <span className="text-[11px] font-bold text-[#6E2C3E] uppercase tracking-wider pl-3 pr-1 select-none">
        Share
      </span>

      {/* WhatsApp Button */}
      <div className="relative flex items-center justify-center">
        <motion.a
          href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          onMouseEnter={() => setActiveTooltip("whatsapp")}
          onMouseLeave={() => setActiveTooltip(null)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E2C3E] bg-[#6E2C3E]/5 hover:bg-[#6E2C3E] hover:text-white transition-colors duration-200"
        >
          <WhatsAppIcon />
        </motion.a>

        {/* Tooltip */}
        <AnimatePresence>
          {activeTooltip === "whatsapp" && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1F2A44] text-[#FAF8F5] text-[10px] font-medium rounded shadow-md pointer-events-none whitespace-nowrap z-30"
            >
              WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* LinkedIn Button */}
      <div className="relative flex items-center justify-center">
        <motion.a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          onMouseEnter={() => setActiveTooltip("linkedin")}
          onMouseLeave={() => setActiveTooltip(null)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E2C3E] bg-[#6E2C3E]/5 hover:bg-[#6E2C3E] hover:text-white transition-colors duration-200"
        >
          <LinkedinIcon />
        </motion.a>

        {/* Tooltip */}
        <AnimatePresence>
          {activeTooltip === "linkedin" && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1F2A44] text-[#FAF8F5] text-[10px] font-medium rounded shadow-md pointer-events-none whitespace-nowrap z-30"
            >
              LinkedIn
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Copy Link Button */}
      <div className="relative flex items-center justify-center">
        <motion.button
          onClick={handleCopy}
          aria-label="Copy link"
          onMouseEnter={() => setActiveTooltip("copy")}
          onMouseLeave={() => setActiveTooltip(null)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
            copied
              ? "bg-[#6E2C3E] text-white"
              : "bg-[#6E2C3E]/5 text-[#6E2C3E] hover:bg-[#6E2C3E] hover:text-white"
          }`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Check size={15} className="stroke-[2.5]" />
              </motion.span>
            ) : (
              <motion.span
                key="link"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <LinkIcon size={15} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {activeTooltip === "copy" && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1F2A44] text-[#FAF8F5] text-[10px] font-medium rounded shadow-md pointer-events-none whitespace-nowrap z-30"
            >
              {copied ? "Copied!" : "Copy Link"}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ShareButtons;