import React, { useState } from 'react'
import { createContext } from 'react'
import StudentDummy from '../Student/data'

export const StudentContext = createContext(null)

const StudentProvider = ({child}) => {
  const [students, setStudents] = useState(StudentDummy)
  return (
    <StudentContext.Provider value={{students}}>
      {child}
    </StudentContext.Provider>
  )
}

export default StudentProvider