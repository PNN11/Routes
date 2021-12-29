import React, { useCallback } from "react";

import { useParams, Link } from "react-router-dom";

import { getTodo } from "../../api/todos";

import { TodoWrapper } from "../../components/Todo/TodoStyles";

import { UserInfoWrapper, TodoDetailWrapper } from "./TodoDetailsStyle";

import { CircularProgress, Switch } from "@mui/material";

import useRequest from "../../hooks/useRequest";
import { getUser } from "../../api/users";

const TodoDetails = () => {
  const params = useParams();

  const requestTodo = useCallback(() => getTodo(params.id), [params.id]);

  const { data: todo, loading, error } = useRequest(requestTodo);

  const requestUser = useCallback(() => {
    if (!todo?.userId) return Promise.resolve();
    return getUser(todo.userId);
  }, [todo?.userId]);

  const { data: user, loadingUser, errorUser } = useRequest(requestUser);

  return (
    <TodoDetailWrapper>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading && !error && todo && (
        <>
          <Link to="/todos">Back</Link>
          {!loadingUser && !errorUser && user && (
            <UserInfoWrapper>
              <Link to={`/users/${user.id}`}>Author: {user.name}</Link>
            </UserInfoWrapper>
          )}
          <TodoWrapper completed={todo.completed}>
            <h5>{todo.title}</h5>
            <Switch defaultChecked={todo.completed}></Switch>
          </TodoWrapper>
        </>
      )}
    </TodoDetailWrapper>
  );
};

export default TodoDetails;
