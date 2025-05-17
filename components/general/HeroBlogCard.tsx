import { getUniqueData } from "@/lib/getUniqueData";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export async function HeroBlogCard() {
  const data = await getUniqueData();

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="w-full group hover:shadow-lg transition-all duration-300 overflow-hidden rounded-sm">
      <h1 className="text-6xl font-bold tracking-tight mb-4">{data.title}</h1>
      <div className="flex items-center gap-6 mb-2">
        <div className="flex items-center gap-2">
          <div className="relative size-8">
            <img
              src={data.authorImage}
              alt={data.authorName}
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-sm font-semibold text-gray-800">
            {data.authorName}
          </p>
        </div>
        <time className="text-sm text-gray-500">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(data.createdAt)}
        </time>
      </div>
      <div className="relative w-full h-[450px] mb-2">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <Card className="rounded-sm">
        <CardContent className="flex flex-col gap-2">
          <p className="line-clamp-2 text-gray-700 text-md">{data.content}</p>
          <Button className="w-auto bg-purple-500 self-end cursor-pointer hover:bg-purple-700">
            <Link href={`/post/${data.id}`}>Read more</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
