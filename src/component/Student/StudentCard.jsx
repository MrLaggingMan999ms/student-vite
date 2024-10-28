import { memo, useMemo } from 'react'

import cssClass from './studentCard.module.css'
const StudentCard = ({name, sID, major, avatar, setStudent, handleDelete}) => {
  const UpdateName = useMemo(() =>{
    return 'StuKMD'
  },[name])
  console.log("re-render StudentCard")
 
  return (
    <div className='border p-1 border-stone-950 rounded-xl cursor-pointer hover:bg-black transition-all duration-500 ease-in-out hover:scale-90 hover:text-white'>
        <div className='student-header'>
          <div>
            <img src={avatar} alt={name} className={cssClass.studentimage}/>
            <div>
              <h2>{UpdateName}-{name}</h2>
              <p>Student ID : {sID}</p>
            </div>
          </div>
        </div>
        <div className="studentMajor">
          Major : {major}
        </div>
        <button onClick={()=>handleDelete(sID)} className='bg-red-600 text-white rounded-sm p-3'>Delete</button>
    </div>
  )
}

export default memo(StudentCard)