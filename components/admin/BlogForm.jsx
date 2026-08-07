"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const categories = [
  "Criminal Law",
  "Cyber Law",
  "Bail Matters",
  "FIR & Police Matters",
  "Cyber Fraud",
  "Legal Consultation",
];

const BlogForm = ({ initialData, blogId }) => {
  const router = useRouter();
  const isEditMode = Boolean(blogId);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    category: initialData?.category || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "/images/blog-placeholder.jpg",
    locale: initialData?.locale || "en",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const url = isEditMode ? `/api/blogs/${blogId}` : "/api/blogs";
    const method = isEditMode ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch (error) {
      setError("Network error, please try again");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
      <div>
        <label className="block text-sm font-medium mb-1.5">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Slug (URL)</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
          placeholder="e.g. upi-fraud-guide-en"
          className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Language</label>
          <select
            name="locale"
            value={formData.locale}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
          >
            <option value="en">English</option>
            <option value="hinglish">Hinglish</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Cover Image URL
        </label>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Excerpt</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={2}
          className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={10}
          className="w-full px-4 py-2.5 rounded-md border border-[#1F2A44]/15"
        />
      </div>

      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-2.5 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#C6A75E] text-[#1F2A44] font-semibold px-6 py-3 rounded-md disabled:opacity-50"
      >
        {status === "loading"
          ? "Saving..."
          : isEditMode
          ? "Update Post"
          : "Publish Post"}
      </button>
    </form>
  );
};

export default BlogForm;
