import langObj from "@/lib/dictionary";
import connectDB from "@/lib/db";
import practiceAreas from "@/lib/practiceAreas";
import Blog from "@/models/Blog";

import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import BlogsGrid from "@/components/home/BlogsGrid";
import ContactCTA from "@/components/home/ContactCTA";

export default async function HomePage({ params }) {
  await connectDB();
  const { locale } = await params;
  const t = langObj[locale];

  const blogs = await Blog.find({ locale: locale })
    .sort({ createdAt: -1 })
    .limit(3);
  const blogsData = JSON.parse(JSON.stringify(blogs));
  return (
    <>
      <HeroSection locale={locale} t={t} />
      <AboutPreview locale={locale} t={t} />
      <PracticeAreasGrid locale={locale} t={t} practiceAreas={practiceAreas} />
      <BlogsGrid locale={locale} t={t} blogsData={blogsData} />
      <ContactCTA locale={locale} t={t} />
    </>
  );
}
