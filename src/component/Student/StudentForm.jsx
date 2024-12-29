/* eslint-disable react/prop-types */
import {  useRef, useState } from "react";
import { StudentContext } from "../../context/StudentProvider";
import useStudent from "../../hooks/useStudent";

const StudentForm = () => {
  const { dispatch } = useStudent();
  const [isCreating, setIsCreating] = useState(false);

  const refName = useRef(null);
  const refAvatar = useRef(null);
  const refMajor = useRef(null);
  const refEmail = useRef(null);

  const frmReset = () => {
    refAvatar.current.value = "";
    refName.current.value = "";
    refMajor.current.value = "0";
    refEmail.current.value = "@gmail.com";

  };

  const createStudent = async (newStudent) => {
      try {
        
      
      const res = await fetch(
        "https://student-api-test.vercel.app/api/v1/students/",
        {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            key:
              "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
            "Content-Type": "application/json",
          },
        }
      );
        if(res.ok){
        const data = await res.json();
        return data.student;
        }
        return null

      } catch (error) {
        alert(error.msg)
        return null;
      }
     
  };
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    setIsCreating(true);

    const newStudent = {
      name: refName.current.value,
      major: refMajor.current.value,
      avatar: refAvatar.current.value,
      email: refEmail.current.value
    };
    const { name, major, avatar, email } = newStudent;
    if ((name, major, avatar, email)) {
      const createdStudent = await createStudent(newStudent);
      console.log(createdStudent);

      if (createdStudent) {
        dispatch({ type: "ADD_STUDENT", payload: createdStudent });
      }
      frmReset();
    } else {
      alert("required data");
    }
    setIsCreating(false);
  };

  return (
    <div className="w-[40%] border px-4 py-6 my-6 rounded-md border-slate-700">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={refName}
            className="border-2 p-1 border-slate-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            ref={refAvatar}
            className="border-2 p-1 border-slate-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={refEmail}
            className="border-2 p-1 border-slate-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="major">major</label>
          <select
            name="major"
            id="major"
            defaultValue={"0"}
            ref={refMajor}
            className="border-2 p-1 border-slate-700"
          >
            <option value="0">select a major</option>
            <option value="math">Math</option>
            <option value="english">English</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-3 rounded-lg mt-2"
          disabled={isCreating}
        >
          {isCreating ? "Processing" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
