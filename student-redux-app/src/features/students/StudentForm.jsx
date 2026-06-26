import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";

function StudentForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addStudent({
        id: Date.now(),
        name,
      })
    );

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Enter Name"
      />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;