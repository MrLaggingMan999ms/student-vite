import { useRef, useState } from "react";

const StudentForm = ({ setStudent }) => {

  const refName = useRef(null)
  const refAvatar = useRef(null)
  const refMajor = useRef(null)

  console.log("render");
  const getID = () => {
    return Math.round(Math.random() * 1000);
  };
  const frmReset = () => {

    refName.current.value=""
    refAvatar.current.value=""
    refMajor.current.value="major"
    refName.current.focus()
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ref:", refName.current.value);
    console.log("ref:", refAvatar.current.value);
    console.log("ref:", refMajor.current.value);

    const createStudent={
      name:refName.current.value, 
      avatar:refAvatar.current.value, 
      major:refMajor.current.value
    }

    const {name, major, avatar} = createStudent;
    
    if (!name || !major || !avatar) {
      alert("Please fill your data");
    } else {
      const newStudent = { sID: getID(), ...createStudent};
      setStudent((prev) => [...prev, newStudent]);
      frmReset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={refName}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            ref={refAvatar}
          />
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <select
            name="major"
            id="major"
            defaultValue={"major"}
            ref={refMajor}
          >
            <option value="major">select a major</option>
            <option value="math">Math</option>
            <option value="eng">English</option>
            <option value="chem">Chemistry</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default StudentForm;
