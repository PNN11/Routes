import React, { useState, useEffect } from "react";

import { getUsers } from "../../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then((users) => setUsers(users))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ul>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default Users;
