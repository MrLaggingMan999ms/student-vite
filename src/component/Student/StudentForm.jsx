import { useState } from "react";

const StudentForm = ({ setStudent }) => {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [major, setMajor] = useState("");

    console.log({name});
    console.log({avatar});
    console.log({major});

    const handleSubmit = () =>{
        e.preventDefault();
        console.log({name, avatar, major});
    };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="text" name="avatar" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <select name="major" id="major" value={major} defaultValue={0} onChange={(e) => setMajor(e.target.value)}>
            <option value="0">select a major</option>
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
