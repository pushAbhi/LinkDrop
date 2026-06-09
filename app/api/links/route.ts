import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// get links
export async function GET() {
    const { isAuthenticated, redirectToSignIn, userId } = await auth();

    return Response.json({ message: "Hello World", clerkID: userId });
}

// create link
export async function POST(request: NextResponse) {
    const body = await request.json();

    return NextResponse.json({
        message: "post created " + body.originalUrl,
    });
}
