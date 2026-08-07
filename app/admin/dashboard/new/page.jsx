import React from 'react'
import BlogForm from '@/components/admin/BlogForm'

const NewBlogPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-6 py-10'>
      <h1 className='text-2xl font-bold text-[#1F2A44] mb-8'>New Blog Post</h1>
      <BlogForm />
    </div>
  )
}

export default NewBlogPage
