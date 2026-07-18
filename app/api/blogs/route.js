import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const blog = await Blog.create(body);
    return Response.json({ success: true, data: blog });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, {status: 500})
  }
}

export async function GET(request){
    try {
        await connectDB();
        const locale = request.nextUrl.searchParams.get("locale");
        const blogs = locale
        ? await Blog.find({ locale: locale })
        : await Blog.find({});

        return Response.json({ success: true, data: blogs})
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 })
    }
}
