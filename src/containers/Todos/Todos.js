import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSliceTodos, getTodos } from "../../store/todos";
import { CircularProgress, Container } from "@mui/material";
import Todo from "../../components/Todo/Todo";
import * as Statuses from "../../store/statuses";

const Todos = () => {
  const { todos, todosRequestStatus } = useSelector(getSliceTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Container>
      {todosRequestStatus === Statuses.PENDING && <CircularProgress />}
      {todosRequestStatus === Statuses.FAILURE && "some error..."}
      {todos &&
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
