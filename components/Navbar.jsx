"use client"
import React from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ locale }) => {
  return (
    <nav className='bg-slate-800 text-white flex justify-around px-4 py-3'>
        <div className="logo text-2xl font-bold ">BPS Legal</div>
        <ul className='flex gap-6'>
        <li><Link href={`/${locale}`}>Home</Link></li>
        <li><Link href={`/${locale}/about`}>About</Link></li>
        </ul>
        <div>
            <LanguageSwitcher />
        </div>
    </nav>
  )
}

export default Navbar
