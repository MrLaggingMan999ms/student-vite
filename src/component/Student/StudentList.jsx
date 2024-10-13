import StudentCard from "./StudentCard"
const StudentList = ({student,setStudent}) => {
  console.log("render student list")
  
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
            />
            ))
          }
            <StudentCard 
              name={"KK"} 
              major={"Math"} 
              sID={"001"} 
              avatar={"https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY19hNDdmMzk1OS0zZDAyLTRiZWEtYTEzOS1lYzI0ZjdhNjEwZGFfMS5qcGc.jpg"}
            />
            
        </div>
    </>
  )
}
export default StudentList