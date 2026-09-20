import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import Link from "next/link";
import { FileText, Globe, Layers, PlusCircle } from "lucide-react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = token ? verifyToken(token) : null;

  if (!user) {
    redirect("/admin/login");
  }

  await connectDB();
  const allBlogs = await Blog.find({});
  const enCount = allBlogs.filter((b) => b.locale === "en").length;
  const hinglishCount = allBlogs.filter((b) => b.locale === "hinglish").length;
  const categoryCount = new Set(allBlogs.map((b) => b.category)).size;
  const recentBlogs = [...allBlogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const stats = [
    { label: "Total Posts", value: allBlogs.length, icon: FileText },
    { label: "English", value: enCount, icon: Globe },
    { label: "Hinglish", value: hinglishCount, icon: Globe },
    { label: "Categories Used", value: categoryCount, icon: Layers },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold text-[#FAF8F5]"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Welcome, {user.username}!
          </h1>
          <p className="text-sm text-[#FAF8F5]/50 mt-1">
            Here's what's happening with your content.
          </p>
        </div>
        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#0D131F] font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          <PlusCircle size={16} />
          New Post
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-[#131B2E]/80 border border-[#C6A75E]/15 rounded-xl p-5"
            >
              <div className="w-9 h-9 rounded-lg bg-[#72233B]/30 border border-[#C6A75E]/20 flex items-center justify-center mb-3">
                <Icon size={18} className="text-[#C6A75E]" />
              </div>
              <p className="text-2xl font-bold text-[#FAF8F5]">{stat.value}</p>
              <p className="text-sm text-[#FAF8F5]/50 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-[#131B2E]/80 border border-[#C6A75E]/15 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#C6A75E]/15 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#FAF8F5]">Recent Posts</h2>
          <Link 
          href="/admin/posts"
          className="text-xs text-[#C6A75E] hover:underline"
          >View All</Link>
        </div>

        {recentBlogs.length === 0 ? (
          <p className="text-center text-[#FAF8F5]/40 text-sm py-10">No posts yet.</p>
        ) : (
          <ul className="divide-y divide-[#C6A75E]/10">
            {recentBlogs.map((blog) => (
              <li key={blog._id.toString()} className="px-6 py-3.5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#FAF8F5] font-medium">{blog.title}</p>
                  <p className="text-xs text-[#FAF8F5]/40 mt-0.5">
                    {blog.category} · {blog.locale.toUpperCase()}
                  </p>
                </div>
                <Link
                href={`/admin/blogs/edit/${blog._id}`}
                className="text-xs text-[#C6A75E] hover:underline shrink-0"
                >
                Edit
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
