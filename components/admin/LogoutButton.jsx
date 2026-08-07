"use client";
import React from "react";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="border border-[#1F2A44]/20 text-[#1F2A44] font-medium px-5 py-2.5 rounded-md text-sm hover:bg-[#1F2A44]/5 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
