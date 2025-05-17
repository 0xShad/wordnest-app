"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";

type UserProps = {
  user: {
    given_name?: string;
    picture?: string;
  } | null;
};

export default function Navbar({ user }: UserProps) {
  const [NavMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu((prev) => !prev);
  };

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

      <div className="hidden items-center gap-8 md:flex">
        <Link href="/" className="text-sm font-medium ">
          Home
        </Link>
        <Link href="/dashboard" className="text-sm font-medium ">
          Dashboard
        </Link>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {user.picture && (
                <div className="relative size-8">
                  <img
                    src={user.picture ?? ""}
                    alt={user.given_name ?? "User"}
                    className="object-cover rounded-full"
                  />
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
              Sign up``
            </RegisterLink>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden" onClick={toggleNavMenu}>
        <AlignRight className="cursor-pointer active:text-purple-500" />
      </div>
      <div
        className={
          NavMenu
            ? "fixed top-0 left-0 w-[70%] h-screen bg-[#f2f2f2] p-10 ease-in duration-500 z-10 md:hidden"
            : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
        }
      >
        <div className="flex justify-end items-center" onClick={toggleNavMenu}>
          <X className="cursor-pointer" />
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <Link href="/" className="text-md font-medium hover:text-purple-500" onClick={toggleNavMenu}>
            Home
          </Link>
          <Link href="/dashboard" className="text-md font-medium hover:text-purple-500" onClick={toggleNavMenu}>
            Dashboard
          </Link>
        </div>
        { user ? (
           <div className="flex flex-col mt-6 gap-6">
            <div className="flex items-center gap-2">
              {user.picture && (
                <div className="relative size-8">
                  <img
                    src={user.picture ?? ""}
                    alt={user.given_name ?? "User"}
                    className="object-cover rounded-full"
                  />
                </div>
              )}
              <p className=" font-semibold text-md">{user.given_name}</p>
            </div>
            <LogoutLink className={buttonVariants({ variant: "secondary" })}>
              Logout
            </LogoutLink>
          </div>
        ) : (
          <div className="flex flex-col mt-6 gap-6">
            <LoginLink className={`${buttonVariants()} bg-purple-500`}>
              Login
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign up
            </RegisterLink>
          </div>
        )
        }

      </div>
    </nav>
  );
}
