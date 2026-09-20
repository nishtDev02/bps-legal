import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import Link from "next/link";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import { PlusCircle } from "lucide-react";

const PostsPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = token ? verifyToken(token) : null;

  if (!user) {
    redirect("/admin/login");
  }

  await connectDB();
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  const blogsData = JSON.parse(JSON.stringify(blogs));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#FAF8F5]" style={{ fontFamily: "var(--font-heading, serif)" }}>
          All Posts
        </h1>
        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#0D131F] font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          <PlusCircle size={16} />
          New Post
        </Link>
      </div>

      <div className="bg-[#131B2E]/80 border border-[#C6A75E]/15 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#0D131F]/50 text-[#FAF8F5]/50 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Locale</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogsData.map((blog) => (
              <tr key={blog._id} className="border-t border-[#C6A75E]/10">
                <td className="px-5 py-3.5 text-[#FAF8F5] font-medium">{blog.title}</td>
                <td className="px-5 py-3.5 text-[#FAF8F5]/60">{blog.category}</td>
                <td className="px-5 py-3.5 text-[#FAF8F5]/60 uppercase text-xs">{blog.locale}</td>
                <td className="px-5 py-3.5 text-[#FAF8F5]/60">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-3.5 text-right space-x-3">
                  <Link href={`/admin/blogs/edit/${blog._id}`} className="text-[#C6A75E] hover:underline font-medium">
                    Edit
                  </Link>
                  <DeleteBlogButton id={blog._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogsData.length === 0 && (
          <p className="text-center text-[#FAF8F5]/40 py-10">No blog posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostsPage;