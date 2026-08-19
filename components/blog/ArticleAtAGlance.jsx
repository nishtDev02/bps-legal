"use client";

import React from "react";
import { Clock, BookOpen, Scale, Calendar, Tag } from "lucide-react";

const ArticleAtAGlance = ({
  category,
  topic,
  relevantLaw,
  readTime,
  updatedAt,
}) => {
  const items = [
    { label: "Practice Area", value: category, icon: BookOpen },
    { label: "Topic", value: topic, icon: Tag },
    { label: "Relevant Law", value: relevantLaw, icon: Scale },
    {
      label: "Reading Time",
      value: readTime ? `${readTime} min read` : null,
      icon: Clock,
      isPill: true,
    },
    { label: "Last Updated", value: updatedAt, icon: Calendar },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <div className="relative overflow-hidden bg-[#EDE4D3]/90 backdrop-blur-xs border border-[#6E2C3E]/15 rounded-2xl p-5 md:p-6 shadow-xs my-6">
      {/* Top Editorial Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C6A75E]" />

      {/* Header Label */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#6E2C3E]/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6E2C3E]" />
        <h4
          className="text-[#6E2C3E] text-[11px] font-bold uppercase tracking-[1.8px]"
          style={{ fontFamily: "var(--font-heading, serif)" }}
        >
          Article At A Glance
        </h4>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col justify-start">
              {/* Category Label */}
              <div className="flex items-center gap-1.5 mb-1.5">
                {Icon && (
                  <Icon size={12} className="text-[#6E2C3E]/70 shrink-0" />
                )}
                <p className="text-[#6E2C3E]/80 text-[10px] uppercase font-bold tracking-[1.2px]">
                  {item.label}
                </p>
              </div>

              {/* Category Value */}
              {item.isPill ? (
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#6E2C3E]/10 text-[#6E2C3E] text-[12px] font-semibold">
                    {item.value}
                  </span>
                </div>
              ) : (
                <p className="text-[#1F2A44] text-[13px] font-semibold leading-snug">
                  {item.value}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleAtAGlance;