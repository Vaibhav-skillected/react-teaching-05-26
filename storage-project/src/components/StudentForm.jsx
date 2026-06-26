import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] =
  useState("");

  const submitHandler = () => {

    if (!name) return;

    addStudent(name);

    setName("");
  };

  return (
    <div>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <button onClick={submitHandler}>
        Add Student
      </button>

    </div>
  );
}

export default StudentForm;