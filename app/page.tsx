import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href={"/users"}>Users</Link>
      <br />
      <Link href={"/users/dynamic"}>Dynamic Users</Link>
      <br />
      <Link href={"/users/static"}>Static Users</Link>
      <br />
      <Link href={"/users/new"}>New Users</Link>
      <br />
      <Link href={"/admins"}>Admins</Link>
    </main>
  );
};

export default Home;
