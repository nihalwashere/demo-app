import {
  GET_USERS_LIST,
  SET_USERS_LIST,
  SET_IS_LOADING,
  ADD_USER,
} from "./types";

export const setUsersList = (payload) => ({
  type: SET_USERS_LIST,
  payload,
});

export const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

// async

export const getUsersListSagaAction = () => ({
  type: GET_USERS_LIST,
});
