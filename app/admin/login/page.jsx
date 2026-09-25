"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, KeyRound, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

const AdminLoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success === true) {
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid username or password.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1F2A44] text-[#1F2A44] px-4 sm:px-6 flex items-center justify-center overflow-hidden selection:bg-[#C6A75E] selection:text-[#1F2A44]">
      {/* Background Soft Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#C6A75E]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card Header Badge */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#161F30] border border-[#C6A75E]/30 text-[#C6A75E] mb-2 shadow-inner">
            <Lock size={22} />
          </div>
          <p className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#C6A75E]">
            Restricted Access
          </p>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#FAF8F5]"
            style={{ fontFamily: "var(--font-heading, serif)" }}
          >
            Chamber Portal Login
          </h1>
          <p className="text-[#FAF8F5]/60 text-xs sm:text-sm">
            Please authenticate with your administrator credentials.
          </p>
        </div>

        {/* Ivory Login Card */}
        <div className="bg-[#FAF6EF] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#C6A75E]/20 relative">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44]"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#1F2A44]/40">
                  <User size={16} />
                </span>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1F2A44]/15 rounded-xl text-sm text-[#1F2A44] placeholder-[#1F2A44]/40 focus:outline-none focus:border-[#C6A75E] focus:ring-1 focus:ring-[#C6A75E] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-[#1F2A44]"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#1F2A44]/40">
                  <KeyRound size={16} />
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1F2A44]/15 rounded-xl text-sm text-[#1F2A44] placeholder-[#1F2A44]/40 focus:outline-none focus:border-[#C6A75E] focus:ring-1 focus:ring-[#C6A75E] transition-all"
                />
              </div>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-medium">
                <AlertCircle size={15} className="shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 bg-[#1F2A44] text-[#FAF8F5] text-xs uppercase font-bold tracking-wider rounded-xl border border-[#C6A75E]/30 hover:bg-[#161F30] hover:border-[#C6A75E] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin text-[#C6A75E]" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Access Dashboard</span>
                  <ArrowRight size={15} className="text-[#C6A75E] group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] italic text-[#FAF8F5]/40 mt-6">
          Confidential System — Unauthorized login attempts are logged and monitored.
        </p>
      </div>
    </section>
  );
};

export default AdminLoginPage;