import { memo, useContext } from "react";
import StudentCard from "./StudentCard";
import { StudentContext } from "../context/StudentProvider";
const StudentList = () => {
  console.log("render student list");

  const { student } = useContext(StudentContext);
  // console.log(ctxValues)

  return (
    <>
      <h1 className="text-xl font-bold">Student List</h1>
      <div className="flex gap-4 flex-wrap mt-4">
        {student.isLoading
          ? "Loading..."
          : student.data.length > 0 &&
            student.data.map((st) => (
              <StudentCard
                key={st._id} 
                name={st.name}
                major={st.major}
                sID={st.studentCode}
                avatar={st.avatar}
              />
            ))}
      </div>
    </>
  );
};
export default memo(StudentList);
