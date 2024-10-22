import React, { useState } from 'react'
import { createContext } from 'react'
import StudentDummy from '../Student/data'

export const StudentContext = createContext(null)

const StudentProvider = ({children}) => {
  const [student, setStudents] = useState(StudentDummy)
  return (
    <StudentContext.Provider value={{student,setStudents}}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider