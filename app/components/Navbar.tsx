"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data } = useSession();
  return (
    <header>
      <nav className="flex gap-5 bg-slate-600 p-5">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/users">Users</Link>
        <Link href="/admins">Admins</Link>
        {status === "authenticated" && (
          <>
            <Link href="/profile">{data.user!.name}</Link>
            <Link href="/api/auth/signout">Logout</Link>
          </>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
