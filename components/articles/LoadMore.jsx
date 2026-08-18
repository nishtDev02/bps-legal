"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LoadMore = ({ onLoadMore, hasMore = true }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      if (onLoadMore) {
        await onLoadMore();
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasMore) return null;

  return (
    <section className="w-full bg-[#FAF8F5] py-15 flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        disabled={isLoading}
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: isLoading ? 1 : 0.98 }}
        className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full border-[1.5px] border-[#72233B] text-[#72233B] font-semibold text-sm tracking-wide transition-colors duration-200 hover:bg-[#72233B] hover:text-[#FAF8F5] cursor-pointer disabled:cursor-not-allowed min-w-52.5 h-12"
      >
        {isLoading ? (
          /* Staggered 3-Dot Loading Pulse */
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-[#72233B] group-hover:bg-[#FAF8F5]"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        ) : (
          <span>Load More Articles</span>
        )}
      </motion.button>
    </section>
  );
};

export default LoadMore;