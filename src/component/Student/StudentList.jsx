import { memo, useContext } from "react"
import StudentCard from "./StudentCard"
import { StudentContext } from "../context/StudentProvider"
const StudentList = () => {
  console.log("render student list")
  
  const handleDelete=(id)=>{
    console.log("Delete", id)
    setStudent((prev)=>[...prev.filter(st=>st.sID !=id)])
  }

  const {student,setStudent} = useContext(StudentContext)
  // console.log(ctxValues)
  
  return (
    <>
        <h1 className="text-xl font-bold">Student List</h1>
        <div className="flex gap-4 flex-wrap mt-4">
          {
            student.map((st, index)=>(
              <StudentCard 
              key={index}
              name={st.name} 
              major={st.major} 
              sID={st.sID} 
              avatar={st.avatar}
              setStudent={setStudent}
              handleDelete={handleDelete}
            />
            ))
          }
        </div>
    </>
  )
}
export default memo(StudentList)