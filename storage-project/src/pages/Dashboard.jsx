import { useEffect, useState } from "react";

import StudentForm
from "../components/StudentForm";

import StudentList
from "../components/StudentList";

import {
 getStudents,
 saveStudents
}
from "../services/localStorageService";

function Dashboard() {

 const [students,setStudents] =
 useState([]);

 useEffect(() => {

   const savedStudents =
   getStudents();

   setStudents(savedStudents);

 }, []);

 const addStudent = (name) => {

   const newStudent = {

      id: Date.now(),

      name
   };

   const updatedStudents = [

      ...students,

      newStudent
   ];

   setStudents(updatedStudents);

   saveStudents(updatedStudents);
 };

 const deleteStudent = (id) => {

   const filteredStudents =
   students.filter(
     student =>
     student.id !== id
   );

   setStudents(filteredStudents);

   saveStudents(filteredStudents);
 };

 return (

   <div>

      <h1>
        Student Dashboard
      </h1>

      <StudentForm
        addStudent={addStudent}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />

   </div>
 );
}

export default Dashboard;