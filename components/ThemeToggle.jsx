"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark"){
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if(newIsDark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
  return (
    <button
    onClick={toggleTheme}
    className='text-(--color-text) p-2 rounded-full hover:bg-(--color-bg-secondary) transition'
    aria-label='Toggle Theme'
    >
        {isDark ? <Sun size={20} />: <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle
