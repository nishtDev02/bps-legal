import React from 'react'
import connectDB from '@/lib/db'
import Blog from '@/models/Blog'
import BlogForm from '@/components/admin/BlogForm'
import { notFound } from 'next/navigation'


const EditBlogPage = async ({ params }) => {
    const { id } = await params;

    await connectDB();
    const blog = await Blog.findById(id);

    if(!blog){
        notFound();
    }

    const blogData = JSON.parse(JSON.stringify(blog));

  return (
    <div className='max-w-4xl mx-auto px-6 py-10'>
      <h1 className='text-2xl font-bold text-[#1F2A44] mb-8'>Edit Blog Post</h1>
      <BlogForm initialData={blogData} blogId={id} />
    </div>
  )
}

export default EditBlogPage
