"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const images = [
  { src: "/images/hero-carousel-1.png", position: "top center" },
  { src: "/images/hero-carousel-2.png", position: "center" },
  { src: "/images/hero-carousel-3.png", position: "top" },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 bg-contain bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img.src}')`,
            filter: "blur(2px)",
            backgroundSize: "cover",
            backgroundPosition: `${img.position}`,
            backgroundRepeat: "no-repeat",
            transform: "scale(1)",
          }}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
