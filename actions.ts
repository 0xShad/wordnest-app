"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "./app/utils/db";



export async function createPost(formData: FormData) {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("api/auth/register");
    }

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("imageUrl") as string

    await prisma.blogPost.create({
        data: {
            title: title,
            content: content,
            imageUrl: imageUrl,
            authorId: user.id,
            authorName: user.given_name as string,
            authorImage: user.picture as string
        }
    })

    redirect("/dashboard");
}