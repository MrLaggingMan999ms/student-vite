import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

const useStudent = () => {
  const { state, dispatch } = useContext(StudentContext);
  return { state, dispatch };
};

export default useStudent;