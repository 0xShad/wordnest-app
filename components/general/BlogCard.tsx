import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getData } from "@/lib/getData";

export default async function BlogCard() {
  const data = await getData();
  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      {data.map((item) => (
        <div className="" key={item.id}>
          <div className="relative w-full h-[200px] mb-1">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="overflow-hidden object-cover rounded-sm"
            />
          </div>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="line-clamp-2 text-gray-700">{item.content}</p>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <p className="text-sm">Image</p>
                        <h3 className="text-sm font-medium text-gray-600">{item.authorName}</h3>
                    </div>
                    <time className="text-sm text-gray-500">
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }).format(item.createdAt)}
                    </time>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}
