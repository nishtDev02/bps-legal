import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/lib/auth'

const page = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const user = token ? verifyToken(token) : null;

    if(!user) {
        redirect('/admin/login');
    }
  return (
    <div>
      This is a dashboard page for admin panel.
    </div>
  )
}

export default page
