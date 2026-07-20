import React from "react";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { locale, slug } = await params;
  await connectDB();
  const blog = await Blog.findOne({ locale: locale, slug: slug });

  if (!blog) {
    notFound();
  }

  const blogData = JSON.parse(JSON.stringify(blog));
  return (
    <div>
      <div>
        <h1>{blogData.title}</h1>
        <p>{blogData.category}</p>
        <p>{blogData.content}</p>
      </div>
    </div>
  );
};

export default page;
