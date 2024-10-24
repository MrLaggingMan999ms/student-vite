import { useCallback, useContext, useMemo, useState } from "react";
import { StudentContext } from "../context/StudentProvider";
import StudentList from "./StudentList";
const Student = () => {
    
    return (
    <div>
        <StudentList/>
    </div>
  )
}

export default Student