import BlogCard from "@/components/general/BlogCard";
import { buttonVariants } from "@/components/ui/button";
import { getUserData } from "@/lib/getData";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Your words</h1>
        <Link
          href="/dashboard/create"
          className={`${buttonVariants()} bg-purple-500 hover:bg-purple-700`}
        >
          Create word
        </Link>
      </div>
      <UserBlogPosts />
    </div>
  );
}

async function UserBlogPosts() {
  const data = await getUserData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
      {data.map((item: any) => (
        <BlogCard data={item} key={item.id} />
      ))}
    </div>
  );
}
