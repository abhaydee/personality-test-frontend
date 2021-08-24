import { createContext, useReducer } from "react";

const initialState = {
  score: null,
  ansCount:0
};

export const AuthContext = createContext({
  score: null,
  ansCount:0,
  setScore: (data) => {},
  setAnsCount:(data)=>{}
});

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_SCORE":
      return {
        ...state,
        score: action.payload.data,
      };
    case "SET_ANSCOUNT":
      return {
        ...state,
        ansCount:action.payload
      }
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
  const setAnsCount =(data)=>{
    dispatch({
      type:"SET_ANSCOUNT",
      payload:data
    })
  }
  return (
    <AuthContext.Provider
      value={{ score: state.score, setScore,ansCount:state.ansCount,setAnsCount }}
      {...props}
    ></AuthContext.Provider>
  );
};
