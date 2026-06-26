import { useState } from "react";
import { addCourse }
from "../../services/courseService";

function AdminDashboard() {

  const [title, setTitle] =
    useState("");

  const [price, setPrice] =
    useState("");

  const handleAdd = () => {

    const newCourse = {

      id: Date.now(),

      title: title,

      price: price
    };

    addCourse(newCourse);

    alert("Course Added");

    setTitle("");
    setPrice("");
  };

  return (

    <div>

      <h1>Admin Dashboard</h1>

      <input
       placeholder="Course Name"
       value={title}
       onChange={(e)=>
         setTitle(e.target.value)}
      />

      <input
       placeholder="Price"
       value={price}
       onChange={(e)=>
         setPrice(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Course
      </button>

    </div>
  );
}

//lms or jobportal -> ecommercve 
//admin-> employe add -> employee login


export default AdminDashboard;