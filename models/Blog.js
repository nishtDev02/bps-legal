import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    locale: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "/images/blog-placeholder.jpg",
    },
    author: {
      type: String,
      default: "Adv. Bhanu Pratap Sagar",
    },
    topic: { type: String, default: "" },
    relevantLaw: { type: String, default: "" },
    keyTakeaways: { type: [String], default: [] },
    relevantSections: { type: [String], default: [] },
    faqs: {
      type: [{ question: String, answer: String }],
      default: [],
    },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
