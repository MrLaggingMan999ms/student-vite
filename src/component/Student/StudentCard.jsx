//import './studentCard.css'
//import cssClasses from './studentCard.module.css'
import {studentimage} from './studentCard.module.css'
const StudentCard = () => {
    //console.log(cssClasses);
  return (
    <div>
        <img 
        src="https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=" 
        alt="Aye Aye" 
        className={studentimage}
        />
        <p>Aye Aye</p>
    </div>
  )
}

export default StudentCard