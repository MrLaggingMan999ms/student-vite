import StudentCard from "./studentCard"

const StudentList = () => {
  return (
    <>
        <h1>Student List</h1>
        <div style={{display:'flex', gap:'2rem'}}>
            <StudentCard/>
            <StudentCard/>
        </div>
    </>
  )
}

export default StudentList