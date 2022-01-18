import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getSliceUsers } from "../../store/users";
import User from "../../components/User/User";
import { UsersWrapper } from "./UsersStyle";
import { CircularProgress } from "@mui/material";
import * as Statuses from "../../store/statuses";

const Users = () => {
  const { users, usersRequestStatus } = useSelector(getSliceUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UsersWrapper>
      {usersRequestStatus === Statuses.PENDING && <CircularProgress />}
      {usersRequestStatus === Statuses.FAILURE && "some error..."}
      {users && users.map((user) => <User key={user.id} {...user} />)}
    </UsersWrapper>
  );
};

export default Users;
