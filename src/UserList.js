import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function UserList() {
  const [users, setUSers] = useState([]);

  useEffect(() => {
    const Users = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
        setUSers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    Users();

    return () => {};
  }, []);

  return (
    <div>
      {users.map((user) => (
        <li>
          {user.name}, {user.username},{user.email},{user.adress}
        </li>
      ))}
    </div>
  );
}

export default UserList;
