import React from "react";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TodoWrapper } from "./TodoStyles";

const Todo = ({ title, completed, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/todos/${id}`);
  };
  return (
    <TodoWrapper completed={completed}>
      <h5 onClick={handleClick}>{title}</h5>
      <Switch defaultChecked={completed}></Switch>
    </TodoWrapper>
  );
};

export default Todo;
