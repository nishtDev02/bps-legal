"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const DeleteBlogButton = ({ id }) => {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    setDeleting(true);
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    router.refresh();
  };
  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="text-red-600 hover:underline font-medium disabled:opacity-50"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteBlogButton;
