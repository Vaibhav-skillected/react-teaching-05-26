function StudentList({

  students,
  deleteStudent

}) {

  return (

    <ul>

      {
        students.map((student)=>(

          <li key={student.id}>

            {student.name}

            <button
              onClick={() =>
                deleteStudent(student.id)
              }
            >
              Delete
            </button>

          </li>

        ))
      }

    </ul>

  );
}

export default StudentList;