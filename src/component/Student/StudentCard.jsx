import cssClass from './studentCard.module.css'
const StudentCard = ({name, sID, major, avatar}) => {

  return (
    <div>
        <div className='student-header'>
          <div>
            <img src={avatar} alt={name} className={cssClass.studentimage}/>
            <div>
              <h2>{name}</h2>
              <p>Student ID : {sID}</p>
            </div>
          </div>
        </div>
        <div className="studentMajor">
          Major : {major}
        </div> 
    </div>
  )
}

export default StudentCard