import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import practiceAreas from "@/lib/practiceAreas";
import ArticleDetail from "@/components/blog/ArticleDetail";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  await connectDB();
  const blog = await Blog.findOne({ slug, locale });

  if(!blog) {
    return {
      title: "Article Not Found"
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.coverImage],
    }
  }

}

const BlogDetailPage = async ({ params }) => {
  const { slug, locale } = await params;

  await connectDB();

  const blog = await Blog.findOne({ slug, locale });

  if (!blog) {
    notFound();
  }

  const relatedDocs = await Blog.find({
    category: blog.category,
    locale: blog.locale,
    slug: { $ne: blog.slug },
  })
    .limit(3)
    .sort({ createdAt: -1 });

  const blogData = JSON.parse(JSON.stringify(blog));
  const relatedArticles = JSON.parse(JSON.stringify(relatedDocs));

  const matchedArea = practiceAreas.find(
    (area) => area.title === blog.category
  );
  const categoryIcon = matchedArea?.icon || "Tag";

  const currentUrl = `https://bpslegal.com/${locale}/blog/${slug}`;

  return (
    <ArticleDetail
      blog={blogData}
      categoryIcon={categoryIcon}
      relatedArticles={relatedArticles}
      locale={locale}
      currentUrl={currentUrl}
    />
  );
};

export default BlogDetailPage;
