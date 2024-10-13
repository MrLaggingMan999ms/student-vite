import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { useMemo, useState } from "react";
import StudentDummy from './data';
const Student = () => {
    const [student, setStudent] = useState(StudentDummy)
    const [click, setClick] = useState(0)
    console.log(student);
    
    const marks=[20, 40, 50, 60]
    const totalMark= useMemo (() => {
      console.log("calculation process")
      return marks.reduce((prev, current) => prev + current)},[marks])
    
    console.log(totalMark)
    
    return (
    <div>
        <StudentForm setStudent={setStudent}/>
        <StudentList student={student} setStudent={setStudent}/>
        <button onClick={() => setClick(click + 1)}>ClickME</button>
    </div>
  )
}

export default Student