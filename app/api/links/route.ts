import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// get links
export async function GET() {
    const { isAuthenticated, redirectToSignIn, userId } = await auth();

    if (!userId)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const links = await prisma.link.findMany({
        where: {
            userId: userId,
        },
        select: {
            title: true,
            url: true,
            createdAt: true,
            enabled: true,
            clickCount: true,
            order: true
        },
    });

    return Response.json({ links: links, clerkID: userId });
}

// create link
export async function POST(request: NextResponse) {
    const { isAuthenticated, redirectToSignIn, userId } = await auth();
    if (!userId)
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    const { name, originalUrl } = await request.json();

    try {
        const newLink = await prisma.link.create({
            data: {
                userId: userId,
                title: "",
                url: originalUrl,
            },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return Response.json(
                { error: "Link Already Exists" },
                { status: 400 },
            );
        }
        return Response.json(
            { error: "Something went wrong!" },
            { status: 500 },
        );
    }

    return NextResponse.json({
        message: "post created " + originalUrl,
    });
}
