import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";

function App() {
  return (
    <>
      <h1>Redux Student Management</h1>

      <StudentForm />
      <StudentList />
    </>
  );
}

export default App;