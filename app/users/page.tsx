import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  // This is a server side rendered page
  // No usestate or useeffect hooks can be used here
  // We store the data in a variable and return it
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
