import { prisma } from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";


export async function getData() {
    const data = await prisma.blogPost.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            imageUrl: true,
            authorId: true,
            authorName: true,
            authorImage: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return data
}


export async function getUserData() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const data = await prisma.blogPost.findMany({
        where: {
            authorId: user?.id
        }
    })

    return data
}

export async function getPostData(postId: string) {
    const data = await prisma.blogPost.findUnique({
        where: {
            id: postId
        }
    })

    if (!data) {
        notFound()
    }

    return data
}