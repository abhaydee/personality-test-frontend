import { createContext, useReducer } from "react";

const initialState = {
  score: null,
};

export const AuthContext = createContext({
  score: null,
  setScore: (data) => {},
});

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_SCORE":
      return {
        ...state,
        score: action.payload.data,
      };
    default:
      return state;
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  const setScore = (data) => {
    dispatch({
      type: "SET_SCORE",
      payload: data,
    });
  };
  return (
    <AuthContext.Provider
      value={{ score: state.score, setScore }}
      {...props}
    ></AuthContext.Provider>
  );
};
