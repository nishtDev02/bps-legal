import React from "react";
import Link from "next/link";

const HeroSubtitle = ({ text, locale }) => {
  return (
    <div>
      <p className="text-(--color-text-secondary) text-base md:text-lg max-w-xl line-clamp-2">
        {text}
      </p>

      <Link
        href={`/${locale}/about`}
        className="text-(--color-accent) font-semibold text-sm mt-1 hover:underline inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default HeroSubtitle;
