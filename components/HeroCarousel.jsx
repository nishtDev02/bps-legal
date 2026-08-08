"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'

const images = [
    "/images/hero-carousel-1.png",
    "/images/hero-carousel-2.png",
    "/images/hero-carousel-3.png"
]

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='absolute inset-0'>
      {images.map((src, index) => (
        <div
        key={src}
        className={`absolute inset-0 bg-contain bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}

        style={{
            backgroundImage: `url('${src}')`,
            filter: "blur(3px)",
            transform: "scale(1.05)"
        }}
        />
      ))}
    </div>
  )
}

export default HeroCarousel
