import React from "react";

const TopBar = () => {
  return (
    <div className="border-b border-(--color-accent)/30 bg-(--color-bg)">
      <div className="max-w-7xl mx-auto px-6 md:px-22 py-2 flex justify-end gap-4">
        {/* social icons */}
        <a
          href="#"
          target="_blank"
          className="text-(--color-text-secondary) hover:text-(--color-accent) transition"
          aria-label="Linkedin"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          className="text-(--color-text-secondary) hover:text-(--color-accent) transition"
          aria-label="Instagram"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          {/* <Instagram size={16} /> */}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
