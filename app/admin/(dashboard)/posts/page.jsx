import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import Link from "next/link";

import LogoutButton from "@/components/admin/LogoutButton";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";

const DashboardPage = async () => {
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
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1F2A44]">Dashboard</h1>
          <p className="text-sm text-[#1F2A44]/60">Welcome, {user.username}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={"/admin/dashboard/new"}
            className="bg-[#C6A75E] text-[#1F2A44] font-semibold px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition"
          >
            + New Blog Post
          </Link>
          {/* Logout button */}
          <LogoutButton />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#1F2A44]/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1F2A44]/5 text-[#1F2A44]/70 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Locale</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogsData.map((blog) => (
              <tr key={blog._id} className="border-t border-[#1F2A44]/10">
                <td className="px-5 py-3 text-[#1F2A44] font-medium">{blog.title}</td>
                <td className="px-5 py-3 text-[#1F2A44]/70">{blog.category}</td>
                <td className="px-5 py-3 text-[#1F2A44]/70 uppercase text-xs">{blog.locale}</td>
                <td className="px-5 py-3 text-[#1F2A44]/70">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="px-5 py-3 text-right space-x-3">
                  <Link href={`/admin/dashboard/edit/${blog._id}`} className="text-[#C6A75E] hover:underline font-medium">
                    Edit
                  </Link>
                  {/* Delete blog button */}
                  <DeleteBlogButton id={blog._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogsData.length === 0 && (
          <p className="text-center text-[#1F2A44]/50 py-10">
            No blog posts yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
