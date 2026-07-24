"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogsGrid({ locale, t, blogsData }) {
  if (!blogsData?.length) return null;

  return (
    <section className="relative bg-(--color-bg) px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#E8B84B]" />
            <span className="text-[#E8B84B] uppercase tracking-[0.3em] text-xs font-semibold">
              Insights
            </span>
            <span className="h-px w-8 bg-[#E8B84B]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {t.blogHeading}
          </h2>
        </motion.div>

        {/* blog cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {blogsData.map((blog) => (
            <motion.div key={blog.slug} variants={card}>
              <Link
                href={`/${locale}/blog/${blog.slug}`}
                className="group bg-(--color-bg-secondary) border border-(--color-text-secondary)/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-[#E8B84B] hover:shadow-2xl hover:shadow-[#E8B84B]/10 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* dark gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  {/* category chip */}
                  <span className="absolute top-4 left-4 bg-[#E8B84B] text-[#111111] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-[#E8B84B] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-(--color-text-secondary) text-sm line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <span className="text-[#E8B84B] text-sm font-semibold inline-flex items-center gap-1 mt-auto pt-3">
                    Read Article
                    <span className="inline-block transition-transform group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-2 text-[#E8B84B] font-semibold"
          >
            <span className="relative">
              {t.blogCta}
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#E8B84B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
