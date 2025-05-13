import { HeroBlogCard } from "@/components/general/HeroBlogCard";

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
