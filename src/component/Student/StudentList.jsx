import { memo, useContext } from "react";
import StudentCard from "./StudentCard";
import useStudent from "../../hooks/useStudent";

const StudentList = () => {
  console.log("render student list");

  const { state } = useStudent();
  console.log(state);
  
  return (
    <>
      <h1 className="text-xl font-bold">Student List</h1>
      <div className="flex gap-4 flex-wrap mt-4">
        {state.isLoading ? (
          "Loading..."
        ) : state.data.length > 0 ? (
          state.data.map((st) => <StudentCard key={st._id} student={st} />)
        ) : (
          <div> No Data</div>
        )}
      </div>
    </>
  );
};
export default memo(StudentList);
