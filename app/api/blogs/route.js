import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { verifyToken } from "@/lib/auth";


export async function POST(request) {
  try {
    const token = request.cookies.get("token")?.value;
    const user = token ? verifyToken(token) : null;
    if(!user) {
      return Response.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }


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
