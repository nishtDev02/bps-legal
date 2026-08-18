import React from "react";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

import ArticleHero from "@/components/articles/ArticleHero";
import FeaturedSpotlight from "@/components/articles/FeaturedSpotlight";
import CategoryFilterBar from "@/components/articles/CategoryFilterBar";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import TrendingRail from "@/components/articles/TrendingRail";
import LoadMore from "@/components/articles/LoadMore";
import NewsLetterCTA from "@/components/articles/NewsLetterCTA";

const ArticlesPage = async ({ params }) => {
  const { locale } = await params;

  // DB Connection & Fetch
  await connectDB();
  const blogs = await Blog.find({ locale: locale }).sort({ createdAt: -1 });
  const blogsData = JSON.parse(JSON.stringify(blogs));

  // Extract Featured Article (or default to newest)
  const featuredArticle =
    blogsData.find((b) => b.isFeatured) || blogsData[0] || null;

  // Grid Articles (Excluding featured from main list if available)
  const gridArticles = blogsData.filter(
    (b) => b.slug !== featuredArticle?.slug
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F2A44] selection:bg-[#72233B] selection:text-[#FAF8F5]">
      {/* SECTION 1 — HERO */}
      <ArticleHero />

      {/* SECTION 2 — FEATURED ARTICLE SPOTLIGHT */}
      <FeaturedSpotlight article={featuredArticle} locale={locale} />

      {/* SECTION 3 — CATEGORY FILTER BAR */}
      <CategoryFilterBar />

      {/* SECTION 4 — ARTICLE GRID */}
      <ArticlesGrid articles={gridArticles} locale={locale} />

      {/* SECTION 5 — TRENDING THIS WEEK */}
      <TrendingRail trendingArticles={blogsData} locale={locale} />

      {/* SECTION 6 — PAGINATION / LOAD MORE */}
      <LoadMore />

      {/* SECTION 7 — NEWSLETTER / CLOSING CTA */}
      <NewsLetterCTA />
    </main>
  );
};

export default ArticlesPage;