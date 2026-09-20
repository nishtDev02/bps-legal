import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { FolderOpen } from "lucide-react";

const CategoriesPage = async () => {
  await connectDB();
  const blogs = await Blog.find({});

  const categories = [
    "Cyber Law",
    "Criminal Law",
    "Bail Matters",
    "Family Law",
    "Immigration Law",
    "Consumer Law",
    "Corporate Law",
    "Arbitration & ADR",
    "Legal Drafting & Documentation",
    "Intellectual Property Rights (IPR)",
    "Cheque Bounce & Negotiable Instruments",
  ];

  const counts = categories.map((cat) => ({
    name: cat,
    count: blogs.filter((b) => b.category === cat).length,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold text-[#FAF8F5]"
          style={{ fontFamily: "var(--font-heading, serif)" }}
        >
          Categories
        </h1>
        <p className="text-sm text-[#FAF8F5]/50 mt-1">
          Fixed category list, matched to the site's Practice Areas.
        </p>
      </div>

      <div className="bg-[#131B2E]/80 border border-[#C6A75E]/15 rounded-xl overflow-hidden">
        <ul className="divide-y divide-[#C6A75E]/10">
          {counts.map((cat) => (
            <li key={cat.name} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#72233B]/30 border border-[#C6A75E]/20 flex items-center justify-center">
                  <FolderOpen size={14} className="text-[#C6A75E]" />
                </div>
                <span className="text-sm text-[#FAF8F5] font-medium">{cat.name}</span>
              </div>
              <span className="text-xs text-[#FAF8F5]/50">
                {cat.count} {cat.count === 1 ? "post" : "posts"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPage;