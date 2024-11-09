import useStudent from "../../hooks/useStudent";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
const Student = () => {
  
  const { dispatch } = useStudent();
  
  const handleSelectChange = (e) =>{
    console.log(e.target.value);
    dispatch({type:"FILTER",payload:{major: e.target.value}})
  }
    return (
    <div>
        <StudentForm/>
        <select onChange={handleSelectChange}>
          <option value="all">
            All
          </option>
          <option value="english">
            English
          </option>
          <option value="math">
            Math
          </option>
        </select>
        <StudentList/>
    </div>
  )
}

export default Student