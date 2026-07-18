"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const segment = pathname.split("/") // ["", "en", "hinglish"]
    const currentLocale = segment[1]; // "en"

    const newLocale = currentLocale === "en" ? "hinglish" : "en";

    const handleSwitch = () => {
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPathname);
    }
  return (
    <button
    onClick={handleSwitch}
    className='bg-slate-400 text-white px-3 py-4 rounded-xl'
    >
        {currentLocale === "en" ? "Hinglish" : "English"}
    </button>
  )
}

export default LanguageSwitcher
