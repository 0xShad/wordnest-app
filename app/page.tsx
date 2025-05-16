import BlogCard from "@/components/general/BlogCard";
import { HeroBlogCard } from "@/components/general/HeroBlogCard";
import { RecentBlogCard } from "@/components/general/RecentBlogCard";
import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/lib/getData";

export default function Home() {
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-[80%_20%] gap-6">
        <HeroBlogCard />

        <div className="hidden md:block">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">Recent Uploads</h1>
            <Card>
              <CardContent>
                <RecentBlogCard />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-semibold text-3xl">
          Explore{" "}
          <span className="bg-purple-600 px-2 rounded-sm text-white font-bold">
            blogs
          </span>
        </h1>

        <BlogPosts />
      </div>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {data.map((item: any) => (
        <BlogCard data={item} key={item.id} />
      ))}
    </div>
  );
}
