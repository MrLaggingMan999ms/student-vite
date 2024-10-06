import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { useState } from "react";
import StudentDummy from './data';
const Student = () => {
    const [student, setStudent] = useState(StudentDummy)
    return (
    <div>
        <StudentForm setStudent={setStudent}/>
        <StudentList student={student}/>
    </div>
  )
}

export default Student