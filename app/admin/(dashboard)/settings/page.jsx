import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";

const SettingsPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = token ? verifyToken(token) : null;

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold text-[#FAF8F5]"
          style={{ fontFamily: "var(--font-heading, serif)" }}
        >
          Settings
        </h1>
        <p className="text-sm text-[#FAF8F5]/50 mt-1">Account details for this admin panel.</p>
      </div>

      <div className="bg-[#131B2E]/80 border border-[#C6A75E]/15 rounded-xl p-6 max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#C6A75E] text-[#0D131F] font-bold flex items-center justify-center shrink-0">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#FAF8F5]">{user.username}</p>
            <p className="text-xs text-[#FAF8F5]/50 mt-0.5">Administrator</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#C6A75E]/10 flex items-start gap-3">
          <ShieldCheck size={16} className="text-[#C6A75E] mt-0.5 shrink-0" />
          <p className="text-xs text-[#FAF8F5]/50 leading-relaxed">
            To change your username or password, update the <code className="text-[#C6A75E]">ADMIN_USERNAME</code> and{" "}
            <code className="text-[#C6A75E]">ADMIN_PASSWORD</code> environment variables in Vercel, then redeploy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;