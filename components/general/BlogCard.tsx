import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default async function BlogCard({ data }: IappProps) {
  return (
    <Link href={`/post/${data.id}`} key={data.id}>
      <div>
        <div className="relative w-full h-[200px] mb-1">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="rounded-sm object-cover h-[200px] w-full"
          />
        </div>
        <Card>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p className="line-clamp-2 text-gray-700">{data.content}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={data.authorImage}
                    alt={data.authorName}
                    className="rounded-full size-8"
                  />
                  <h3 className="text-sm font-medium text-gray-600">
                    {data.authorName}
                  </h3>
                </div>
                <time className="text-sm text-gray-500">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(data.createdAt)}
                </time>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
