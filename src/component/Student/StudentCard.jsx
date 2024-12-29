import { memo, useMemo, useState } from "react";
import cssClass from "./studentCard.module.css";
import useStudent from "../../hooks/useStudent";
import { Link } from "react-router-dom";
const StudentCard = ({ student }) => {
  const { name, studentCode, major, avatar, _id } = student;

  const { dispatch } = useStudent();

  const [isDeleting, setisDeleting] = useState(false);

  const deleteStudent = async (sID) => {
    try {
      const res = await fetch(
        "https://student-api-test.vercel.app/api/v1/students/" + sID,
        {
          method: "DELETE",
          headers: {
            key: "43/UgWoJWW8pXKRmM48xYp8uuIXXLaBM1USAblj50X5GrVUdaluW36lEjoAbylSL6m4g9OXOxb9p7teXUyph5w",
          },
        }
      );

      console.log(res);

      if (res.ok) {
        const data = await res.json();
        return data.student;
      }

      return null;
    } catch (error) {
      console.log(error);
      alert("Error");
      return null;
    }
  };

  const handleDelete = async () => {
    setisDeleting(true);

    const deletedStudent = await deleteStudent(_id);

    if (deleteStudent._id) {
      dispatch({
        type: "DELETE_STUDENT",
        payload: { _id: deletedStudent._id },
      });
    }
    setisDeleting(false);
  };

  const UpdateName = useMemo(() => {
    return "StuKMD";
  }, [name]);

  console.log("re-render StudentCard");

  return (
    <div className="border p-1 border-stone-950 rounded-xl cursor-pointer hover:bg-black transition-all duration-500 ease-in-out hover:scale-90 hover:text-white">
      <Link to={`/student/${student.studentCode}`}>
        <div className="student-header">
          <div>
            <img src={avatar} alt={name} className={cssClass.studentimage} />
            <div>
              <h2>
                {UpdateName}-{name}
              </h2>
              <p>Student ID : {studentCode}</p>
            </div>
          </div>
        </div>
        <div className="studentMajor">Major : {major}</div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white rounded-sm p-3"
        >
          {isDeleting ? "Processing" : "Delete"}
        </button>
      </Link>
    </div>
  );
};

export default memo(StudentCard);
