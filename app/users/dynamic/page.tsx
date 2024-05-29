import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const DynamicUserPage = async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  console.log("sortOrder", sortOrder);
  const users: User[] = await res.json();

  const sortedUsers: User[] = sort(users).asc(
    sortOrder === "name" ? (user) => user.name : (user) => user.email
  );

  return (
    <>
      <h1>Users</h1>
      <h2>{new Date().toLocaleString()}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href={"/users/dynamic?sortOrder=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users/dynamic?sortOrder=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DynamicUserPage;
