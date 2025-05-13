import { prisma } from "@/app/utils/db";


export async function getUniqueData() {
    const data = await prisma.blogPost.findFirst({
        orderBy: {
            createdAt: "desc",
        }
    })

    return data
}