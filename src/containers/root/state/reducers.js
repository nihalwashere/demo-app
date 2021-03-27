import { SET_USERS_LIST, SET_IS_LOADING, ADD_USER } from "./types";
import { resolveUsersList } from "./helper";

const initialState = {
  usersList: [],
  isLoading: false,
};

export const rootContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return { ...state, usersList: action.payload };

    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case ADD_USER:
      return {
        ...state,
        usersList: resolveUsersList(state.usersList, action.payload),
      };

    default:
      return { ...state };
  }
};
