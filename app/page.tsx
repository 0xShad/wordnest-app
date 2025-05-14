import { HeroBlogCard } from "@/components/general/HeroBlogCard";
import { RecentBlogCard } from "@/components/general/RecentBlogCard";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-[80%_20%] gap-6">
        <HeroBlogCard />

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
  );
}
