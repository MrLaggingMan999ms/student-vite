import { createContext, useEffect, useReducer } from "react";
import studentReducer from "../reducers/studentReducer";


export const StudentContext = createContext(null);

const initStudent = {
  data: [],
  isLoading: false,
  isError: false,
  students:[],
  };

const StudentProvider = ({ children }) => {

  const [state, dispatch] = useReducer(studentReducer, initStudent);

  useEffect(() => {
    console.log(state.data);
  }, [state.data]);

  const fetchStudent = async (signal) => {
    try {
      const res = await fetch(
        "https://st-api.kaungmyatsoe.dev/api/v1/students",
        {
          method: "GET",
          headers: {
            key: "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
          },
          signal,
        }
      );

      const data = await res.json();
      console.log(data);
      // Dispatch
      dispatch({ type: "FETCH", payload: data.students });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const controller = new AbortController();

    fetchStudent(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
