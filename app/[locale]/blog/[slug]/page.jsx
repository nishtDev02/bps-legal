import React from 'react'
import connectDB from '@/lib/db'
import Blog from '@/models/Blog'
import { notFound } from 'next/navigation'
import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation'


const page = async ({ params }) => {
    const { locale, slug } = await params;
    await connectDB();
    const blog = await Blog.findOne({ locale: locale, slug: slug });

    if(!blog){
        notFound();
    }

    const blogData = JSON.parse(JSON.stringify(blog));
  return (
    <div>
      {blogData.map((blog) => (
        <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.category}</p>
            <p>{blog.content}</p>
        </div>
      ))}
    </div>
  )
}

export default page
