import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostData } from "@/lib/getData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type PostProps = Promise<{ postid: string }>;

export default async function Post({ params }: { params: PostProps }) {
  const { postid } = await params;
  const data = await getPostData(postid);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-5">
        <Link href="/" className="font-semibold text-lg">
          <ArrowLeft />
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{data.title}</CardTitle>
          <div className="flex items-center my-2 gap-4">
            <div className="flex items-center gap-2">
              <img
                src={data.authorImage}
                alt={data.authorName}
                className="rounded-full size-8 object-cover"
              />
              <p className="font-semibold text-gray-600 text-sm">
                {data.authorName}
              </p>
            </div>
            <time className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("en-Us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
          <img
            src={data.imageUrl}
            alt={data.title}
            className="rounded-sm object-cover w-full h-full"
          />
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
