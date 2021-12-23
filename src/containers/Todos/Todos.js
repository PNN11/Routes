import React, { useState, useEffect } from "react";

//import styled from "styled-components";

import { getTodos } from "../../api/todos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTodos()
      .then((todos) => setTodos(todos))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ul>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
};

export default Todos;
