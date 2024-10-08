import cssClass from './studentCard.module.css'
const StudentCard = ({name, sID, major, avatar}) => {

  return (
    <div className='border p-1 border-stone-950 rounded-xl cursor-pointer hover:bg-sky-500 transition-all duration-500 ease-in-out hover:scale-90 hover:text-white'>
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