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
    <div className='flex m-5 p-4'>
        {blogsData.map((blog) => (
            <div className='grid grid-cols-3 gap-6' key={blog.slug}>
                <div className='bg-slate-300 w-76 p-4 rounded-xl'>
                <h2 className='text-blue-950 text-2xl font-bold'>
                <Link href={`/${locale}/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p>{blog.slug}</p>
                <p>{blog.category}</p>
                <p>{blog.excerpt}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default page
