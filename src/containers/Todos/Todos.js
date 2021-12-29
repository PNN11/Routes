import React from "react";

//import styled from "styled-components";

import useRequest from "../../hooks/useRequest";

import { getTodos } from "../../api/todos";
import { CircularProgress, Container } from "@mui/material";
import Todo from "../../components/Todo/Todo";

const Todos = () => {
  const { data: todos, loading, error } = useRequest(getTodos);

  return (
    <Container>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading &&
        !error &&
        todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
    </Container>
  );
};

export default Todos;
