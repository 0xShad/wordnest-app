import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function Navbar() {
  const user = await getUser();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-semibold">
          Word
          <span className="bg-purple-500 font-bold rounded-sm px-1 text-white">
            Nest
          </span>
        </h1>
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm font-medium ">
          Home
        </Link>
        <Link href="/dashboard" className="text-sm font-medium ">
          Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {user.picture && (
                <div className="relative size-8">
                  <img src={user.picture ?? ''} alt={user.given_name ?? 'User'} className="object-cover rounded-full"/>
                </div>
              )}
              <p className=" font-semibold text-md">{user.given_name}</p>
            </div>
            <LogoutLink className={buttonVariants({ variant: "secondary" })}>
              Logout
            </LogoutLink>
          </div>
        ) : (
          <>
            <LoginLink className={`${buttonVariants()} bg-purple-500`}>
              Login
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}

async function getUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return user;
}
