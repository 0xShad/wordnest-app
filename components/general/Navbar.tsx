import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/"><h1 className="text-2xl font-semibold">
        Word
        <span className="bg-purple-500 font-bold rounded-sm px-1 text-white">Nest</span>
      </h1></Link>
    

      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm font-medium ">Home</Link>
        <Link href="/dashboard" className="text-sm font-medium ">Dashboard</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button>Login</Button>
        <Button variant="secondary">Sign up</Button>
      </div>
    </nav>
  );
}
