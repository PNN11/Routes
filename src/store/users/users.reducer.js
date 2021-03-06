import * as Statuses from "../statuses";
import {
  SET_USERS_REQUEST_STATUS_PENDING,
  SET_USERS_REQUEST_STATUS_FAILURE,
  SET_USERS,
  SET_USER_REQUEST_STATUS_PENDING,
  SET_USER_REQUEST_STATUS_FAILURE,
  SET_USER,
} from "./users.actions";

export const initialState = {
  usersRequestStatus: Statuses.UNCALLED,
  users: [],
  userRequestStatus: Statuses.UNCALLED,
  user: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_REQUEST_STATUS_PENDING:
      return { ...state, usersRequestStatus: Statuses.PENDING };
    case SET_USERS_REQUEST_STATUS_FAILURE:
      return { ...state, usersRequestStatus: Statuses.FAILURE };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        usersRequestStatus: Statuses.SUCCESS,
      };

    case SET_USER_REQUEST_STATUS_PENDING:
      return { ...state, userRequestStatus: Statuses.PENDING };
    case SET_USER_REQUEST_STATUS_FAILURE:
      return { ...state, userRequestStatus: Statuses.FAILURE };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        userRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
