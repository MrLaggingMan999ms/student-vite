import { memo, useContext } from "react";
import StudentCard from "./StudentCard";
import { StudentContext } from "../context/StudentProvider";
const StudentList = () => {
  console.log("render student list");

  const { students } = useContext(StudentContext);
  // console.log(ctxValues)

  return (
    <>
      <h1 className="text-xl font-bold">Student List</h1>
      <div className="flex gap-4 flex-wrap mt-4">
        {students.isLoading ? (
          "Loading..."
        ) : students.data.length > 0 ? (
          students.data.map((st) => <StudentCard key={st._id} student={st} />)
        ) : (
          <div> No Data</div>
        )}
      </div>
    </>
  );
};
export default memo(StudentList);
