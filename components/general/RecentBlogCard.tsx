import { getData } from "@/lib/getData";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export async function RecentBlogCard() {
  const data = await getData();

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      {data.slice(0, 3).map((item) => (
        <Link href={`/post/${item.id}`} key={item.id}>
          <div className="group cursor-pointer">
            <div className="w-full h-[100px] relative overflow-hidden ">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[100px] rounded-sm "
              />
            </div>
            <h1 className="font-semibold text-sm mt-2 group-hover:text-purple-500">
              {item.title}
            </h1>
            <Separator className="my-2 bg-purple-800" />
          </div>
        </Link>
      ))}
    </>
  );
}
