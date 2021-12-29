import React from "react";

import useRequest from "../../hooks/useRequest";

import { getUsers } from "../../api/users";
import User from "../../components/User/User";
import { UsersWrapper } from "./UsersStyle";
import { CircularProgress } from "@mui/material";

const Users = () => {
  const { data: users, loading, error } = useRequest(getUsers);

  return (
    <UsersWrapper>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading &&
        !error &&
        users &&
        users.map((user) => <User key={user.id} {...user} />)}
    </UsersWrapper>
  );
};

export default Users;
