import { useCallback, useContext, useMemo, useState } from "react";
import { StudentContext } from "../context/StudentProvider";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
const Student = () => {
    
    return (
    <div>
        <StudentForm/>
        <StudentList/>
    </div>
  )
}

export default Student