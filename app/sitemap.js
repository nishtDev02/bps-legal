import practiceAreas from "@/lib/practiceAreas";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export default async function sitemap() {
  const baseUrl = "https://bps-legal.vercel.app"; // change this when domain is available
  const locales = ["en", "hinglish"];

  const staticPages = [
    "",
    "about",
    "practice-areas",
    "blog",
    "resources",
    "faq",
    "contact",
  ];

  const staticEntries = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date(),
    }))
  );

  const practiceAreaEntries = locales.flatMap((locale) =>
    practiceAreas.map((area) => ({
      url: `${baseUrl}/${locale}/practice-areas/${area.slug}`,
      lastModified: new Date(),
    }))
  );

  await connectDB();

  const blogs = await Blog.find({});
  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/${blog.locale}/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
  }));

  return [...staticEntries, ...practiceAreaEntries, ...blogEntries];
}
