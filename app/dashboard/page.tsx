import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Dashboard() {
  return (
    <div className="mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Your words</h1>
          <Link href='/dashboard/create' className={`${buttonVariants()} bg-purple-500 hover:bg-purple-700`}>Create word</Link>
        </div>
    </div>
  )
}