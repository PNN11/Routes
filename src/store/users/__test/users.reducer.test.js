import {usersReducer, initialState} from "../users.reducer";
import {SET_USERS_REQUEST_STATUS_PENDING,
    SET_USERS_REQUEST_STATUS_FAILURE,
      SET_USER_REQUEST_STATUS_FAILURE,
       SET_USER_REQUEST_STATUS_PENDING,
        SET_USER, SET_USERS} from "../users.actions";
import * as Statuses from "../../statuses";


describe("usersReducer", () => {
    it ("SET_USERS_REQUEST_STATUS_PENDING", () => {
        const action = {type: SET_USERS_REQUEST_STATUS_PENDING};
        expect(usersReducer(initialState, action)).toEqual({...initialState, usersRequestStatus: Statuses.PENDING})
    });
    it ("SET_USERS_REQUEST_STATUS_FAILURE", () => {
        const action = {type: SET_USERS_REQUEST_STATUS_FAILURE};
        expect(usersReducer(initialState, action)).toEqual({...initialState, usersRequestStatus: Statuses.FAILURE})
    });
    it ("SET_USER_REQUEST_STATUS_FAILURE", () => {
        const action = {type: SET_USER_REQUEST_STATUS_FAILURE};
        expect(usersReducer(initialState, action)).toEqual({...initialState, userRequestStatus: Statuses.FAILURE})
    });
    it ("SET_USER_REQUEST_STATUS_PENDING", () => {
        const action = {type: SET_USER_REQUEST_STATUS_PENDING};
        expect(usersReducer(initialState, action)).toEqual({...initialState, userRequestStatus: Statuses.PENDING})
    });
    it ("SET_USERS", () => {
        const action = {type: SET_USERS, payload: [{id:1,text:"test"}]};
        expect(usersReducer(initialState, action)).toEqual({...initialState, usersRequestStatus: Statuses.SUCCESS, users:[{id:1,text:"test"}]})
    });
    it ("SET_USER", () => {
        const action = {type: SET_USER, payload: {id:1,text:"test"}};
        expect(usersReducer(initialState, action)).toEqual({...initialState, userRequestStatus: Statuses.SUCCESS, user:{id:1,text:"test"}})
    });
})