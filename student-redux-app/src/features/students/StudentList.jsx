import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "./studentSlice";

function StudentList() {
  const dispatch = useDispatch();

  const students = useSelector(
    (state) => state.students.studentList
  );

  return (
    <>
      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          {student.name}

          <button
            onClick={() =>
              dispatch(deleteStudent(student.id))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default StudentList;