import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import BlogForm from "@/components/admin/BlogForm";
import { notFound } from "next/navigation";

const EditBlogPage = async ({ params }) => {
  const { id } = await params;

  await connectDB();
  const blog = await Blog.findById(id);

  if (!blog) {
    notFound();
  }

  const blogData = JSON.parse(JSON.stringify(blog));

  return (
    <div>
      <h1
        className="text-2xl font-bold text-[#FAF8F5] mb-8"
        style={{ fontFamily: "var(--font-heading, serif)" }}
      >
        Edit Blog Post
      </h1>
      <BlogForm initialData={blogData} blogId={id} />
    </div>
  );
};

export default EditBlogPage;