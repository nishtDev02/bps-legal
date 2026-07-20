import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { verifyToken } from "@/lib/auth";

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const token = request.cookies.get("token")?.value;
    const user = token ? verifyToken(token) : null;
    if (!user) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await request.json();
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });

    return Response.json({ success: true, data: updatedBlog });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const token = request.cookies.get("token")?.value;
        const user = token ? verifyToken(token) : null;
        if (!user) {
            return Response.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();

        const deletedBlog = await Blog.findByIdAndDelete(id);

        return Response.json({ success: true, data: deletedBlog });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}