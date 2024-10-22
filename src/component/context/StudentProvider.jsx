// import React, { useState } from 'react'
import { createContext, useEffect, useReducer } from 'react'
// import StudentDummy from '../Student/data'
const initStudent ={
  data:[],
  isLoading:false,
  isError:false
}
export const StudentContext = createContext(null)

const StudentProvider = ({children}) => {
  // const [student, setStudents] = useState(StudentDummy)


  const studentReducer = (state,action)=>{
    console.log(action)

    switch (action.type) {
      case "Fetch":
        return {...state,data:action.payload, isLoading:false}
      case "LOADING":
        return{...state, isLoading:false}
      default:
        return {...state};
    }
  }

  const [student, dispatch] = useReducer(studentReducer, initStudent)
  
  console.log(students)

  useEffect(() => {
    dispatch({type:"LOADING"})
    fetch ("https://st-api.kaungmyatsoe.dev/api/v1/students",{
      method: "GET",
      headers:{
        keys:"43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w"
      }
    })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        //dispatch 
        dispatch({type:"FETCH", payload: data})
      })
  
  }, [third])
  
  
  return (
    <StudentContext.Provider value={{students, dispatch}}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider