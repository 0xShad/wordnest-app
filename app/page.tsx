import { getUniqueData } from "@/lib/getUniqueData";
import Image from "next/image";


export default function Home() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-[80%_20%] gap-6">
        <HeroBlogCard />

        <div className="flex flex-col">
          <h1>Recent Uploads</h1>
          <div className="">Card1</div>
          <div className="">Card2</div>
          <div className="">Card3</div>
        </div>
      </div>
    </div>
  );
}


async function HeroBlogCard() {
  const data = await getUniqueData();

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold tracking-tight mb-4">{data.title}</h1>
      <div className="relative w-full h-[450px]">
        <Image src={data.imageUrl} alt={data.title} fill className="object-cover rounded-sm"/>
      </div>
    </div>
  )
}