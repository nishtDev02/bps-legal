import { generateToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();

    if(body.username === process.env.ADMIN_USERNAME && body.password === process.env.ADMIN_PASSWORD) {
        const token = generateToken({ username: body.username });
        const response =  NextResponse.json({ success: true });
        response.cookies.set('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 });
        return response;
    } else {
        return NextResponse.json({ success: false, error: 'Invalid Credentials'}, { status: 401 });
    }
}