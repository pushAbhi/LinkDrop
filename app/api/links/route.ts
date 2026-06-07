import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const { isAuthenticated, redirectToSignIn, userId } = await auth();

    return Response.json({ message: "Hello World", clerkID: userId });
}

export async function POST(request: Request) {}
