import { createContext, useReducer } from "react";

export const initial_state = {};

export const AppContext = createContext(initial_state);

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_RESPONSE":
      //do some
      return { ...state, ...{ [payload.id]: payload.response } };

    default:
      return state;
  }
};

export const useStore = () => {
  //    return useContext(AppContext);
  return useReducer(reducer, initial_state);
};
