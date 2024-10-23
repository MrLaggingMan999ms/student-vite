/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const StudentContext = createContext(null);

const initStudent = {
  data: [],
  isLoading: false,
  isError: false,
  students: [],
};

const studentReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH":
      return { ...state, data: action.payload, isLoading: false };
    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initStudent);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch("https://st-api.kaungmyatsoe.dev/api/v1/students", {
      method: "GET",
      headers: {
        key: "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Dispatch
        dispatch({ type: "FETCH", payload: data });
      });
  }, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
