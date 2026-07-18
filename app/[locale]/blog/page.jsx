import React from 'react'
import connectDB from '@/lib/db'
import Blog from '@/models/Blog'
import Link from 'next/link'

const page = async ({ params }) => {
    const {locale} = await params;
    await connectDB();
    const blogs = await Blog.find({ locale: locale });
    const blogsData = JSON.parse(JSON.stringify(blogs));
  return (
    <div>
        {blogsData.map((blog) => (
            <div key={blog.slug}>
                <h2>
                <Link href={`/${locale}/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p>{blog.slug}</p>
                <p>{blog.category}</p>
                <p>{blog.excerpt}</p>
            </div>
        ))}
    </div>
  )
}

export default page
