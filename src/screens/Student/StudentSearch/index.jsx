import React from "react";
import { useSearchParams } from "react-router-dom";
import useStudent from "../../../hooks/useStudent";

const StudentSearchScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useStudent();
  const key = searchParams.get("key");
  console.log(searchParams.get("key"));

  const stFilter = state.students.filter((st) =>
    st.name.toLowerCase().includes(key)
  );
  console.log(stFilter);

  return <div>StudentSearchScreen/{stFilter.length}</div>;
};

export default StudentSearchScreen;
