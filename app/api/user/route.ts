import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
    const { userId } = await auth();

    if (!userId)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const clerkUser = await currentUser()
    const clerkUserEmailAdress = clerkUser?.primaryEmailAddress?.emailAddress
    if (!clerkUserEmailAdress)
        return Response.json({error: "Email not found!"}, {status: 500})

    // check if user exists
    const existingUser = await prisma.user.findUnique({
        where : {
            clerkId: userId
        }
    }) 
    
    if (existingUser) {
        return Response.json({ message: "User already exists! "})
    }

    // create new user
    try {
        const newUser = await prisma.user.create({
            data: {
                email: clerkUserEmailAdress,
                username: null,
                clerkId: userId,
                displayName: null,
                bio: null,
            }
        })
        return Response.json({ user: newUser }, { status: 201})
    } catch (err) {
        return Response.json({ error: "Something went wrong!"})
    }
}

export async function PATCH(request: Request) {
    const { isAuthenticated, redirectToSignIn, userId } = await auth();

    if (!userId)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json()

    try {        
        const updateUser = await prisma.user.update({
            where: {
                clerkId: userId
            },
            data : {
                username: body.username,
                displayName: body.displayName,
                bio: body.bio,
            }
        })
        return Response.json({user : updateUser}, {status: 200})
    } catch (err) {
        return Response.json( {error: "Error updating data!"}, {status:500})
    }
}