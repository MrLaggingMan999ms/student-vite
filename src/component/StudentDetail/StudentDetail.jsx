import { useParams } from "react-router-dom";
import useStudent from "../../hooks/useStudent";

const StudentDetail = ({ code }) => {
  const { code: c } = useParams
  console.log(c);
  
  const { state } = useStudent();
  const student = state.students.find((st) => st.studentCode == code);
  console.log(student);

  return <div>StudentDetail/{student.name}</div>;
};

export default StudentDetail;