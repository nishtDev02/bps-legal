import BlogForm from "@/components/admin/BlogForm";

const NewBlogPage = () => {
  return (
    <div>
      <h1
        className="text-2xl font-bold text-[#FAF8F5] mb-8"
        style={{ fontFamily: "var(--font-heading, serif)" }}
      >
        New Blog Post
      </h1>
      <BlogForm />
    </div>
  );
};

export default NewBlogPage;