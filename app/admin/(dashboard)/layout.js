"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderOpen,
  Settings,
  ShieldAlert,
  Menu,
  X,
  LogOut,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "All Posts", href: "/admin/posts", icon: FileText },
  { name: "Create Post", href: "/admin/blogs/create", icon: PlusCircle },
  { name: "Categories", href: "/admin/categories", icon: FolderOpen },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0D131F] text-[#FAF8F5] relative overflow-x-hidden font-sans selection:bg-[#C6A75E] selection:text-[#0D131F]">
      <div className="fixed top-0 left-1/4 w-125 h-125 bg-[#72233B]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-10 w-100 h-100 bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none" />

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 bg-[#131B2E]/90 backdrop-blur-xl border-r border-[#C6A75E]/20 z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="h-20 flex items-center justify-between px-6 border-b border-[#C6A75E]/15">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#72233B] border border-[#C6A75E] flex items-center justify-center shadow-md shadow-black/40">
                <ShieldAlert size={18} className="text-[#FAF8F5]" />
              </div>
              <span
                className="text-base font-bold text-[#FAF8F5] tracking-wide"
                style={{ fontFamily: "var(--font-heading, serif)" }}
              >
                Admin<span className="text-[#C6A75E]">Portal</span>
              </span>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-[#FAF8F5]/60 hover:text-[#FAF8F5]"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="p-4 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-xs font-semibold transition-all relative ${
                    isActive
                      ? "text-[#FAF8F5] bg-[#72233B]/40 border border-[#C6A75E]/40 shadow-inner"
                      : "text-[#FAF8F5]/60 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-[#C6A75E]" : "text-[#FAF8F5]/50"} />
                  <span>{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[#C6A75E]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-[#C6A75E]/15">
          <div className="flex items-center justify-between p-2.5 rounded-[10px] bg-[#0D131F]/50 border border-[#C6A75E]/10">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-[#C6A75E] text-[#0D131F] font-bold text-xs flex items-center justify-center shrink-0">
                A
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-[#FAF8F5] truncate">Legal Admin</p>
                <p className="text-[10px] text-[#FAF8F5]/50 truncate">admin@lawfirm.com</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Logout"
              className="text-[#FAF8F5]/40 hover:text-rose-400 transition ml-1 shrink-0 cursor-pointer"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64 flex flex-col min-h-screen relative z-10">
        <header className="h-20 border-b border-[#C6A75E]/15 bg-[#131B2E]/60 backdrop-blur-md sticky top-0 z-30 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-[#FAF8F5]/5 text-[#FAF8F5] hover:bg-[#FAF8F5]/10 border border-[#C6A75E]/20"
            >
              <Menu size={20} />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-[#FAF8F5]/50">
              <Link href="/admin/dashboard" className="hover:text-[#C6A75E] transition">
                Admin
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#FAF8F5] capitalize">
                {pathname.split("/").pop().replace("-", " ") || "Dashboard"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-[#C6A75E]/40 text-[#C6A75E] hover:bg-[#C6A75E]/10 transition"
            >
              View Live Site ↗
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}