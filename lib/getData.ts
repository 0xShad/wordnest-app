import { prisma } from "@/app/utils/db";


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
        }
    })

    return data
}