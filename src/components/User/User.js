import { Button } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

import { UserCard } from "./UserStyles";

const User = ({ name, email, phone, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };
  return (
    <UserCard>
      <h5>{name}</h5>
      <p>{email}</p>
      <p>{phone}</p>
      <Button variant="outlined" color="inherit" onClick={handleClick}>
        Details
      </Button>
    </UserCard>
  );
};

export default User;
