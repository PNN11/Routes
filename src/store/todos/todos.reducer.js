import * as Statuses from "../statuses";
import {
  SET_TODOS_REQUEST_STATUS_PENDING,
  SET_TODOS_REQUEST_STATUS_FAILURE,
  SET_TODOS,
  SET_TODO_REQUEST_STATUS_PENDING,
  SET_TODO_REQUEST_STATUS_FAILURE,
  SET_TODO,
} from "./todos.actions";

const initialState = {
  todosRequestStatus: Statuses.UNCALLED,
  todos: [],
  todoRequestStatus: Statuses.UNCALLED,
  todo: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS_REQUEST_STATUS_PENDING:
      return { ...state, todosRequestStatus: Statuses.PENDING };
    case SET_TODOS_REQUEST_STATUS_FAILURE:
      return { ...state, todosRequestStatus: Statuses.FAILURE };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        todosRequestStatus: Statuses.SUCCESS,
      };

    case SET_TODO_REQUEST_STATUS_PENDING:
      return { ...state, todoRequestStatus: Statuses.PENDING };
    case SET_TODO_REQUEST_STATUS_FAILURE:
      return { ...state, todoRequestStatus: Statuses.FAILURE };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
        todoRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
